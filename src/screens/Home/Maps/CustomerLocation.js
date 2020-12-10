import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, Alert, View, Platform } from "react-native";
import data from "../../../utils/map.json";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
const CustomerLocation = ({ setActiveItem }) => {
  const [customerLocation, setCustomerLocation] = useState(data[0]);
  const getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    return geocode;
  };
  const setMarker = (marker) => {
    setActiveItem(marker);
    setCustomerLocation(marker);
  };
  useEffect(() => {
    setActiveItem(data[0]);
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      setCustomerLocation(location.coords);
    })();
  }, []);

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: customerLocation.latitude,
        longitude: customerLocation.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      }}
    >
      {/* <Polygon
        coordinates={coordinates}
        fillColor={"rgba(100, 200, 200, 0.3)"}
      /> */}
      {/* <Circle
        center={{ latitude: 47.92123, longitude: 106.918556 }}
        radius={500}
        fillColor={"rgba(200, 100, 200, 0.5)"}
      /> */}
      <Marker
        coordinate={{
          latitude: customerLocation.latitude,
          longitude: customerLocation.longitude,
        }}
      >
        <Image
          style={{ width: 35, height: 35, resizeMode: "contain" }}
          source={require("../../../../assets/map.png")}
        />
        <Callout onPress={() => console.log("1")}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={require("../../../../assets/bg.png")}
          />
          <Text>Улсууд</Text>
        </Callout>
      </Marker>
      {data.map((marker) => (
        <Marker
          key={marker.name}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          onPress={() => setMarker(marker)}
          style={{ width: 200 }}
        >
          <Image
            style={{ width: 35, height: 35, resizeMode: "contain" }}
            source={require("../../../../assets/map.png")}
          />
          <Callout>
            <View
              style={{ width: 50, height: 50, backgroundColor: "red" }}
            ></View>
            <Text>{marker.name}</Text>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  map: {
    height: "100%",
  },
});
export default CustomerLocation;
