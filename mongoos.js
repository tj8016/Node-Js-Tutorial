const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/ecom');
    const productsSch = new mongoose.Schema({
        name : String,
        price : Number
    });
    const productsModel = mongoose.model('products', productsSch);
    let data = new productsModel({name: "laptop", price: 1000});
    let result = await data.save();
    console.log(result);
}
main();

