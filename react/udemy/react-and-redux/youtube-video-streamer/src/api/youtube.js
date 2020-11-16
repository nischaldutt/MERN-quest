import axios from "axios";

const KEY = "AIzaSyAyuoJcPr1oHr30YAcZtJdz9X-syYt_QFc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
