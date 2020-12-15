const router = require("express").Router();
const User = require('../models/Customer');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.json("Invalid Email Or Password");
        }
        bcrypt
            .compare(req.body.password, user.password)
            .then(async validPassword => {
                if (!validPassword) {
                    return res.json("Invalid Email Or Password");

                };
<<<<<<< HEAD
                const token = jwt.sign({
                    userId: user._id
                },
=======
            const token = jwt.sign({
                        userId: user._id,
                        
                        exp: Math.floor(Date.now() / 1000) +(60*15),
                    },
>>>>>>> 1416adc994ecd35d0afa2950709c33f318e31e84
                    "sssssssssssss"
                );

                // update user adding token
                const updatedUser = await User.updateOne({
                    _id: user._id
                }, {
                    $set: {
                        token: token
                    }
                });

                const user2 = await User.findOne({
                    email: req.body.email
                });
                 
                res.cookie('auth_token', token);
                res.json(user2)
            });

    } catch (error) {
        return res.json('Error Happened')
    }

});

module.exports = router;