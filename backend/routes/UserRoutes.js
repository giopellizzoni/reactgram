const express = require("express");
const router = express.Router();

const validate = require("../middlewares/handleValidation");

const {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
} = require("../controllers/UserController");
const authGuard = require("../middlewares/authGuard");
// Routes

const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations");
const { imageUpload } = require("../middlewares/imageUpload");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);
router.get("/:id", getUserById);

module.exports = router;
