const express = require("express");

const routes = express.Router();
const users = [
  {
    id: 1,
    name: "Nickolau",
    cell: "319802148254",
    email: "nickolau@gmail.com",
    password: "123456",
    bith_date: "10/11/2003",
  },
];

routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json(user);
  }
  res.status(401).json({ message: "Invalid username or password" });
});

module.exports = routes;
