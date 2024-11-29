import express from "express";
import { hostClass, getClass } from "../controllers/Class.js";

const router = express.Router();

// Route to host a class
router.post("/class", hostClass);

// Route to fetch classes
router.get("/class", getClass);

export default router;
