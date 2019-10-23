var express = require('express');
var router = express.Router();

let userController = require('../controller/user');

router.get('/', userController.getUser);
router.post('/', userController.addUser);
router.put('/', userController.editUser);
router.delete('/', userController.deleteUser);

module.exports = router;