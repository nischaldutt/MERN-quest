import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  PermissionsAndroid,
} from "react-native";
import { connect } from "react-redux";

import Geolocation from "react-native-geolocation-service";
import RestaurantCard from "../../components/RestaurantCard";
import ContentLoader from "../../components/ContentLoader";
import CustomSearchbar from "../../components/CustomSearchbar";

import { colors, globalStyles } from "../../themes/globalStyles";
import { setIsLoading } from "../../redux/actions/commonActions";
import { searchRestaurants } from "../../redux/actions/googleMapsActions";
import { logout } from "../../redux/actions/authActions";

const HomeScreen = ({
  logout,
  searchRestaurants,
  setIsLoading,
  restaurants,
}) => {
  const { data: fetchedRestaurants } = restaurants;

  React.useEffect(() => {
    // const foo = async () => {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //     {
    //       title: "ReactNativeCode Location Permission",
    //       message: "ReactNativeCode App needs access to your location ",
    //     },
    //   );

    //   if (granted) {
    //     Geolocation.getCurrentPosition(
    //       position => {
    //         console.log(position);
    //       },
    //       error => {
    //         // See error code charts below.
    //         console.log(error.code, error.message);
    //       },
    //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    //     );
    //   }
    // };
    // foo();
    searchRestaurants("Chandigarh");
  }, [searchRestaurants]);

  const renderContentLoader = () => {
    return [1, 2, 3].map(val => {
      return <ContentLoader key={val} />;
    });
  };

  const renderRestaurantCards = () => {
    return fetchedRestaurants.map(restaurant => {
      return (
        <RestaurantCard key={restaurant.reference} restaurant={restaurant} />
      );
    });
  };

  return (
    <View>
      <CustomSearchbar />
      <ScrollView>
        {!fetchedRestaurants ? renderContentLoader() : renderRestaurantCards()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => ({
  restaurants: state.restaurants,
});

const mapDispatchToProps = {
  logout,
  searchRestaurants,
  setIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
