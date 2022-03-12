// const dbConnection = require("./mongodb");

// this codes take to much time 
// async function getData() {
//     let result = await client.connect()
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();

// Read data codes

// dbConnection().then((res) => {
//     res.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })

// const main = async () => {
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();
