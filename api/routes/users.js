const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json({ message: err });
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.status(200).json({ message: "Acount has been updated." });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    return res
      .status(401)
      .json({ message: "You can update only your password.." });
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Acount has been deleted." });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    return res
      .status(401)
      .json({ message: "You can delete only your account.." });
  }
});

// get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// follow user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.body.userId } });
        req.status(200).json({ message: "User has been followed." });
      } else {
        res
          .status(403)
          .json({ message: "You are already following this user" });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    res.status(403).json({ message: "You can't follow yourself.." });
  }
});
// unfollow user
module.exports = router;
