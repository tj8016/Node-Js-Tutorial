const dbConnection = require('./mongodb');

const insert = async () => {
    const db = await dbConnection();
    const result = db.insert(
        {
            name: 'Laptop',
            price: 100
        }
    );
    if(result.acknowledged) {
        console.log("data inserted");
    }
}

insert();