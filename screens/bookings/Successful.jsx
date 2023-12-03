import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AssetImage, HeightSpacer, ReusableBtn, ReusableText } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";
import LottieView from 'lottie-react-native';

const Successful = ({navigation}) => {
  const hotel = {
    _id: "64c67442776ed29f19727fd7",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Kos Gholmasyn Pak Kus",
    imageUrl:
      "https://lh3.googleusercontent.com/-VQWR6KfWKdSzNm3oDzqKYODgVSsL0iuiObukphgjX4-0go_BLSLNR4nTsP9m8a3dV4LOHzFTsW78K0uLN_00SV2K1jYQPuOLvjHNwEqQXxgSC3W9XwIBrNzlTHGHYrEG5Nx6pKBwM2ZKrnwva6EOQCn0KRqgZDHAoRRg7omAwdmMbLRWYtfB7pScgHF1UlNd2aGAgpIpA",
    rating: 4.7,
    review: "1204 Reviews",
    location: "Keputih, Sukolilo",
  };
  return (
    <View>
      <View style={{ marginTop: "30%" }}>
      <LottieView
        source={require("../../assets/images/success_lottie.json")}
        autoPlay
        loop
        style={{ width: "100%", height: 250, alignSelf: "center" }}
      />

        <HeightSpacer height={40} />

        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Successful"}
            family={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={20} />

          <ReusableText
            text={"You can find your booking details below"}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          <HeightSpacer height={20} />
        </View>
        <View style={{ margin: 20 }}>
          <ReusableText
            text={"Room Details"}
            family={"bold"}
            size={SIZES.medium}
            color={COLORS.dark}
          />

          <HeightSpacer height={20} />

          <ReusableTile item={hotel}/>

          <HeightSpacer height={40} />

          <ReusableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Done"}
          width={SIZES.width - 50}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />

        </View>
      </View>
    </View>
  );
};

export default Successful;

const styles = StyleSheet.create({});
