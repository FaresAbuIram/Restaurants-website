const router = require("express").Router();
const User = require('../models/Customer');

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

    await User.updateOne({
        _id: id
    },
    {$set: {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    }}).then((data) => {
        console.log("Updated User Info: \n");
        console.log(data);
        return res.json(data);
    });
});

module.exports = router;