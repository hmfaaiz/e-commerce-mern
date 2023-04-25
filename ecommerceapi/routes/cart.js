const router = require('express').Router();
const Cart = require('../Models/Cart');
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const { verifyTokenAdmin } = require("./verifyToken");
const { verifyToken} = require("./verifyToken");
const { verifyTokenAutherization} = require("./verifyToken");




//Add Product to Cart
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const saveCart = await newCart.save();
        res.status(200).json(saveCart)
    }


    catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})
    ;


//Update Product

router.put("/:id", verifyTokenAutherization, async (req, res) => {

    try {

        const updatedCart = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },

            {
                new: true

            }

        );

        res.status(200).json(updatedCart);

    } catch (err) {
        res.status(500).json(err);
    }

});

// // delete Product from cart

router.delete("/:id", verifyTokenAutherization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product is deleted from cart")
    } catch (err) {
        res.status(500).json(err)
    }
});


// // Get Product

router.get("/find/:userId",verifyTokenAutherization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userID:req.params.userId})

        res.status(200).json({ cart })
    } catch (err) {
        res.status(500).json(err)
    }
})



// // Get all product
router.get("/",verifyTokenAdmin,async (req,res)=>{
    try{
        const cart=await Cart.find()
        res.status(200).json({cart})

    }
    catch(err){
        res.status(500).json(err)
    }

})



module.exports = router;