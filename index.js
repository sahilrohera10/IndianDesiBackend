const express = require("express");
const cors = require("cors");
const app = express();
const cron = require('node-cron');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = 8000;
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("./ImgUploads"));
const Routes = require("./Routes/apiRoutes");
app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
const cronSchedule = '*/15 * * * *';

const myCronJob = () => {
  console.log('Cron job executed at:', new Date());
};

cron.schedule(cronSchedule, myCronJob, {
  scheduled: true,
  timezone: 'Asia/Kolkata',
});