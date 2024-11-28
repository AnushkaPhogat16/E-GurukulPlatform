import express from "express";
import {
    register, 
    verifyUser, 
    loginUser, 
    myProfile
} from "../controllers/user.js";
import { isAuth, isAdmin } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.get("/user/MEEE", isAuth, myProfile);

router.get("/admin-dashboard", isAuth, isAdmin, (req, res) => {
    res.json({ message: "Welcome Admin" });
  });
  

export default router;