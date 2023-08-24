var express     = require('express');
var bodyParser  = require('body-parser');
var xml         = require('xml');
var path        = require('path');
var morgan      = require('morgan');
var compression = require('compression');

var app = express();
app.set('view engine', 'ejs');
app.set('json spaces', 3);

app.use(morgan('dev'));
app.use(compression({threshold: 1}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'client-side')));

var mongo    = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

mongo.connect('mongodb://127.0.0.1:27017/http_cats', function(err, db) {
  if(err) throw err;

  var collection = db.collection('pictures');

  var pictureRoutes = express.Router();
  // get the list of movies

  pictureRoutes.get('/', function(request, response) {
      collection.find().toArray( function(err, resultArray){
         if(err) throw err;
         response.format({
            text: function(){
               response.status(406);
               response.send('The server cannot render the requested content type. Accepted types are: \n  *  text/html\n  *  application/xml\n  *  application/json\n\n');
            },
            html: function(){
               response.render("catlist.html.ejs", {catz:resultArray});
            },
            json: function(){
               response.json(resultArray);
            },
            xml: function(){
               response.render("catlist.xml.ejs", {catz:resultArray });
            }
         }); // end res.format
      }); // end collection.find.toArray
   }); // end router.get
   // get a single movie
   pictureRoutes.get('/:id', function(request, response) {
      var theID = request.params.id
      if(theID.length > 20) {
         theID = ObjectId(theID)
      }
      collection.findOne({_id:theID}, function(err, pictureInfo) {
         if(err) throw err;
         if(pictureInfo == null) {
            response.status(404);
            response.send('No cat with that ID.\n\n');
            return;
         }
         response.format({
            text: function(){
               response.status(406);
               response.send('The server cannot render the requested content type. Accepted types are: \n  *  text/html\n  *  application/xml\n  *  application/json\n\n');
            },
            html: function(){
               response.render("cat.html.ejs", {cat:pictureInfo});
            },
            json: function(){
               response.json(pictureInfo);
            },
            xml: function(){
               response.render("cat.xml.ejs", {theCat:pictureInfo });
            }
         }); // end res.format
      }); // end findOne
   }); // end route.get

  pictureRoutes.post('/', function(request, response) {
     request.body.created_at = new Date();
     collection.insert(request.body, function(err, result) {
        if(err) throw err;
        response.json(request.body);
     });
  });

  pictureRoutes.put('/:id', function(request, response) {
     delete request.body._id; // body-parser made _id a string. Mongo does not like that.
     collection.update({_id:request.params.id}, request.body, function(err, result) {
        if(err) throw err;
        request.body[_id] = request.params.id;
        response.json({ok:true, result: request.body[_id]});
     });
  });

  pictureRoutes.delete('/:id', function(request, response) {
     collection.remove({_id: request.params.id}, function(err,result){
        if(err) throw err;
        response.json({ok:true});
     });
  });
  app.use("/catz",pictureRoutes);

   function fillEmptyDatabase() {
      collection.find().toArray( function(err, resultArray){
         if(err) throw err;
         if( resultArray.length == 0) {
            var catz = [ {submitter: "Theo Theunissen", imageURL: "https://bit.ly/1hXk1oa", upVotes: 0},
                         {submitter: "Robert Holwerda", imageURL: "https://i.chzbgr.com/maxW500/8552422912/h65EE8BB6/", upVotes: 0},
                         {submitter: "Lars Tijsma",     imageURL: "https://i.chzbgr.com/maxW500/8552414976/hF2587F16/", upVotes: 0}
                      ];
            for( var idx in catz ) {
               catz[idx]._id = idx;
               var callbackCounter = 0;
               collection.insert(catz[idx], function(err, result) {
                  if(err) throw err;
                  if(callbackCounter==idx) {
                    console.log( "Database was empty: added", parseInt(idx)+1, "LOLcats to the database called \"http_cats\".");
                  } else {
                    callbackCounter++
                  }
               }); // end insert
            } // end for
         } // end if
     }); // end
  } // end function
   fillEmptyDatabase(); // call fillEmptyDatabase immediately
});

app.listen(3000);
console.log("Server running on port 3000.");
