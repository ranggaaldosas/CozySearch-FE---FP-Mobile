import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  AppBar,
  AssetImage,
  Counter,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableBtn,
  ReusableText,
  WidthSpacer,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import * as LocalAuthentication from 'expo-local-authentication';


const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);

  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    return compatible;
  };

  const checkBiometricsTypes = async () => {
    let supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
    let isFaceIDSupported = supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
  
    console.log("Face ID Supported: ", isFaceIDSupported); // Tambahkan baris ini untuk debugging
  
    return isFaceIDSupported;
  };
  
  const handleBiometricAuth = async () => {
    try {
      let isBiometricSupported = await LocalAuthentication.hasHardwareAsync();
      
      if (isBiometricSupported) {
        let result = await LocalAuthentication.authenticateAsync({
          promptMessage: "Authenticate with Fingerprint",
          cancelLabel: "Cancel", // You can customize this text.
          fallbackLabel: "Use PIN", // Customize this text to prompt the user to use PIN if fingerprint fails.
        });
      
        if (result.success) {
          // Authentication successful, navigate to the next screen
          navigation.navigate("Success");
        } else {
          // The user has chosen to use the device's PIN or password, or authentication failed
          if (result.error === "user_fallback") {
            // Here, you can handle the case when the user has chosen to use the fallback
            // This is where you would prompt the user for their PIN/password if you want to handle it manually
            // Otherwise, the system will handle it
          } else {
            // Authentication failed
            console.error("Authentication failed:", result.error);
            alert("Authentication failed. Please try again.");
          }
        }
      } else {
        // Biometric hardware not supported or not enrolled, navigate without biometric authentication
        alert("Fingerprint authentication is not supported on this device, or no fingerprints are enrolled.");
        navigation.navigate("Success");
      }
    } catch (error) {
      // Handle any other errors
      console.error("An error occurred during fingerprint authentication:", error);
      alert("An error occurred. Please try again later.");
    }
  };
    
  
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={item.title}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <ReusableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <ReusableText
              text={"Room Requirements"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={30} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReusableText
                text={"$ 400"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <AssetImage
                  mode={"contain"}
                  width={30}
                  height={20}
                  data={require("../../assets/images/Visa.png")}
                />
                <ReusableText
                  text={"Visa"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"4 Guest"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>
            <HeightSpacer height={30} />

            <ReusableBtn
              onPress={handleBiometricAuth}
              btnText={"Book Now"}
              width={SIZES.width - 50}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />

            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
