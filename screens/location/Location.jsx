import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { ReusableText, HeightSpacer, Recommendations } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";


const { height } = Dimensions.get('window'); // Dapatkan tinggi layar

const LocationComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        });
  
        let addressResponse = await Location.reverseGeocodeAsync(location.coords);
        if (addressResponse && addressResponse.length > 0) {
          setAddress(`${addressResponse[0].name}, ${addressResponse[0].street}, ${addressResponse[0].city}`);
        }
      } catch (error) {
        // Handle any errors that occur during the fetch operation
        setErrorMsg('Failed to fetch location');
        console.error(error); // Log the error to the console for debugging
      }
    })();
  }, []);
  

  if (!currentLocation) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg ? errorMsg : 'Fetching location...'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={currentLocation}
        style={styles.mapStyle}
      >
        <Marker
          coordinate={currentLocation}
          title={address ? address : "My Location"}
        />
      </MapView>

      <View style={styles.addressContainer}>
      <ReusableText
            text={address ? address : 'Your current location'}
            style={marginHorizontal = 5}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />
      </View>
    </View>
  );
};

export default LocationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapStyle: {
    width: '100%',
    height: height * 0.8, // 80% dari tinggi layar
  },
  addressContainer: {
    width: '100%',
    height: height * 0.2, // 20% dari tinggi layar
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)', // Background sedikit transparan
  },
  addressText: {
    fontSize: 16,
    paddingTop: 5,
    marginHorizontal: 5,
    paddingBottom: 10,
  },
});
