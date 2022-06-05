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
// value: { post id, post title }
const posts = {};

// endpoints
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});

// run the microservice
app.listen(4000, () => {
  console.log("Posts microservice is running on port 4000.");
});
