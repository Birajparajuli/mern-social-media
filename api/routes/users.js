const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
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
    return res.status(401).json({ message: "Unauthorized" });
  }
});
// delete user
// get user
// follow user
// unfollow user
module.exports = router;
