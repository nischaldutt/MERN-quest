import Config from "react-native-config";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Rating } from "react-native-elements";

const RestaurantCard = ({ restaurant }) => {
  const { name, rating, user_ratings_total } = restaurant;
  const photo_reference = restaurant?.photos?.[0]?.photo_reference;

  const API_KEY = Config.GOOGLE_MAPS_API_KEY;
  const image_url = photo_reference
    ? `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photo_reference}&sensor=false&maxheight=500&maxwidth=500&key=${API_KEY}`
    : null;

  return (
    <Card style={styles.container}>
      <Card.Cover source={{ uri: image_url }} />
      <Card.Content>
        <Title>{name}</Title>
        <Rating defaultRating={rating} />
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default RestaurantCard;
