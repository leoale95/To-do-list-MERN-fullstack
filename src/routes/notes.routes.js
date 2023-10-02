const express = require("express");
const router = express.Router(); 

const {  getNotes,  createNote,  getNote,  deleteNote,  updateNote,} = require('../controllers/note.controller.js')

router.get("/notes", getNotes);

router.post("/notes", createNote);

router.get("/notes/:id", getNote);

router.delete("/notes/:id", deleteNote);

router.put("/notes/:id", updateNote);

module.exports = router; 
