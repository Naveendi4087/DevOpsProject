const express = require('express');
const {User, Service} = require('../model/dataModel');
const {
  createUser,
  getAllUsers,
  getUserByID,
  createService,
  getAllServices,
  getServiceById,
  deleteService,
  updateservice
} = require("../contollers/myController");

const router = express.Router();

// Sign up or create a user
router.post('/signUp', createUser);

// get all  the users
router.get("/users", getAllUsers);

// get user by id
router.get("/users/:id", getUserByID);

// create a service
router.post('/service', createService);

//get all service for a user
router.get("/services/:user", getAllServices);

//get a single service
router.get("/service/:id", getServiceById);

//delete a service
router.delete("/service/:id", deleteService);

//update a service
router.put("/service/:id", updateservice);

module.exports = router;