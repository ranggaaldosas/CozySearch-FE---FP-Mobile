import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { ReusableText, HeightSpacer, Recommendations } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";


const { height } = Dimensions.get('window'); // Dapatkan tinggi layar

const kosData = [
  {
    id: '1',
    name: 'AB Kos dan Cafe',
    latitude: -7.292721577964354,
    longitude: 112.8059896514172,
  },
  {
    id: '2',
    name: 'Kos Bu Anwar',
    latitude: -7.29047610068115,
    longitude: 112.80549612497205,
  },
  {
    id: '3',
    name: 'Omah Kos B8',
    latitude: -7.291942820701271,
    longitude: 112.80473381267747,
  },
  {
    id: '4',
    name: 'Kos Bramantya',
    latitude: -7.295786484408384, 
    longitude: 112.80189292708401
  },
  {
    id: '5',
    name: 'Kos Bu Rina',
    latitude: -7.2895942683766055, 
    longitude: 112.80391869399864
  },
  {
    id: '6',
    name: 'Kos Putri Fiva',
    latitude: -7.287423270622068, 
    longitude: 112.80130085778013
  },
  {
    id: '7',
    name: 'Kos Pak Yakrie',
    latitude: -7.290083805632174, 
    longitude: 112.80494866196908
  },
  {
    id: '8',
    name: 'Kos Putra Kus',
    latitude: -7.293361563034525, 
    longitude: 112.80490574662568
  },
  {
    id: '9',
    name: 'Kos Bu Nita',
    latitude: -7.293352915656123, 
    longitude: 112.80298287457548
  }
];

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

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadian = angle => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const RADIUS_OF_EARTH_IN_KM = 6371;

    const dLat = distance(lat2, lat1);
    const dLon = distance(lon2, lon1);

    lat1 = toRadian(lat1);
    lat2 = toRadian(lat2);

    // Haversine Formula
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    return RADIUS_OF_EARTH_IN_KM * c;
  }
  

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
        {kosData.map(kos => (
          <Marker
            key={kos.id}
            coordinate={{ latitude: kos.latitude, longitude: kos.longitude }}
            title={kos.name}
            description={`Distance: ${calculateDistance(currentLocation.latitude, currentLocation.longitude, kos.latitude, kos.longitude).toFixed(2)} km`}
          />
        ))}
        <Marker
          coordinate={currentLocation}
          title="My Location"
          pinColor="green"
        />
      </MapView>
      <View>
        <Recommendations
          data={kosData}
          currentLocation={currentLocation}
        />
      </View>
    </View>
  );
};

export default LocationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: '100%',
    height: height * 0.67, // 80% dari tinggi layar
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
