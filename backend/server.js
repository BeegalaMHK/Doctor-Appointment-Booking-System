{
  /*
    First we have installed few packages like bcrypt,
    cloudinary,cors,dotenv,express,jsonwebtoken,mongoose,multer,nodemon,validator */
}

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import userRouter from "./routes/userRoutes.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
// Connecting to DB.
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

// to connect the frontend with backend.
app.use(cors());

// api endpoints

app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// To Start the app.
app.listen(port, () => console.log("Server Started", port));
