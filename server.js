const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connection to mongoDB
mongoose.connect("mongodb://localhost:27017/node-app", { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB"))
    .catch(error => console.error("Could not connect to mongoDB",error));

var usersRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use('/user', usersRouter);

app.get('/', (req, res) => {
    res.send("ads");
});

app.listen(8000, () => {
console.log('listening on port 8000');
});