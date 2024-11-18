import { Request, Response } from "express";
import Truck from "../models/Truck";

export const createTruck = async (req: Request, res: Response) => {
  try {
    const { user, year, color, plates } = req.body;
    const newTruck = await Truck.create({ user, year, color, plates });
    res.status(201).json(newTruck);
  } catch (err) {
    res.status(500).json({ error: "Failed to create truck", details: err });
  }
};

export const getTrucks = async (_req: Request, res: Response) => {
  try {
    const trucks = await Truck.find().populate("user", "email");
    res.status(200).json(trucks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trucks", details: err });
  }
};

export const updateTruck = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedTruck = await Truck.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTruck);
  } catch (err) {
    res.status(500).json({ error: "Failed to update truck", details: err });
  }
};

export const deleteTruck = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Truck.findByIdAndDelete(id);
    res.status(200).json({ message: "Truck deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete truck", details: err });
  }
};
