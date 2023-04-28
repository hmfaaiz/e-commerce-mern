const router = require('express').Router();
const User = require('../Models/User');
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const { verifyTokenAutherization } = require("./verifyToken");
const { verifyTokenAdmin } = require("./verifyToken");

//Registration

router.post('/userregisteration', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),

    });
    try {
        const saveUser = await newUser.save();
        res.status(200).json(saveUser)
    }


    catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})


//Login
router.post('/userlogin', async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        const hashpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashpassword.toString(CryptoJS.enc.Utf8);


        originalPassword !== req.body.password &&
            res.status(401).json("Wrong credential");

        const accessToken = JWT.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: '3d' }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ others, accessToken })
    } catch (err) {

        res.status(500).json(err);

    };


});

router.put("/:id", verifyTokenAutherization, async (req, res) => {


    //it is an optional if you  give password then it will encrypt,or you can leave an empty
    if (req.body.password) {

        req.body.password = CryptoJS.AES.encrypt(req.body.password,
            process.env.PASS_SEC).toString();
    }
    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {

                $set: req.body,
            },

            {
                new: true

            }

        );
        
        res.status(200).json(updatedUser);

    } catch (err) {
        res.status(500).json(err);
    }

});

//delete 

router.delete("/:id", verifyTokenAutherization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User is deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


//get user

router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;

        res.status(200).json({ others })
    } catch (err) {
        res.status(500).json(err)
    }
})
//get all
router.get("/", verifyTokenAdmin, async (req, res) => {
    const query = req.query.new;

    try {
            //-1 for descending order
            // query is given so this line execute
        const users = query ? await User.find().sort({ _id: -1 }).limit(2) :

            // query is not given then this 
            await User.find();




        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err)
    };
})
    ;


router.get("/stats", verifyTokenAdmin, async (req, res) => {
    //current date time
    const date = new Date();
    //same date but last year with century , (getFullYear() - 1 )output: 2022
    //setFullYear outputs: Sat Apr 24 2022 21:02:41
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ]);

        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }

});
// router.get('/userget',(req,res)=>{
//     res.send("User");
// }
// );
// router.post('/userpost',(req,res)=>{
//     const username=req.body.username;
//     res.send(username)

// }
// );

module.exports = router;