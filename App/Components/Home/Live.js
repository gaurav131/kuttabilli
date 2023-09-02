import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { Button } from "react-native-paper";
import axios from "axios";
import { UserLocationContext } from "./../../Context/UserLocationContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Live = () => {
  const myApiKey = "AIzaSyCTE-KapxkbYkdOLRu2svxDZ1gk6OjeUoE";
  const { petLocation, distance, address, setAddress, live, setLive } =
    useContext(UserLocationContext);

  const getAddressFromCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${myApiKey}`
      );
      const data = response.data.results[0].formatted_address;
      console.log("ADDRESS => ", data);
      setAddress(data);
    } catch (error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    }
  };

  useEffect(() => {
    getAddressFromCoordinates(petLocation.latitude, petLocation.longitude);
  }, []);

  const handleLive = () => {
    setLive(!live);
  };

  return (
    <View style={styles.container}>
      {live ? <Text style={styles.distance}>{distance} km</Text> : null}
      <View style={styles.addressContainer}>
        <Icon name="map-marker" size={16} color="white" style={styles.icon} />
        <Text style={styles.address}>{address}.</Text>
      </View>
      <View style={styles.btn}>
        <Button
          onPress={handleLive}
          mode="contained"
          icon={live ? "pause" : "location-enter"}
        >
          {live ? "Stop" : "Live"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Dimensions.get("screen").height / 1.5,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 2,
    padding: 5,
    justifyContent: "top",
    alignItems: "center",
  },
  distance: {
    color: "red",
    padding: 2,
    fontSize: 18,
    fontWeight: "800",
    paddingLeft: 20,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  addressText: {
    color: "white",
    fontSize: 14,
  },
  address: {
    color: "white",
    fontSize: 16,
    paddingBottom: 12,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default React.memo(Live);
