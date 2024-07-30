const { Notes } = require("../models");

const createNote = async (params) => {
    const { note, userId } = params || {};
    console.log(userId);
    const notes = await Notes.create({
        note,
        userId
    })
    return notes;
}

const findUserNotes = async (userId) => {
    const notes = await Notes.findAll({ where: { userId } });
    return notes;
};

const findUserNote = async (noteId, userId) => {
    const note = await Notes.findOne({ where: { id: noteId, userId: userId } });
    return note;
};

const updateNote = async (params) => {
    const { note, userId, noteId } = params || {};
    let notes = await Notes.findUserNote(noteId, userId);
    if (notes) {
        await notes.update({ note }, { where: { id: note.id } });
        return notes;
    }
    return 'Note not found for update';
}
const deleteNote = async (params) => {
    const { noteId, userId } = params || {};
    let note = await findUserNote(noteId, userId);

    if (!note) throw new NotFoundError("Note is not found");

    await Notes.destroy({ where: { id: note.id } });
    return true;
}

module.exports = {
    createNote,
    findUserNote,
    findUserNotes,
    deleteNote,
    updateNote,
}