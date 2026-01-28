import express from "express";
import {
  appointmentsDoctor,
  doctorList,
  loginDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
} from "../controllers/doctorControllers.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

export default doctorRouter;
