const router = require("express").Router();
const imageuploadservice = require('../service/imageuploadservice');


const {
  join
} = require("path");
const Restaurant = require('../models/Restaurant');

router.get('/restaurants/:id', async (req, res) => {
  let id = req.params.id;
  await Restaurant.find({
    userId: id
  }).then(data => {
    return res.json(JSON.stringify(data));
  })
})


router.post('/restaurant/add/:id', async (req, res) => {
  imageuploadservice.uploadLocalStorage(req, res, async (err) => {

    let id = req.params.id;
    const imagePath = req.files.restaurant[0].path;

    const image = await imageuploadservice.uploadCloudinary(
      imagePath,
      'restaurant'
    );

    let newRes = new Restaurant({
      name: req.body.name,
      city: req.body.city,
      street: req.body.street,
      lat: req.body.lat,
      lng: req.body.lng,
      phone: req.body.phone,
      userId: id,
      image: image.url
    }).save().then(data => {
      return res.json(JSON.stringify(data));
    })
  })
})

router.post('/restaurant/edit/:id', async (req, res) => {
  imageuploadservice.uploadLocalStorage(req, res, async (err) => {

    const id = req.params.id;
    let rest = Restaurant.findOne({
      _id: id
    });
    let imageR = rest.image;
    if (req.files.restaurant) {
      const imagePath = req.files.restaurant[0].path;
      const image = await imageuploadservice.uploadCloudinary(
        imagePath,
        'restaurant',
      );
      imageR = image.url;
    }
    let obj = {
      name: req.body.name,
      city: req.body.city,
      street: req.body.street,
      image: imageR

    }
    if (req.body.lat != 'null' && req.body.lat != 'undefined' )
      obj.lat = req.body.lat;

    if (req.body.lng != 'null' && req.body.lng != 'undefined')
      obj.lng = req.body.lng;

    if (req.body.phone != 'null' && req.body.phone != 'undefined')
      obj.phone = req.body.phone;
    console.log(obj)
    await Restaurant.updateOne({
      _id: id
    }, {
      $set: obj
    }).then(e => {
      console.log(e)
      return res.json(e)
    })
  });
});




router.get('/restaurant/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Restaurant.findOne({
    _id: id
  }).then(e => {
    return res.json(e);
  })

})


router.delete('/restaurant/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Restaurant.findOneAndDelete({
      _id: id
    }).then(e => {
      console.log(e);
      return res.json(e)
    })


  } catch (error) {

    res.send(error);
  }

});

module.exports = router;