const {Router} = require('express')
const router = Router() 

router.route('/')
    .get((req, res) => res.send('User routes'))
    .post((req, res) => res.send('User routes'))

router.route('/:id')
    .get((req, res) => res.send('User routes'))
    .put((req, res) => res.send('User routes'))
    .delete((req, res) => res.send('User routes'))

module.exports = router