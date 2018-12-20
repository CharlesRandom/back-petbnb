const router = require('express').Router()
const User = require('../models/User')
const Pet = require('../models/Pet')
const passport = require('../helpers/passport')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'No pasas perro'})
}

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

//login
router.post('/login', (req, res, next) => {
  passport.authenticate('local',(err, user, info) => {
    if(err) return res.status(500).json(info)
    if(!user) return res.status(404).json(info)
    req.login(user,(err)=>{
      return res.status(201).json(user)
    })
  })(req, res, next)
})

//logout
router.get('/logout', (req, res, next)=>{
  req.logOut()
  res.status(200).json({message:'Logged out successfully'})
})

//profile
router.get('/profile', isAuth, (req, res, next)=>{
  return res.status(200).json(req.user)
})

module.exports = router