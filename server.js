const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

//app.use(express.static(path.join(__dirname, "public")));
("");
let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
];
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
