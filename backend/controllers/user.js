const User = require("../models/user");
var { createToken } = require("../middleware/authentication");

module.exports = {
  userLogin: async (req, res, next) => {
    try {
      let errors = {};
      const { name, email } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        errors.email = "email already exist";
        return res.status(400).json(errors);
      }
      const newUser = await new User({
        name,
        email,
      });
      //   await newUser.save();
      var token = await createToken(newUser);
      // there we save all data in cookie.
      res.cookie("token", token);
      return res.status(200).json({
        name: newUser.name,
        email: newUser.email,
        id: newUser._id,
        token: token,
      });
    } catch (err) {
      console.log("Error in addUser", err.message);
      return res
        .status(400)
        .json({ message: `Error in addUser ${err.message}` });
    }
  },
  async logout(req, res) {
    // this is for logout the user.
    try {
      // there we clear all data in cookie.
      res.cookie("token", { expires: Date.now() });
      return res.json({ message: "logged out" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
