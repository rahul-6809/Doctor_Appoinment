const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const {authorizationFuc} = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authorizationFuc, authController);

//APply Doctor || POST
router.post("/apply-doctor", authorizationFuc, applyDoctorController);

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",
  authorizationFuc,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authorizationFuc,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", authorizationFuc, getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment",authorizationFuc, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authorizationFuc,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authorizationFuc, userAppointmentsController);

module.exports = router;
