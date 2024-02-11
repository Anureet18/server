const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")

//this route will not work until we provide token
router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts);

module.exports = router;