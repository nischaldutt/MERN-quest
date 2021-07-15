import yelp from "../../api";
import { resolvePromise, rejectPromise } from "../serviceHandlers";

export const getRestaurantsFromYelp = async location => {
  try {
    const response = await yelp.get("/businesses/search", {
      params: {
        location,
      },
    });
    return resolvePromise(response);
  } catch (error) {
    return rejectPromise(error.response.data.error);
  }
};
