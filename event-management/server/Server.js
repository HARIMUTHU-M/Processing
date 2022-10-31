const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express()

const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if ('http://localhost:3000'.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


//Database
const db = require("./db/db");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const adminRouter = require('./routes/admin-router')
app.use('/admin', adminRouter)

const userRouter = require("./routes/user-router");
app.use("/userApi", userRouter);

const port = process.env.PORT || 5000
app.listen(port, console.log(`Connected to server on port ${port}`))