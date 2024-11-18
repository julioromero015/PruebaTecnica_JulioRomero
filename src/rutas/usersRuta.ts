import express from "express";
import { registerUser, loginUser } from "../controllers/users.controller";

const router = express.Router();

// Rutas para el CRUD de usuarios
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
