const router = require("express").Router();
const RestaurantRate = require('../models/RestaurantRating');


router.get('/restaurantrate/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id)
    await RestaurantRate.find({
        
    }).then(data => {
        console.log(data)
        return res.json(data);
    })

})

router.post('/restaurantrate/add/:id', async (req, res) => {

    let id = req.params.id;
    let rr = await RestaurantRate.findOne({
        customer_id: id,
        rest_id: req.body.restId
    });

    if (rr)
        return res.json("This Restaurant Rated before")
    const newResR = new RestaurantRate({
        rest_id: req.body.restId,
        customer_id: id,
        rating: req.body.rate
    }).save().then(e => {
        return res.json(e)
    })

})
router.post('/restaurantrate/edit/:id', async (req, res) => {

    let id = req.params.id;
      await RestaurantRate.updateOne({_id:id},{
          $set :{
              rating: req.body.rate,
              date : new Date()
          }
      }).then(e=>{
          console.log(e)
          return res.json(e)
      })

})
router.delete('/restaurantrate/delete/:id', async (req, res) => {

    let id = req.params.id;
    console.log(id)
      await RestaurantRate.findOneAndDelete({_id:id}).then(e=>{
          console.log(e)
          return res.json(e)
      })

})




module.exports = router;