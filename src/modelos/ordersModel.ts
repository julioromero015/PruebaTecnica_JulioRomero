import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  truck: mongoose.Types.ObjectId;
  status: "created" | "in transit" | "completed";
  pickup: mongoose.Types.ObjectId;
  dropoff: mongoose.Types.ObjectId;
}

const OrderSchema: Schema<IOrder> = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  truck: { type: mongoose.Types.ObjectId, ref: "Truck", required: true },
  status: { type: String, enum: ["created", "in transit", "completed"], default: "created" },
  pickup: { type: mongoose.Types.ObjectId, ref: "Location", required: true },
  dropoff: { type: mongoose.Types.ObjectId, ref: "Location", required: true },
});

export default mongoose.model<IOrder>("Order", OrderSchema);
