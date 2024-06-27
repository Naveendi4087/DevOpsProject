const dotenv = require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connectDB = require('./config/connectDB');
const { User } = require('./model/dataModel');
const myRoutes = require('./routes/myRoutes');


const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(myRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();