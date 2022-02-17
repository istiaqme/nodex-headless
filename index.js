const express = require('express');
const server = express();
const mongoose = require('mongoose');

server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({extended: true, limit: '50mb'}));

server.use("/", require('./routes/web'));
server.use("/api", require('./routes/api'));

const mongoDBUrl = "mongodb://localhost:27017/workshop_db";

mongoose.connect(mongoDBUrl, {});

const mongoDB = mongoose.connection;

mongoDB.on('error', (error) => console.log(error));
mongoDB.once('open', () => console.log("DB Connected"));





server.listen(5000, () => {
    console.log('Server is listening');
});
