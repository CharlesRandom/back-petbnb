const router = require('express').Router()
const User = require('../models/User')

//Add pet
router.post('/new', (req, res, next) => {
  const { owner } = req.body
  Pet.create(req.body)
  .then(pet => {
    User.findByIdAndUpdate(owner, {$push:{pets: pet._id}}, { 'new': true})
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => res.json(e))
  }).catch(e => {
    res.status(500).json(e)
  })
})

module.exports = router