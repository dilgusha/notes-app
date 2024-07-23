const express = require('express');
const { noteController } = require('../controllers/index');
const {  authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();
router.get('/', noteController.findAll)
router.post('/', noteController.createNote)
router.get('/:id', noteController.findNoteByNote)
router.post('/:id', noteController.updateNote)
router.delete('/:id', noteController.deleteNote)

module.exports = router;