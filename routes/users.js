const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const handleErrorAsync = require('../service/handleErrorAsync');

/* GET users listing. */
router.get('/', handleErrorAsync(usersControllers.getUser));
router.post('/', handleErrorAsync(usersControllers.createUser));

module.exports = router;
