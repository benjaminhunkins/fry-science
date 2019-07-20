const express = require("express"),
      app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("landing");
});

let port = process.env.PORT;
app.listen(port, () => {
  console.log("FryScience listening on port " + port);
});