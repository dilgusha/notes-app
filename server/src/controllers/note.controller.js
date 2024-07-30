const { noteService } = require("../services/index")

const createNote = async (req, res, next) => {
    try {
        const { user } = req
        let params = { ...req.body, userId: user.id }
        let note = await noteService.createNote(params);
        res.json({
            status: true,
            message: 'Note created',
            note
        })
    } catch (error) {
        next(error)
    }

}
const findAll = async (req, res, next) => {
    try {
      const { user } = req;
  
      const notes = await noteService.findUserNotes(user.id);
      res.json(notes);
    } catch (err) {
      next(err);
    }
  };


const updateNote = async (req, res, next) => {
    try {
        let note = await noteService.updateNote(req.params.id, req.body, req.user.id);
        if (note) {
            res.json({
                message: 'Note updated successfully',
                note
            });
        } else {
            res.status(404).json({
                message: 'Note not found'
            });
        }

    } catch (error) {
        next(error)
    }

};

const deleteNote = async (req, res, next) => {
    try {
        let note = await noteService.deleteNote(req.params.id, req.user.id);
        if (note === 'Deleted Note') {
            res.json({
                message: 'Note deleted successfully'
            });
        } else {
            res.status(404).json({
                message: 'Note not found'
            });
        }

    } catch (error) {
        next(error)
    }

}
module.exports = {
    createNote,
    findAll,
    deleteNote,
    updateNote
}