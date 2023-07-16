const model = require("../models/users");
const User = model.User;

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    result = await user.save();
    res.json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const id = req.params.id; // here + conver string to number
  const user = await User.findById(id);
  res.json(user);
};

exports.replaceUser = async (req, res) => {
  const id = req.params.id; // here + conver string to number
  try {
    const doc = await User.findOneAndReplace(
      { _id: id }, req.body, { new: true }
    );
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id; // here + conver string to number
  try {
    const doc = await User.findOneAndUpdate(
      { _id: id }, req.body, { new: true }
    );
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id; // here + conver string to number
  try {
    const doc = await User.findOneAndDelete(
      { _id: id }
    );
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
