// import packages
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

// set up express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// dummy data
// key: post id
// value: { comment id, comment content }
const commentsByPostId = {};

// endpoints
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] ?? []);
});

app.post("/posts/:id/comments", (req, res) => {
  // create a new comment
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  // add it to comments
  const comments = commentsByPostId[req.params.id] ?? [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  // send response
  res.status(201).send(commentsByPostId[req.params.id]);
});

// run the microservice
app.listen(4001, () => {
  console.log("Comments microservice is running on port 4001.");
});
