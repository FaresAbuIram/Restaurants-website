const router = require("express").Router();
const Order = require('../models/Order');

router.get('/order/:id', async (req, res) => {
    const id = req.params.id;
    await Order.find(
        { customer_id: id }
    ).then(data => {
        return res.json(data);
    });
});

router.post('/order/add/:id', async (req, res) => {
    const id = req.params.id;
    const newOrder = await new Order({
        rest_id: req.body.rest_id,
        menu_id: req.body.menu_id,
        customer_id: id,
        quantity: req.body.quantity,
    }).save().then(data => {
        return res.json(data);
    });
});

router.get('/oneorder/:id', async (req, res) => {
    const id = req.params.id;
    await Order.findOne({
        _id: id
    }).then(data => {
        return res.json(data);
    });
});

router.post('/order/edit/:id', async (req, res) => {
    const id = req.params.id;
    await Order.updateOne({
        _id: id
    },
    {$set: {
        rest_id: req.body.rest_id,
        menu_id: req.body.menu_id,
        quantity: req.body.quantity,
        date: new Date
    }}).then(data => {
        return res.json(data);
    });
});

router.delete('/order/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Order.findOneAndDelete({
        _id: id
    }).then(data => {
        return res.json(data);
    });
});

module.exports = router;