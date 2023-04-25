const router = require('express').Router();
const Product = require('../Models/Product');
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const { verifyTokenAdmin } = require("./verifyToken");




//Add Product
router.post('/addproduct', verifyTokenAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    }


    catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})
    ;


//Update Product

router.put("/:id", verifyTokenAdmin, async (req, res) => {

    try {

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },

            {
                new: true

            }

        );

        res.status(200).json(updatedProduct);

    } catch (err) {
        res.status(500).json(err);
    }

});

// delete Product

router.delete("/:id", verifyTokenAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product is deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});


// Get Product

router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json({ product })
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get all product
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        }
        else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },

            })

        }

        else {
            products = await Product.find()
        };

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    };
})
    ;



module.exports = router;