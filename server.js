const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/posts", (req, res) => {});
app.listen(8000, () => {
  console.log("Server is running on port 5000");
});
