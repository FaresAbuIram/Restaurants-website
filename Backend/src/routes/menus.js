const router = require("express").Router();
const Menu = require('../models/Menu')
const imageuploadservice = require('../service/imageuploadservice');
const Order = require('../models/Order');


router.get('/menus/:id', async (req, res) => {
    let id = req.params.id;
    await Menu.find({
        rest_id: id
    }).then(data => {
        console.log(data)
        return res.json(data);
    })
})

router.post('/menus/add/:id', async (req, res) => {
    imageuploadservice.uploadLocalStorage(req, res, async (err) => {

        let id = req.params.id;
        let mImage = 'https://www.merchantsmarket.com/wp-content/uploads/2018/01/menu.png';
        if (req.files.menu) {
            const imagePath = req.files.menu[0].path;
            const image = await imageuploadservice.uploadCloudinary(
                imagePath,
                'menu'
            );
            mImage = image.url;
        }
        let newM = new Menu({
            name: req.body.name,
            rest_id: id,
            description: req.body.description,
            price: req.body.price,
            image: mImage
        }).save().then(data => {
            return res.json(data)
        })
    })
})
router.post('/menus/edit/:id', async (req, res) => {
    imageuploadservice.uploadLocalStorage(req, res, async (err) => {

        let id = req.params.id;
        const menu = Menu.findOne({
            _id: id
        });
        let mImage = menu.image;
        if (req.files.menu) {
            const imagePath = req.files.menu[0].path;
            const image = await imageuploadservice.uploadCloudinary(
                imagePath,
                'menu'
            );
            mImage = image.url;
        }
        await Menu.updateOne({
            _id: id
        }, {
            $set: {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: mImage
            }
        }).then(data => {
            return res.json(data)
        })
    })
})


router.get('/onemenu/:id', async (req, res) => {
    let id = req.params.id;
    await Menu.findOne({
        _id: id
    }).then(data => {
        return res.json(data)
    })
})

router.delete('/menus/delete/:id', async (req, res) => {
    let id = req.params.id;

    await Menu.findOneAndDelete({
        _id: id
    }).then(async (data) => {
        await Order.findOneAndDelete({
            menu_id: id
        });
        return res.json(data)
    })
})

module.exports = router;