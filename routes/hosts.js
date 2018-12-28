const router = require('express').Router()
const User = require('../models/User')

//Get hosts data
router.get('/all', (req, res, next)=>{
  User.find({host:true})
  .then(response => {
    return res.status(200).json(response)
  })
  .catch(e => res.json(e))
})



module.exports = router