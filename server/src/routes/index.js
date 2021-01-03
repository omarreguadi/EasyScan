const router = require("express").Router();
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
// Define routes here
router.use("/posts", postController);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;