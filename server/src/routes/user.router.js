const express = require('express');

const router = express.Router();
const { userController } = require('../controllers/index');

// router.get('/', (req, res) => {
//     res.json({ hello: 'world' })
// })
router.post('/',userController.createUser )
router.get('/',userController.findAll )

module.exports = router;