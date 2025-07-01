import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
  // console.log("Connected");
};

export default connectDB;
