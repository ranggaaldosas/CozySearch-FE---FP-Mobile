import { View, Image, ImageBackground } from "react-native";
import React from "react";
import LottieView from 'lottie-react-native';
import styles from "./slides.style";
import {
  HeightSpacer,
  ReusableBtn,
  ReusableText,
} from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item, isLastSlide }) => {
  const navigation = useNavigation();

  return (
    <View>
      {item.lottie ? (
        <ImageBackground 
          source={item.backgroundImage}
          style={styles.lottieContainer}
        >
          <LottieView 
            source={item.lottie}
            autoPlay
            loop
            style={styles.lottie}
          />
        </ImageBackground>
      ) : (
        <Image source={item.image} style={styles.image} />
      )}

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={40} />

        {isLastSlide ? (
          <ReusableBtn
            onPress={() => navigation.navigate('Bottom')}
            btnText={"Let's go"}
            width={(SIZES.width - 50) / 2.2}
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={0}
            textColor={COLORS.white}
          />
        ) : (
          <LottieView 
            source={require('../../assets/images/swipe_lottie.json')}
            autoPlay
            loop
            style={{
              width: 85,
              height: 85,
              position: 'absolute', // Menentukan posisi absolute
              right: 0,            // Jarak dari sisi kanan
              bottom: 0            // Jarak dari bagian bawah
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Slides;