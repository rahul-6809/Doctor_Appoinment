const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const {authorizationFuc} = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authorizationFuc, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authorizationFuc, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authorizationFuc, getDoctorByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authorizationFuc,
  doctorAppointmentsController
);

//POST Update Status
router.post("/update-status", authorizationFuc, updateStatusController);

module.exports = router;
