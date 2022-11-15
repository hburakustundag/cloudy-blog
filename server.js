require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoute = require("./routes/homeRouter");
const blogsRoute = require("./routes/blogsRouter");

const port = 8080 || process.env.PORT;

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoute);
app.use("/blogs", blogsRoute);

app.listen(port, () => console.log(`App is listening on port ${port}`));
