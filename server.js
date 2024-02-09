const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const courseExitSurveyRouter = require("./routes/courseExitSurveyRoutes");
const parentsFeedbackRouter = require("./routes/parentsFeedbackRoutes");
const employerFeedbackRouter = require("./routes/employerFeedbackRoutes");
const facultyFeedbackRouter = require("./routes/facultyFeedbackRoutes");
const peerFeedbackRouter = require("./routes/peerFeedbackRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/courseExitSurvey", courseExitSurveyRouter);
app.use("/parentsFeedback", parentsFeedbackRouter);
app.use("/employerFeedback", employerFeedbackRouter);
app.use("/facultyFeedback", facultyFeedbackRouter);
app.use("/peerFeedback", peerFeedbackRouter);

try {
  mongoose
    .connect(process.env.DB_URL)
    .then((result) => {
      console.log("DB CONNECTION SUCCESSFUL");
      app.listen(process.env.PORT, () => {
        console.log("SERVER STARTED ON PORT: " + process.env.PORT);
      });
    })
    .catch((err) => {
      console.log(err);
    });
} catch (err) {
  console.log(err);
}
