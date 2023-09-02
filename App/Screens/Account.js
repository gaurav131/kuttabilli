import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { List, Button, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Home from "../Screens/Home";
import Activity from "../Screens/Activity";
import Profile from "../Screens/Profile";

const Account = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={80}
          source={require("./../../assets/kb.jpeg")} // Replace with your image source
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.deviceId}>Device ID: 12345678</Text>
        </View>
      </View>

      <List.Section style={styles.listSection}>
        <List.Subheader style={styles.subheader}>Navigation</List.Subheader>

        <TouchableOpacity
          onPress={() => navigation.navigate(Home)}
          style={styles.navButton}
        >
          <Button
            icon="home"
            mode="outlined"
            color="#FF5722"
            labelStyle={styles.navButtonText}
          >
            Home
          </Button>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(Activity)}
          style={styles.navButton}
        >
          <Button
            icon="history"
            mode="outlined"
            color="#FDB813"
            labelStyle={styles.navButtonText}
          >
            Activity
          </Button>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(Profile)}
          style={styles.navButton}
        >
          <Button
            icon="account-circle"
            mode="outlined"
            color="#00B200"
            labelStyle={styles.navButtonText}
          >
            Profile
          </Button>
        </TouchableOpacity>
      </List.Section>

      <View style={styles.buttonContainer}>
        <Button
          icon="logout"
          mode="outlined"
          onPress={() => navigation.navigate(Home)}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Log Out
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  deviceId: {
    fontSize: 14,
    color: "#777",
  },
  listSection: {
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  navButton: {
    marginBottom: 10,
  },
  navButtonText: {
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#FF5722",
  },
  buttonText: {
    color: "#FF5722",
    fontSize: 16,
  },
});

export default React.memo(Account);
