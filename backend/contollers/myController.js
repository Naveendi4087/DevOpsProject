const { User, Service } = require("../model/dataModel");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json(`No User with id: ${id}`);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getAllServices = async (req, res) => {
  const user = req.params.user; // Get the userId from request parameters
  try {
    const services = await Service.find({ user: user });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json(`No task with id: ${id}`);
    } else {
      res.status(200).json(service);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json(`No service with id: ${id}`);
    }
    res.status(200).json("service deleted");
  } catch (err) {
    res.send(500).json({ msg: err.message });
  }
};

const updateservice = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) {
      return res.status(404).json(`No service with id: ${id}`);
    }
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByID,
  createService,
  getAllServices,
  getServiceById,
  deleteService,
  updateservice
};
