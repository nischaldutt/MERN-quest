import Config from "react-native-config";
import googleMapsAPI from "../../api";
import { resolvePromise, rejectPromise } from "../serviceHandlers";

export const findRestaurantsFromTextSearch = async location => {
  try {
    const response = await googleMapsAPI.get("/place/textsearch/json", {
      params: {
        query: location,
        radius: "5000", // in meters
        type: "restaurant",
        key: Config.GOOGLE_MAPS_API_KEY,
      },
    });
    return resolvePromise(response);
  } catch (error) {
    return rejectPromise(error.response.data.error);
  }
};

export const findPlaceFromText = async location => {
  try {
    const response = await googleMapsAPI.get("/place/findplacefromtext/json", {
      params: {
        input: location,
        inputType: "textquery",
        fields: "photos,formatted_address,name,rating,opening_hours,geometry",
        // locationbias: "circle:2000@47.6918452,-122.2226413",
        key: Config.GOOGLE_MAPS_API_KEY,
      },
    });
    return resolvePromise(response);
  } catch (error) {
    return rejectPromise(error.response.data.error);
  }
};

export const searchNearbyRestaurants = async location => {
  try {
    const response = await googleMapsAPI.get("/place/nearbysearch/json", {
      params: {
        location: "-33.8670522,151.1957362", // lat longs
        radius: "2000", // in meters
        type: "restaurant",
        key: Config.GOOGLE_MAPS_API_KEY,
      },
    });
    return resolvePromise(response);
  } catch (error) {
    return rejectPromise(error.response.data.error);
  }
};
