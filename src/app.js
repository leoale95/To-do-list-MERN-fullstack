const express = require('express')
const app = express()
const cors = require('cors')
// routes
const NotesRoutes = require('./routes/notes.routes')
const UserRoutes = require('./routes/users.routes')



//Middlewarares
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/users', UserRoutes)
app.use('api/notes', NotesRoutes)

module.exports = app