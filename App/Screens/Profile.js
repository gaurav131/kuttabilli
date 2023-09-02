import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  Appbar,
  Button,
  Card,
  Divider,
  Avatar,
  IconButton,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <MaterialCommunityIcons
          name="dog"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Appbar.Content title="My Pets" />
        <Button
          size={20}
          mode="outlined"
          onPress={() => console.log("Edit Photo Pressed")}
          style={styles.btn}
        >
          <MaterialCommunityIcons
            name="image-edit-outline"
            size={24}
            color="black"
          />
        </Button>
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Cover source={require("./../../assets/kuttabilli.jpeg")} />
      </Card>

      <Card.Title
        title="Sheru"
        subtitle="Devices ID: 12345678"
        left={(props) => (
          <Avatar.Image
            size={52}
            source={require("./../../assets/p_kb.jpeg")}
          />
        )}
        right={(props) => (
          <IconButton {...props} icon="pencil" onPress={() => {}} />
        )}
      />

      <Divider style={styles.divider} />

      {/* Additional Profile Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Owner's Name:</Text>
        <Text style={styles.infoValue}>Aaaa</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Pet Type:</Text>
        <Text style={styles.infoValue}>Dog</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Breed:</Text>
        <Text style={styles.infoValue}>Golden Retriever</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Age:</Text>
        <Text style={styles.infoValue}>3 years</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Gender:</Text>
        <Text style={styles.infoValue}>Male</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>DOB:</Text>
        <Text style={styles.infoValue}>April 15, 2018</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Weight:</Text>
        <Text style={styles.infoValue}>5 kg</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Allergies:</Text>
        <Text style={styles.infoValue}>No</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Adoption Date:</Text>
        <Text style={styles.infoValue}>April 15, 2018</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Microchip #:</Text>
        <Text style={styles.infoValue}>54321</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Other Info:</Text>
        <Text style={styles.infoValue}>abcd abcd abcd</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}></Text>
        <Text style={styles.infoValue}></Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}></Text>
        <Text style={styles.infoValue}></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginBottom: 50,
  },
  btn: {
    marginRight: 16,
  },
  icon: {
    margin: 10,
  },
  card: {
    margin: 16,
    borderRadius: 12,
    elevation: 4,
  },
  cardActions: {
    marginBottom: -10,
    justifyContent: "center",
  },
  divider: {
    marginVertical: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  infoLabel: {
    flex: 1,
    fontWeight: "bold",
  },
  infoValue: {
    flex: 2,
  },
});

export default React.memo(Profile);
