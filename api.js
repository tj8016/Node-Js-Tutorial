const express = require('express');
const res = require('express/lib/response');
const dbConnection = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

// Get Api method
app.get('/', async(req,resp)=> {
    let data = await dbConnection();
    data = await data.find().toArray();
    resp.send({data});
})

// Post Api
app.post('/', async(req,resp) => {
    let data = await dbConnection();
    let result = await data.insertOne(req.body);
    resp.send(result);
})

// Put Api
app.put('/', async(req, resp) => {
    let data = await dbConnection();
    let result = await data.updateOne(
        {name: req.body.name},
        {$set: req.body}
        );
    resp.send({result: "update"});
})

// Delete Api
app.delete("/:id", async(req, resp) => {
    console.log(req.params.id);
    let data = await dbConnection();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result);
})

app.listen(3000);