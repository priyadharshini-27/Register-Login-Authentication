const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

//Ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
