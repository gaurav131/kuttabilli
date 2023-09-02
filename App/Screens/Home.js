import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator, MD2Colors } from "react-native";
import { UserLocationContext } from "./../Context/UserLocationContext";
import GoogleMapView from "./../Components/Home/GoogleMapView";
import Live from "../Components/Home/Live";

const Home = () => {
  const { location, petLocation } = useContext(UserLocationContext);

  if (petLocation === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color="blue" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GoogleMapView />
      <View style={styles.live}>
        <Live />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    zIndex: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    elevation: 3,
  },
  live: {
    zIndex: 1,
  },
});

export default React.memo(Home);
