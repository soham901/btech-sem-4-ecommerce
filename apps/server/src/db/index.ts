import { connect } from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce";
  
  try {
    const connection = await connect(MONGODB_URI);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
