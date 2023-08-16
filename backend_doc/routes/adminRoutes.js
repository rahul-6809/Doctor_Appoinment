const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const {authorizationFuc} = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authorizationFuc, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authorizationFuc, getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authorizationFuc,
  changeAccountStatusController
);

module.exports = router;
