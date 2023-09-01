const express = require("express");
const bodyParser = require("body-parser");
const xml = require("xml");
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const { MongoClient, ObjectID } = require("mongodb");

const app = express();
app.set("view engine", "ejs");
app.set("json spaces", 3);

app.use(morgan("dev"));
app.use(compression({ threshold: 1 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "client-side")));

const mongoUrl = "mongodb://127.0.0.1:27017/http_cats";

async function startServer() {
  const client = await MongoClient.connect(mongoUrl, {});
  const db = client.db();

  const collection = db.collection("pictures");

  const pictureRoutes = express.Router();

  pictureRoutes.get("/", async (request, response) => {
    try {
      const resultArray = await collection.find().toArray();
      response.format({
        text: () => {
          response.status(406);
          response.send(
            "The server cannot render the requested content type. Accepted types are: \n  *  text/html\n  *  application/xml\n  *  application/json\n\n"
          );
        },
        html: () => {
          response.render("catlist.html.ejs", { catz: resultArray });
        },
        json: () => {
          response.json(resultArray);
        },
        xml: () => {
          response.render("catlist.xml.ejs", { catz: resultArray });
        },
      });
    } catch (err) {
      throw err;
    }
  });

  pictureRoutes.get("/:id", async (request, response) => {
    try {
      const theID =
        request.params.id.length > 20
          ? ObjectID(request.params.id)
          : request.params.id;
      const pictureInfo = await collection.findOne({ _id: theID });
      if (!pictureInfo) {
        response.status(404);
        response.send("No cat with that ID.\n\n");
        return;
      }
      response.format({
        text: () => {
          response.status(406);
          response.send(
            "The server cannot render the requested content type. Accepted types are: \n  *  text/html\n  *  application/xml\n  *  application/json\n\n"
          );
        },
        html: () => {
          response.render("cat.html.ejs", { cat: pictureInfo });
        },
        json: () => {
          response.json(pictureInfo);
        },
        xml: () => {
          response.render("cat.xml.ejs", { theCat: pictureInfo });
        },
      });
    } catch (err) {
      throw err;
    }
  });

  pictureRoutes.post("/", async (request, response) => {
    try {
      request.body.created_at = new Date();
      const result = await collection.insertOne(request.body);
      response.json(request.body);
    } catch (err) {
      throw err;
    }
  });

  pictureRoutes.put("/:id", async (request, response) => {
    try {
      delete request.body._id;
      const result = await collection.updateOne(
        { _id: request.params.id },
        { $set: request.body }
      );
      response.json({ ok: true, result: request.params.id });
    } catch (err) {
      throw err;
    }
  });

  pictureRoutes.delete("/:id", async (request, response) => {
    try {
      const result = await collection.deleteOne({ _id: request.params.id });
      response.json({ ok: true });
    } catch (err) {
      throw err;
    }
  });

  app.use("/catz", pictureRoutes);

  async function fillEmptyDatabase() {
    try {
      const resultArray = await collection.find().toArray();

      if (resultArray.length === 0) {
        const catz = [
          {
            submitter: "Theo Theunissen",
            imageURL: "https://bit.ly/1hXk1oa",
            upVotes: 0,
          },
          {
            submitter: "Robert Holwerda",
            imageURL: "https://i.chzbgr.com/maxW500/8552422912/h65EE8BB6/",
            upVotes: 0,
          },
          {
            submitter: "Lars Tijsma",
            imageURL: "https://i.chzbgr.com/maxW500/8552414976/hF2587F16/",
            upVotes: 0,
          },
        ];

        for (let idx in catz) {
          catz[idx]._id = idx;
          await collection.insertOne(catz[idx]);
          console.log(
            "Database was empty: added",
            parseInt(idx) + 1,
            'LOLcats to the database called "http_cats".'
          );
        }
      }
    } catch (err) {
      throw err;
    }
  }

  fillEmptyDatabase().catch((err) => console.error(err));

  app.listen(3000);
  console.log("Server running on port 3000.");
}

startServer().catch((err) => console.error(err));
