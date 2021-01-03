const createError = require("http-errors");
const User = require("../models/user.model");
const { signUpSchema, logInSchema } = require("../util/validation");
const jwt = require("jsonwebtoken");
const { createToken } = require("../util/genToken");

const maxAge = 3 * 24 * 60 * 60;

module.exports = {
  register: async (req, res, next) => {
    try {
      const result = await signUpSchema.validateAsync(req.body);

      const EmailDoesExists = await User.findOne({
        email: result.email,
      });

      if (EmailDoesExists)
        throw createError.Conflict(
          `${result.email} is already been registered`
        );

      const user = new User(result);
      const savedUser = await user.save();

      res.status(201).send({
        success: true,
        userId: savedUser._id,
      });
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      res.send({
        success: false,
        error: "" + error,
      });

    }
  },

  login: async (req, res, next) => {
    try {
      const result = await logInSchema.validateAsync(req.body);
      const user = await User.findOne({
        email: result.email,
      });
      if (!user) throw createError.NotFound("User not registered");

      const isMatch = await user.isValidPassword(result.password);
      if (!isMatch)
        throw createError.Unauthorized("Username/password not valid");

      // create token
      const token = createToken(user._id, maxAge);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
        // secure: true
      });
      res.status(200).send({
        success: true,
        user: user._id,
        userInfo: { name: user.name, lastName: user.lastName, email: user.email },
        login: true,
        // token
      });
    } catch (error) {
      res.send({
        success: false,
        error: "" + error
      });
      if (error.isJoi === true)
        return next(createError.BadRequest("Invalid Username/Password"));
    }
  },

  logout: async (req, res, next) => {
    try {
      res.cookie("jwt", "", {
        maxAge: 1,
        httpOnly: true,
      });
      res.status(200).send({
        success: true,
        login: false,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        error,
      });
    }
  },
};
