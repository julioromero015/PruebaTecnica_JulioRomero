import { Request, Response } from "express";
import Order from "../models/Order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, truck, pickup, dropoff } = req.body;
    const newOrder = await Order.create({ user, truck, pickup, dropoff });
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order", details: err });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order status", details: err });
  }
};
