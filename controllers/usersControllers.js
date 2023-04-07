const successHandler = require('../service/successHandler');
const appError = require('../service/appError');

const User = require('../models/usersModel');

const users = {
  async getUser(req, res) {
    const users = await User.find();
    successHandler(res, users);
  },
  async createUser(req, res, next) {
    const { name, email, password, photo } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return appError(400, '此 E-mail 已經註冊', next);
    }
    if (name || email || password) {
      const newUser = await User.create({
        name,
        email,
        password,
        photo,
      });
      successHandler(res, newUser);
    } else {
      return appError(400, '姓名、E-mail、密碼必填', next);
    }
  },
};

module.exports = users;
