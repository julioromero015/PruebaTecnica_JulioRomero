import mongoose, { Schema, Document } from "mongoose";

export interface ILocation extends Document {
  address: string;
  place_id: string;
  latitude: number;
  longitude: number;
}

const LocationSchema: Schema<ILocation> = new Schema({
  address: { type: String, required: true },
  place_id: { type: String, required: true, unique: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

export default mongoose.model<ILocation>("Location", LocationSchema);
