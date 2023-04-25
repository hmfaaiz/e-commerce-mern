const router = require('express').Router();
const Order = require('../Models/Order');
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const { verifyTokenAdmin } = require("./verifyToken");
const { verifyToken } = require("./verifyToken");
const { verifyTokenAutherization } = require("./verifyToken");




//Add Product to Order
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder)
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

        const updatedOrder = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },

            {
                new: true

            }

        );

        res.status(200).json(updatedOrder);

    } catch (err) {
        res.status(500).json(err);
    }

});

// // delete Product from Order

router.delete("/:id", verifyTokenAdmin, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product is deleted from Order")
    } catch (err) {
        res.status(500).json(err)
    }
});


// // Get Order

router.get("/find/:userId", verifyTokenAutherization, async (req, res) => {
    try {
        const order = await Order.find({ userID: req.params.userId })

        res.status(200).json({ order })
    } catch (err) {
        res.status(500).json(err)
    }
})



// // Get all product
router.get("/", verifyTokenAdmin, async (req, res) => {
    try {
        const order = await Order.find()
        res.status(200).json({ order })

    }
    catch (err) {
        res.status(500).json(err)
    }

});


router.get("/income", verifyTokenAdmin, async (req, res) => {

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));


    try {

        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },

            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }

            },

        ]);


        res.status(200).json(income)
        console.log("Income");

    }

    catch (err) {

        res.status(500).json(err)
    }
})



module.exports = router;