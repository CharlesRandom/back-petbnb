const router = require('express').Router()
const User = require('../models/User')
const Bank = require('../models/Bank')

//Add bank account
router.post('/new', (req, res, next) => {
  const { user } = req.body
  Bank.create(req.body)
  .then(bank => {
    User.findByIdAndUpdate(user, {$set:{bank: bank._id, host:true}}, { 'new': true}).populate('pets')
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => res.json(e))
  }).catch(e => {
    res.status(500).json(e)
  })
})

module.exports = router