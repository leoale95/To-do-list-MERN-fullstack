const {Router} = require('express')
const router = Router() 

router.route('/')
    .get((req, res) => res.send('Notes routes'))
    .post((req, res) => res.send('Notes routes'))

router.route('/:id')
    .put((req, res) => res.send('Notes routes'))
    .delete((req, res) => res.send('Notes routes'))

module.exports = router