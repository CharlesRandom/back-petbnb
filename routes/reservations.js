const router = require('express').Router()
const Reservation = require('../models/Reservation')
const User = require('../models/User')

//Get guest user reservations
router.get('/all', (req, res, next)=>{
  const { user } = req.body
  Reservation.find({guest:user}).populate('host').populate('guest').populate('pet')
  .then(response => {
    return res.status(200).json(response)
  })
  .catch(e => res.json(e))
})

//Add new reservation
router.post('/new', (req, res, next) => {
  Reservation.create(req.body)
  .then(reservation => {
    res.status(201).json(reservation)
  }).catch(e => {
    res.status(500).json(e)
  })
})

module.exports = router