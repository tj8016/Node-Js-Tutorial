const dbConnection = require('./mongodb');

const updateDate = async() => {
    let data = await dbConnection();
    let result = await data.updateOne(
        {name: 'Mouse Max'}, 
        {$set: {name: 'Mouse'}}
        );
    console.warn(result);
}

updateDate();