import Config from "react-native-config";
import axios from "axios";

// const yelp = axios.create({
//   baseURL: Config.YELP_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${Config.YELP_API_KEY}`,
//   },
// });

// export default yelp;

const googleMapsAPI = axios.create({
  baseURL: Config.GOOGLE_MAPS_API_BASE_URL,
});

export default googleMapsAPI;
