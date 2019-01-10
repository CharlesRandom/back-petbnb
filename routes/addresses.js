const router = require('express').Router()
const User = require('../models/User')
const Address = require('../models/Address')

//Add address
router.post('/new', (req, res, next) => {
  const { user } = req.body
  Address.create(req.body)
  .then(address => {
    User.findByIdAndUpdate(user, {$set:{address: address._id}}, { 'new': true}).populate('pets')
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => res.json(e))
  }).catch(e => {
    res.status(500).json(e)
  })
})

module.exports = router