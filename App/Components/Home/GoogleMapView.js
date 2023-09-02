import { View, Dimensions, Image } from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import { UserLocationContext } from "./../../Context/UserLocationContext";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GoogleMapView = () => {
  const [mapRegion, setmapRegion] = useState([]);
  const { location, petLocation, setDistance, live } =
    useContext(UserLocationContext);
  const mapRef = useRef();
  const GOOGLE_MAPS_APIKEY = "AIzaSyCTE-KapxkbYkdOLRu2svxDZ1gk6OjeUoE";

  useEffect(() => {
    if (location || petLocation) {
      setmapRegion({
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        },
        pet_location: {
          latitude: petLocation.latitude,
          longitude: petLocation.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        },
      });
    }
  }, []);

  if (live === false) {
    return (
      <View>
        {petLocation ? (
          <MapView
            style={{
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").height,
              position: "absolute",
              zIndex: -1,
            }}
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={false}
            region={mapRegion.pet_location}
            // onRegionChangeComplete={(location) => setLocation(location)}
          >
            <Marker
              title="Pet"
              coordinate={mapRegion.pet_location}
              style={{ height: 35, width: 35 }}
            >
              <Image
                source={require('"./../../../assets/dddd.webp')}
                style={{ height: 35, width: 35 }}
              />
            </Marker>
          </MapView>
        ) : null}
      </View>
    );
  }

  return (
    <View>
      {location && petLocation ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            position: "absolute",
            zIndex: -1,
          }}
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion.location}
          // onRegionChangeComplete={(location) => setLocation(location)}
        >
          <MapViewDirections
            origin={mapRegion.location}
            destination={mapRegion.pet_location}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
            optimizeWaypoints={true}
            minZoomLevel={2}
            maxZoomLevel={15}
            zoom={1}
            zoomEnabled={true}
            enableZoomControl={true}
            zoomTapEnabled={true}
            followUserLocation={true}
            onReady={(result) => {
              setDistance(result.distance);
              console.log(`Distance: ${result.distance} km`);
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 250,
                  left: 30,
                  top: 100,
                },
              });
            }}
          />
          <Marker
            title="Pet"
            coordinate={mapRegion.pet_location}
            style={{ height: 35, width: 35 }}
          >
            <Image
              source={require('"./../../../assets/dddd.webp')}
              style={{ height: 35, width: 35 }}
            />
          </Marker>
        </MapView>
      ) : null}
    </View>
  );
};

export default React.memo(GoogleMapView);
