import express from "express";
import {
  addDoctor,
  allDoctors,
  appointmentCancel,
  appointmentsAdmin,
  loginAdmin,
} from "../controllers/adminControllers.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvialablity } from "../controllers/doctorControllers.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvialablity);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointments", authAdmin, appointmentCancel);

export default adminRouter;
