import { app } from "./app.js";

import { connectDb } from "./config/connectDB.js";
connectDb();

app.listen(process.env.PORT, () => {
  console.log("Server is working on", process.env.PORT);
});
