import { Request, Response } from "express";
import User from "../models/user.model";
import { generateToken } from "../utils/jwt.utils";

// Registro de usuario
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered." });

    // Crear y guardar usuario
    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user.", error });
  }
};

// Inicio de sesión
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    // Validar la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    // Generar token JWT
    const token = generateToken({ id: user._id });

    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in.", error });
  }
};
