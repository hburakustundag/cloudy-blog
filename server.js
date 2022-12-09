require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const logger = require("morgan");
const methodOverride = require("method-override");
const connectDB = require("./config/database");
const mainRouter = require("./routes/main");
const blogsRouter = require("./routes/blogs");
const authRouter = require("./routes/auth");
const port = process.env.PORT || 8080;

require("./config/passport")(passport);
connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));
// Sessions
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING,
    }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRouter);
app.use("/blogs", blogsRouter);
app.use("/auth", authRouter);

app.listen(port, () => console.log(`App is listening on port ${port}`));
