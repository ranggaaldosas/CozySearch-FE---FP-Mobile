import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  PopularList,
} from "../../components/index";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

const PlaceDetails = ({navigation}) => {
    const route = useRoute();
    const id = route.params
    const place = {
      "_id": "64d062a3de20d7c932f1f70a",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "Kos Putra Pak Karyo",
      "description": "Kos Putra Pak Karyo terletak di Keputih, Surabaya. Kos ini memiliki fasilitas yang lengkap dan nyaman. Kos ini juga memiliki akses yang mudah untuk menuju ke berbagai tempat di Surabaya. Kos ini juga memiliki harga yang terjangkau.",
      "contact_id": "64c5d95adc7efae2a45ec376",
      "imageUrl": "https://www.ukur.com/blog/wp-content/uploads/2023/05/Kost-1-Lantai-1024x576.jpg",
      "rating": 4.8,
      "review": "1452 Reviews",
      "latitude": 40.689247,
      "longitude": -74.044502,
      "location": "Keputih, Sukolilo",
      "popular": [
          {
              "_id": "64c675be3cfa5e847bcd5439",
              "title": "Ayam Joder Kak Dhani",
              "imageUrl": "data:image/jpeg;base64,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",
              "rating": 4.6,
              "review": "12854 Reviews",
              "location": "Keputih, Surabaya"
          },
          {
              "_id": "64c675793cfa5e847bcd5436",
              "title": "Nasi Goreng Babi Asli Balige",
              "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
              "rating": 4.8,
              "review": "2312 Reviews",
              "location": "Keputih, Surabaya"
          }
      ]
  }
  return (
    <ScrollView>
    <View>
      <NetworkImage
        source={place.imageUrl}
        width={"100%"}
        height={350}
        radius={30}
      />

      <AppBar
        top={40}
        left={20}
        right={20}
        title={place.title}
        color={COLORS.white}
        icon={"search1"}
        color1={COLORS.white}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
    </View>

    <View style={styles.description}>
      <HeightSpacer height={15} />
      <ReusableText
        text={place.location}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
      />

      <DescriptionText text={place.description} />

      <View style={{ alignContent: "center" }}>
        <HeightSpacer height={20} />

        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Popular Culinary"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity onPress={() => {}}>
            <Feather name="list" size={20} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={20} />

        <PopularList data={place.popular} />

        <ReusableBtn
          onPress={() => navigation.navigate("HotelSearch")}
          btnText={"Carikan Kuliner terdekat"}
          width={SIZES.width - 40}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />
        <HeightSpacer height={50} />
      </View>
    </View>
  </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})