const express = require("express"),
      app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
};

app.get("/", (req, res) => {
  res.send("Hello from FryScience!");
});

let port = process.env.PORT;
app.listen(port, () => {
  console.log("FryScience listening on port " + port);
});