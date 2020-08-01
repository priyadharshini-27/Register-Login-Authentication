const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

//db config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected......"))
  .catch((err) => console.log(err));

//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//body-parser
app.use(express.urlencoded({ extended: false }));

//router
app.use("/", require("./routes/index"));
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
