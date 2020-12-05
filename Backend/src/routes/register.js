const router = require("express").Router();
const User = require('../models/Customer');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res) => {
    let user = await User.findOne({
        email: req.body.email
    });
    if (user) {
        console.log(user)
        return res.json('Email is already exist !!!');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const nUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
		email: req.body.email,
        password: hashedPassword,
        phone : req.body.phone
	});

	try {
		const savedUser = await nUser.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}




})

module.exports = router;