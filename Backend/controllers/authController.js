const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user.model");
require("dotenv").config();
const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email)
    return res.status(400).json({ error: true, message: "Email is required" });

  if (!password)
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ error: true, message: "User not found" });

  try {
    const isPwdOk = await bcrypt.compare(password, user.password);

    console.log(isPwdOk);

    if (isPwdOk) {
      const accessToken = jwt.sign({ email }, process.env.ACCESS_SECRET_TOKEN, {
        expiresIn: "2h",
      });
      return res.status(200).json({
        error: false,
        accessToken,
        user,
        message: "Login successful",
      });
    }
  } catch (e) {
    return res.status(500).json({
      error: true,
      message: `Internal server error ${e}`,
    });
  }
};

module.exports = { handleLogin };
