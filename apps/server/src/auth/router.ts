import { User } from "../users/models.ts";
import {Router} from "express";
import jwt from "jsonwebtoken"

const router = new Router();


router.post("/sign-in",async (req, res) => {
  const user = await User.findOne({username: req.body.username});
  console.log(user);
  const token = await jwt.sign(user._id.toString(), "ABC");
  res.json({token});
})

router.post("/sign-up", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({message: "DONE"})
})

export default router;

