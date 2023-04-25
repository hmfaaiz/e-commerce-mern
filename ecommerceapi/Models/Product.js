const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    desc: { type: String, unique: true, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
},
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)