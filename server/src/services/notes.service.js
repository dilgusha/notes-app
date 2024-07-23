const Notes = require("../models/Notes");

const createNote = async (params) => {
    const { note, userId } = params || {};
    console.log(userId);
    const notes = await Notes.create({
        note,
        userId
    })
    return notes;
}
const findAlls = async (userId) => {
    const notes = await Notes.findAll({ where: { userId } });
    return notes;
}
const findNoteByNote = async (id, userId) => {
    let note = await Notes.findOne({ where: { id, userId } });
    return note;
}
const updateNote = async (id, params, userId) => {
    let note = await Notes.findOne({ where: { id, userId } });
    if (note) {
        await note.update(params);
        return note;
    }
    return 'Note not found for update';
}
const deleteNote = async (id, userId) => {
    let delnote = await Notes.findOne({ where: { id,userId } });
    if (delnote) {
        await delnote.destroy();
        return 'Deleted Note';
    }
    return 'Note not found';
}

module.exports = {
    createNote,
    findAlls,
    findNoteByNote,
    deleteNote,
    updateNote,
}