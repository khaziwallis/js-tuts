//import * as express from "express";
const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/employee', (req, res) => {
    res.send({
        "name": 'Ramesh',
        "age": 34,
        "company": 'Google'
    });
});

app.post('/addEmployee', (req, res) => {
    var { name } = req.body;
    res.send({
        message: `Successfully Add Employee ${name}`
    });
});

app.listen(5000, () => {
    console.log('Running on Port 5000');
});
