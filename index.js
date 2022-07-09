const express = require("express");
const app = express();

// middleware and static content
app.use(express.static("public"));

// for all other routes
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(8080, () => {
  console.log("listening on port http://localhost:8080");
});
