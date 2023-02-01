const { Router } = require("express");
const userController = require("./controller/userController");

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:username/details", userController.getUserDetails);
router.get("/users/:username/repos", userController.getUserRepos);

module.exports = router;
