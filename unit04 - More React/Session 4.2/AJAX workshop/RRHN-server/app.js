const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nocache = require("nocache");
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const firebase = require("firebase");
const { MongoClient, ObjectID } = require("mongodb");
const _ = require("lodash");

const app = express();
app.set("json spaces", 3);

// Just for development:
app.use(morgan("dev"));
app.use(cors());
app.use(nocache());

app.use(compression({ threshold: 1 }));
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, "client-side")));

let firebaseConfig = {
  databaseURL: "https://hacker-news.firebaseio.com",
};
const hn_firebase = firebase.initializeApp(firebaseConfig);

const hnTopStoriesRef = hn_firebase.database().ref("/v0/topstories");

let hnTopStoryCache = {};
let hnTopStoryList = null;
let nextTopStoryCache;

const cacheLoadedPromise = new Promise((fulfill, reject) => {
  hnTopStoriesRef.on("value", async (snapshot) => {
    console.log(
      "Top Stories Update:",
      new Date().toLocaleTimeString("en-US", { hour12: false })
    );
    await getNewHNCache(snapshot.val());
    hnTopStoryList = hnTopStoryCache;
    hnTopStoryCache = nextTopStoryCache;
    nextTopStoryCache = null;
    fulfill(true);
  });
});

async function getNewHNCache(idList) {
  let cacheHits = 0;
  nextTopStoryCache = {};
  const allItemLoadTasks = idList.map(async (id) => {
    if (hnTopStoryCache[id] !== undefined) {
      cacheHits++;
      nextTopStoryCache[id] = hnTopStoryCache[id];
    } else {
      const itemRef = hn_firebase.database().ref("/v0/item/" + id);
      const ss = await itemRef.once("value");
      nextTopStoryCache[id] = ss.val();
    }
  });
  console.log("Cache hits:", cacheHits);
  await Promise.all(allItemLoadTasks);
}

const hnRoutes = express.Router();

hnRoutes.get("/topstories", (request, response) => {
  cacheLoadedPromise.then((dummyValue) => {
    response.json(hnTopStoryList);
  });
});

app.use("/hn", hnRoutes);

async function startServer() {
  const client = await MongoClient.connect("mongodb://localhost:27017/RrHN", {
    useNewUrlParser: true,
  });
  const db = client.db("RrHN");
  const collection = db.collection("itemStatuses");

  const itemStatusRoutes = express.Router();

  itemStatusRoutes.get("/", async (request, response) => {
    try {
      const resultArray = await collection.find().toArray();
      const mapping = {};
      resultArray.forEach((item) => {
        mapping[item._id] = item.status;
      });
      response.json(mapping);
    } catch (err) {
      throw err;
    }
  });

  itemStatusRoutes.put("/:id", async (request, response) => {
    try {
      const theID = parseInt(request.params.id);
      const record = {
        _id: theID,
        status: request.body,
        modified_at: new Date(),
      };
      await collection.save(record);
      response.json({ ok: true, data: record });
    } catch (err) {
      throw err;
    }
  });

  app.use("/itemStatuses", itemStatusRoutes);

  app.listen(3000);
  console.log("Server running on port 3000.");
}

startServer().catch((err) => console.error(err));
