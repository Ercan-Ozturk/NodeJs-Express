import express from "express";
import { createPost, getPost, getPosts } from "../controllers/postController";

const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
];

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post with id of ${id} was not found`);
    err.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});
export default router;
