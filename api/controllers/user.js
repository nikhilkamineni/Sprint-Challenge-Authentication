const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  if (!username || !password) {
    res
      .status(422)
      .json({ message: 'You need to provide a username and password' });
  }
  const newUser = new User({ username, password });
  newUser
    .save()
    .then(savedUser => {
      res.status(200).json(savedUser);
    })
    .catch(err => {
      res.status(422).json({ message: 'Error saving user to DB', error: err });
    });
};

module.exports = {
  createUser,
};
