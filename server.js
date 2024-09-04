import express from("express");
import path from("path");
import posts from("./routes/posts");
import port from process.env.PORT || 8000;

const app = express();

app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
