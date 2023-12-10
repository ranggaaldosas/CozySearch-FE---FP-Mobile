import { View, Text, ScrollView, StyleSheet  } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import { AssetImage, HeightSpacer } from "../components";
import LottieView from 'lottie-react-native';

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={80} />

        <View style={styles.centeredView}>
          <LottieView 
            source={require('../assets/images/login_lottie.json')}
            autoPlay
            loop
            renderMode="contain"
            style={{width: 250, height: 250, background:'transparent'}} // Adjust size as needed
          />
        </View>

        <View style={{height: 600}}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});