const bcrypt = require("bcryptjs");
const User = require("../model/user.model");

const handleNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({
      error: true,
      message: "Name is required for complete registeration",
    });
  }

  if (!email) {
    return res.status(400).json({
      error: true,
      message: "Email is required for complete registeration",
    });
  }

  if (!password) {
    return res.status(400).json({
      error: true,
      message: "Password is required for complete registeration",
    });
  }

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    console.log(isUser);
    return res.json({
      error: true,
      message: "User already exist",
    });
  }

  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPwd,
    });

    await user.save();

    return res.status(200).json({
      error: false,
      user,
      message: "Registeration Complete",
    });
  } catch (e) {
    res.status(500).json({
      error: true,
      message: `Internal server error: ${e}`,
    });
  }
};

module.exports = { handleNewUser };
