import { View, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles from "./topTab.style";
import { useNavigation } from '@react-navigation/native'
import axios from "axios";
import { useAuthStore } from "../store/authStore";
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  const [image, setImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState('')
  const navigation = useNavigation();
  const { userId } = useAuthStore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`https://cozysearch-befp-mobile-production.up.railway.app/api/users/${userId}`);
        if (res && res.data) {
          setUserData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUserData();
  }, [userId]);
  

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    setModalVisible(false);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    setModalVisible(false);

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View>
              <NetworkImage
                source={image ? { uri: image } : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwhite-background&psig=AOvVaw2ABcv5dyCteNAiAgpr-0p0&ust=1701750651507000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCbt6r59IIDFQAAAAAdAAAAABAE"}
                width={"100%"}
                height={300}
                radius={0}
              />
            </View>

            <AppBar
              top={40}
              left={20}
              right={20}
              color={COLORS.white}
              icon={"logout"}
              color1={COLORS.white}
              onPress1={() => {
                navigation.navigate('Auth');
              }}
            />

            <View style={styles.profile}>
              <HeightSpacer height={5} />
              <View style={{ alignItems: "center" }}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.image} />
                ) : (
                  <Image
                    source={{
                      uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png",
                    }}
                    style={styles.image}
                  />
                )}
                <HeightSpacer height={5} />
                <ReusableText
                  text={userData.username}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
              <HeightSpacer height={5} />
              <View style={styles.name}>
                <View style={{ alignItems: "center" }}>
                  <ReusableText
                    text={userData.email}
                    family={"medium"}
                    size={SIZES.medium}
                    color={COLORS.white}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible} style={modalStyles.modalContainer}>
            <View style={modalStyles.innerContainer}>
              <TouchableOpacity onPress={pickImage} style={modalStyles.button}>
                <ReusableText
                  text={"Pick from Gallery"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.lightBlue}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={takePhoto} style={modalStyles.button}>
                <ReusableText
                  text={"Take Photo"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.lightBlue}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={modalStyles.cancelButton}>
                <ReusableText
                  text={"Cancel"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: COLORS.primary,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    width: '100%',
    alignItems: 'center',
  },
  cancelButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.red,
    width: '100%',
    alignItems: 'center',
  },
});

export default TopTab;
