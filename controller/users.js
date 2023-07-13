const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};

exports.getAllUsers = (req, res) => {
  res.json(users);
};
exports.getUser = (req, res) => {
  const id = +req.params.id; // here + conver string to number
  const user = users.find((p) => p.id === id);
  res.json(user);
};
exports.replaceUser = (req, res) => {
  const id = +req.params.id; // here + conver string to number
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateUser = (req, res) => {
  const id = +req.params.id; // here + conver string to number
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id; // here + conver string to number
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
};
