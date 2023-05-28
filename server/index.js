const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;

let comments = [];

const findCommentById = (id) => {
  return comments.find((comment) => comment.id === id);
};

app.use(express.json());

app.get('/comments', cors(), (req, res) => {
  res.send(comments);
});

app.get('/comments/:id', cors(), (req, res) => {
  const { id } = req.params;
  const comment = findCommentById(id);
  res.send(comment);
});

app.post('/comments', cors(), (req, res) => {
  const { username, comment, id } = req.body;
  comments.push({ username, comment, id });
  res.status(201).send(`Comment created. Current list of comments: ${JSON.stringify(comments)}`);
});

app.patch('/comments/:id', cors(), (req, res) => {
  const { newComment } = req.body;
  const { id } = req.params;
  const currentComment = findCommentById(id);
  currentComment.comment = newComment;
  res.status(200).send(`Comment updated. New comment: ${JSON.stringify(currentComment)}`);
});

app.delete('/comments/:id', cors(), (req, res) => {
  const { id } = req.params;
  const commentToDelete = findCommentById(id);
  const index = comments.indexOf(commentToDelete);
  comments.splice(index, 1);
  res.status(200).send(`Comment deleted. Current list of comments: ${JSON.stringify(comments)}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
