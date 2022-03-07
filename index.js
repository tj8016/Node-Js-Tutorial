const express = require('express');
const path = require('path');

const app = express();

app.get('' , (req, res) => {
    // console.log("data send to browser =>>", req.query.name)
    // res.send(`hello ${req.query.name} this is Home page`);
    res.send(`
    <h1> Hello this is Home page </h2>
    <a href= "/about" > About </a>
    `);
})

app.get('/about' , (req, res) => {
    res.send(`
    <h1> Hello this is About page </h2>
    <a href= "/" > Home </a>
    `);
})

app.get('/help' , (req, res) => {
    res.send('hello this is Help page');
})

app.listen(3000);