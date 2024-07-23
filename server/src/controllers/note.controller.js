const { noteService } = require("../services/index")

const createNote = async (req, res) => {
    try {
        const { user } = req
        let params = { ...req.body, userId: user.id }
        let note = await noteService.createNote(params);
        res.json({
            status: true,
            message: 'Note created',
            note
        })
    } catch (err) {
        res.status(409).json({
            message: err?.message
        })
    }
}
const findAll = async (req, res) => {
    const { user } = req
    try {
        let note = await noteService.findAlls(user.id);
        console.log(note);
        res.json(note);
    } catch (err) {
        res.status(500).json({
            message: err?.message
        })
    }
}

const findNoteByNote = async (req, res) => {
    try {
        let note = await noteService.findNoteByNote(req.params.id, req.user.id)
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({
                message: 'Note not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: err?.message
        })
    }
}
const updateNote = async (req, res) => {
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
    } catch (err) {
        res.status(500).json({
            message: err?.message
        });
    }
};

const deleteNote = async (req, res) => {
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
    } catch (err) {
        res.status(500).json({
            message: err?.message
        })
    }
}
module.exports = {
    createNote,
    findAll,
    findNoteByNote,
    deleteNote,
    updateNote
}