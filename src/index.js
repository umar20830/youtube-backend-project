import dotenv from "dotenv";
dotenv.config({
  path:"./.env"
});

import mongoDB from "./config/db-connection.js";
import { app } from "./app.js";

const port = process.env.PORT || 4477;

mongoDB()
  .then(() => {
    app.on("error", () => {
      console.error("Error starting server : ", err);
      process.exit(1);
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during MongoDB Connection : ", err);
    process.exit(1);
  });
