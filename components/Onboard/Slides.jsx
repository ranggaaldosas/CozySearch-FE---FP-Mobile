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

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      {item.lottie ? (
        <ImageBackground 
          source={item.backgroundImage} // Gunakan gambar latar belakang dari properti item
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

        <ReusableBtn
          onPress={() => navigation.navigate('Bottom')}
          btnText={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;