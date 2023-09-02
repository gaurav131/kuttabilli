import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { UserLocationContext } from "./App/Context/UserLocationContext";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [petLocation, setPetLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [live, setLive] = useState(false);
  const [petData, setPetData] = useState({
    name: "",
    deviceId: "",
    ownerName: "",
    petType: "",
    breed: "",
    age: "",
    gender: "",
    dob: "",
    weight: "",
    allergies: "",
    adoptionDate: "",
    microchip: "",
    otherInfo: "",
  });

  useEffect(() => {
    axios
      .get(`http://kuttabilli.in/get_location.php`)
      .then(({ data }) => {
        console.log("data => ", data);
        setPetLocation({
          latitude: data.lat,
          longitude: data.lon,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        });
        console.log(
          "Pet location => ",
          petLocation.latitude,
          petLocation.longitude
        );
      })
      .catch((error) => {
        console.log("Pet Error => ", error);
      });
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("user location => ", location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider
        value={{
          petLocation,
          setPetLocation,
          location,
          setLocation,
          distance,
          setDistance,
          address,
          setAddress,
          live,
          setLive,
        }}
        petData={{ petData }}
      >
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },
});
