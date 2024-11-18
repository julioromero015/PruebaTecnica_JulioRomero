import { Request, Response } from "express";
import Location from "../models/Location";
import { getPlaceDetails } from "../services/google";

export const createLocation = async (req: Request, res: Response) => {
  try {
    const { place_id } = req.body;

    if (await Location.findOne({ place_id })) {
      return res.status(400).json({ message: "Location already exists" });
    }

    const { data } = await getPlaceDetails(place_id);
    const { formatted_address, geometry } = data.result;

    const newLocation = await Location.create({
      address: formatted_address,
      place_id,
      latitude: geometry.location.lat,
      longitude: geometry.location.lng,
    });

    res.status(201).json(newLocation);
  } catch (err) {
    res.status(500).json({ error: "Failed to create location", details: err });
  }
};

export const getLocations = async (_req: Request, res: Response) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch locations", details: err });
  }
};

// Implement updateLocation and deleteLocation similarly.
