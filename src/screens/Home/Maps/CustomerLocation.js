import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, Alert, View, Platform } from "react-native";
import MapView, {
  Marker,
  Callout,
  PROVIDER_GOOGLE,
  Polygon,
  Circle,
} from "react-native-maps";
import * as Location from "expo-location";

const coordinates = [
  { name: "3", latitude: 47.92123, longitude: 106.918556 },
  { name: "4", latitude: 47.82123, longitude: 106.818556 },
  { name: "5", latitude: 47.72123, longitude: 106.818556 },
  { name: "6", latitude: 47.62123, longitude: 106.118556 },
];
const CustomerLocation = () => {
  const [customerLocation, setCustomerLocation] = useState(null);
  const showWelcomeMessage = () => {
    console.log("Bna");
  };

  const getLocation = async (location) => {
    let loc = await Location.reverseGeocodeAsync(location);
    return loc;
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
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
      <Polygon
        coordinates={coordinates}
        fillColor={"rgba(100, 200, 200, 0.3)"}
      />
      <Circle
        center={{ latitude: 47.92123, longitude: 106.918556 }}
        radius={500}
        fillColor={"rgba(200, 100, 200, 0.5)"}
      />
      <Marker
        coordinate={{
          latitude: customerLocation.latitude,
          longitude: customerLocation.longitude,
        }}
      >
        <Callout>
          <Image
            style={{ width: 10, height: 10, resizeMode: "contain" }}
            source={require("./assets/favicon.png")}
          />
          <Text>Улсууд</Text>
        </Callout>
      </Marker>
      {coordinates.map((marker) =>
        getLocation(marker).then((res) => {
          <Marker
            key={res.name}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onPress={() => console.log(marker.name)}
          >
            <Callout>
              <View
                style={{ width: 50, height: 50, backgroundColor: "red" }}
              ></View>
              <Text>{res.name}</Text>
            </Callout>
          </Marker>;
        })
      )}
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
