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

//Add host data
router.put('/new', (req, res, next) => {
  const { user } = req.body
  User.findByIdAndUpdate(user, req.body, { 'new': true})
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => res.status(500).json(e))
})

module.exports = router