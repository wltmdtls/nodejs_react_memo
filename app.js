const express = require('express');
const app = express();
const cors = require("cors");

var postsRouter = require('./routes/posts');

app.use(express.json());
app.use(cors());

app.use('/posts', postsRouter);


module.exports = app;