const express = require('express')
const app = express()
const cors = require('cors')



//Middlewarares
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/users',)
app.use('api/notes',)

module.exports = app