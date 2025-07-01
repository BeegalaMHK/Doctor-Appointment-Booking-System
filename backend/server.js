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

// app config
const app = express();
const port = process.env.PORT || 4000;
// Connecting to DB.
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());

// to connect the frontend with backend.
app.use(cors());

// api endpoints

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// To Start the app.
app.listen(port, () => console.log("Server Started", port));
