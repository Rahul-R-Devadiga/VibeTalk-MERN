import express from "express";
import {
    checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

// called when user refresh the page if user is authenticated he lands on profile page or else to login page
router.get("/check", protectRoute, checkAuth); 

export default router;
