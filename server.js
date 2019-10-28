const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connection to mongoDB
mongoose.connect("mongodb://admin:admin123@ds337718.mlab.com:37718/node-basic-setup", { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB"))
    .catch(error => console.error("Could not connect to mongoDB",error));

var usersRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use('/user', usersRouter);

app.get('/', (req, res) => {
    res.send("Node Express sample app");
});

app.listen(process.env.PORT || 8000, () => {
console.log('listening on port 8000');
});