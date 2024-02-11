const Product = require("../models/product-model")

const products = async (req,res) =>{
    try {
        const response = await Product.find()
        if(!response){
            res.status(404)
               .json({msg:"No product found"})
        }
        res.status(200)
           .json({ message : response})
        return products;
    } catch (error) {
        console.log(`product ${error}`)
    }
}

module.exports = products