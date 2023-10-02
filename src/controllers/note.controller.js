const Note = require("../models/note.model");

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

exports.createNote = async (req, res, next) => {
  try {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
      title,
      content,
      date,
      author,
    });
    const savedNote = await newNote.save();
    return res.json(savedNote);
  } catch (error) {
    next(error);
  }
};

exports.getNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      const error = new Error("Note does not exist");
      error.status = 404;
      throw error;
    }

    res.json(note);
  } catch (error) {
    next(error);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      const error = new Error("Note does not exist");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const { title, content, duration, author } = req.body;
    const noteUpdated = await Note.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title,
          content,
          duration,
          author,
        },
      },
      {
        new: true,
      }
    );

    return res.json(noteUpdated);
  } catch (error) {
    next(error);
  }
};
