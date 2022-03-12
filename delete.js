const dbConnection = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnection();
    let result = await data.deleteOne({name: 'laptop'});
    console.warn(result);
}

deleteData();