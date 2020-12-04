const router = require("express").Router();

const {
  join
} = require("path");
const Restaurant = require('../models/Restaurant');

router.get('/restaurants', async (req, res) => {
  await Restaurant.find({}).then(data => {
    return res.json(JSON.stringify(data));
  })
})


router.post('/restaurant/add', async (req, res) => {
  console.log(req.body);
  let newRes = new Restaurant({
    name: req.body.name,
    city: req.body.city,
    street: req.body.street,
    lat: req.body.lat,
    lng: req.body.lng,
    phone: req.body.phone,
    image: req.body.image
  }).save().then(data => {
    return res.json(JSON.stringify(data));
  })
})

router.post('/restaurant/edit/:id', async (req, res) => {
  const id = req.params.id;
  await Restaurant.updateOne({
    _id: id
  }, {
    $set: {
      name: req.body.name,
      city: req.body.city,
      street: req.body.street,
      lat: req.body.lat,
      lng: req.body.lng,
      phone: req.body.phone,
      image: req.body.image
    }
  }).then(e => {
    console.log(e)
    return res.json(e);
  })

})




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
   await Restaurant.findOneAndDelete({_id:id}).then(e=>{
     console.log(e);
     return res.json(e)
   })


  } catch (error) {

    res.send(error);
  }

});

module.exports = router;