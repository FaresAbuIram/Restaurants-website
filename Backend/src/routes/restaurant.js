const router = require("express").Router();

const Restaurant = require('../models/Restaurant');


router.delete('/', async (req, res) => {
    try {
      await Restaurant.find({}).then(e=>{
            console.log(e);
            return res.json(JSON.stringify(e));

      })
     
    
    } catch (error) {
    
      res.send(error);
    }
  
  });
  
  module.exports = router;
