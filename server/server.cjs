var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionString =
  "mongodb://mongo:buBxSzRaLrVBdbetddmYKFJRPpXmlXBl@crossover.proxy.rlwy.net:55189";

app.get("/get-data", (req, res) => {
  mongoClient.connect(connectionString).then((clientObj) => {
    var database = clientObj.db("mployee");
    database
      .collection("tbl_data")
      .find({})
      .toArray()
      .then((document) => {
        res.send(document);
        res.end();
      })
      .catch((error) => {
        console.log(`Error in fetching data`, error);
      });
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to Job Listing Web Application Task ");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// console.log(`Server started at : http://127.0.0.1:5050`);
