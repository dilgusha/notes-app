const express = require('express');
const { userController } = require('../controllers/index');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.json({ hello: 'world' })
// })
router.post('/',userController.createUser )
router.get('/',userController.findAll )

module.exports = router;