import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  `mongodb+srv://renatoaclacerda:${process.env.MONGO_PASSWORD}@alura-express-api.ebx0bqp.mongodb.net/db`
);

export default mongoose.connection;
