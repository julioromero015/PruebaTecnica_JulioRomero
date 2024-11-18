// src/services/googleMaps.ts

import axios from 'axios';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || 'your_api_key_here';

export const getLocationFromPlaceId = async (placeId: string) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await axios.get(url);
    const location = response.data.result;

    if (location) {
      return {
        address: location.formatted_address,
        latitude: location.geometry.location.lat,
        longitude: location.geometry.location.lng,
        place_id: location.place_id,
      };
    }

    throw new Error('Location not found');
  } catch (error) {
    throw new Error(`Error fetching location: ${error.message}`);
  }
};
