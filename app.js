require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const { MongoClient } = require("mongodb");

const app = express();

const port = 8080 || process.env.PORT;

const uri = process.env.DB_STRING;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;
async function run() {
  try {
    await client.connect();
    db = await client.db("cloudy-blog");
    console.log("Connected to cloudy-blog database.");
  } catch (error) {
    console.error(error.message);
  }
}
run();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
