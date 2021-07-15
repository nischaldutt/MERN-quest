import React from "react";
import ContentLoader, {
  Facebook,
  Instagram,
} from "react-content-loader/native";

import { colors, globalStyles } from "../themes/globalStyles";

const FeedLoader = () => {
  return (
    <Instagram
      backgroundColor={colors.contentLoaderBackgroundColor}
      foregroundColor={colors.contentLoaderForegroundColor}
    />
  );
};

export default FeedLoader;
