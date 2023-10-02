const express = require('express')
const app = express()
const cors = require('cors')
const notesRoutes = require('./routes/notes.routes');
const userRoutes = require('./routes/users.routes');



//Middlewarares
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/users',userRoutes)
app.use('/api/notes',notesRoutes)

module.exports = app