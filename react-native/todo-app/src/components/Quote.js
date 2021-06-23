import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import { fetchNewQuote } from "../redux/actions";

const Quote = ({ quote: { data }, fetchNewQuote }) => {
  React.useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.quoteHeader}>Quote of the day</Text>
      {data ? (
        <View>
          <Text style={styles.quoteText}>{data.text}</Text>
          <Text style={styles.author}>{data.author}</Text>
        </View>
      ) : (
        <ActivityIndicator style={styles.loader} size="small" color="white" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loader: {
    margin: 20,
  },
  quoteHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003F63",
  },
  quoteText: {
    paddingTop: 10,
    fontSize: 16,
  },
  author: {
    paddingTop: 10,
    fontWeight: "bold",
    textAlign: "right",
  },
});

const mapStateToProps = (state, ownProps) => ({
  quote: state.quote,
});

const mapDispatchToProps = {
  fetchNewQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
