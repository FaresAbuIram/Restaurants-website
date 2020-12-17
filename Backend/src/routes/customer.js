const router = require("express").Router();
const User = require('../models/Customer');
const bcrypt = require('bcryptjs');
const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');
const Menu = require('../models/Menu')
const RestaurantRate = require('../models/RestaurantRating');




router.get('/allcustomers', async (req, res) => {
    await User.find({}).then(data => {
        return res.json(data);
    })
})
router.post('/customer/edit/:id', async (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    let role = true;
    if (req.body.e == 2) {
        role = false
    }
    await User.updateOne({
        _id: id
    }, {
        $set: {
            isAdmin: role
        }
    })

    res.json("success")
})

router.delete('/customer/delete/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    await User.findOneAndDelete({
        _id: id
    });
    const rest = await Restaurant.findOneAndDelete({
        userId: id
    })
    console.log(rest)
    await Menu.findOneAndDelete({
        rest_id: rest._id
    });
    await Order.findOneAndDelete({
        rest_id: rest._id
    });
    await RestaurantRate.findOneAndDelete({
        rest_id: rest._id

    })
    res.json("success")
})


router.get('/profile/:id', async (req, res) => {
    const userId = req.params.id;

    await User.findOne({
        _id: userId
    }).then((data) => {
        console.log("User Info: \n");
        console.log(data);
        return res.json(data);
    });
});

router.post('/profile/edit/:id', async (req, res) => {
    const id = req.params.id;
    let user = await User.findOne({
        email: req.body.email
    });
    if (user && user._id != id) {
        console.log(user)
        return res.json('Email is already exist !!!');
    }
    let password = user.password;
    if (req.body.password) {
        console.log(req.body.password)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        password = hashedPassword;
    }
    await User.updateOne({
        _id: id
    }, {
        $set: {
            email: req.body.email,
            password: password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone
        }
    }).then((data) => {
        console.log("Updated User Info: \n");
        console.log(data);
        return res.json(data);
    });
});

module.exports = router;