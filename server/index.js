import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

dotenv.config();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

const app = express();
app.use("/posts", postRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Listening to ${PORT}`);
    })
  )
  .catch((error) => {
    console.error(`Db connection Failed ${error}`);
  });

app.use(express.json());
app.use(cors());
