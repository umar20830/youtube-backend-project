import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongoDB = async () => {
  try {
    const mongoConnection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    );
    console.log(
      "MongoDB connected successfully at : ",
      mongoConnection.connection.host,
    );
  } catch (error) {
    console.error("Error during MongoDB connection : ", error);
    process.exit(1);
  }
};

export default mongoDB;
