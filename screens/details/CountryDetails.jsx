import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
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

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "Bandung",
    description:
      "Bandung merupakan salah satu kota yang terletak di Jawa Barat. Kota ini terkenal dengan sebutan Kota Kembang. Kota ini memiliki banyak tempat wisata yang menarik untuk dikunjungi. Salah satu tempat wisata yang terkenal di Bandung adalah Kawah Putih. Kawah Putih merupakan sebuah danau yang terletak di kaki Gunung Patuha. Kawah Putih memiliki air yang berwarna putih kehijauan. Hal ini dikarenakan adanya kandungan belerang yang tinggi di dalamnya. Selain Kawah Putih, Bandung juga memiliki tempat wisata lainnya seperti Tangkuban Perahu, Situ Patenggang, dan lain sebagainya",
    imageUrl:
      "https://elshinta.com/asset/upload/article/2023/september/8628_ELSHINTADOTCOM_20230925_gesat-2.jpg",
    popular: [
      {
        "_id": "64c675be3cfa5e847bcd5439",
        "title": "Candi Borobudur",
        "ImageUrl": "https://www.pegipegi.com/travel/wp-content/uploads/2019/10/candi-borobudur.jpg",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "Magelang, Yogyakarta"
    },
    {
        "_id": "64c675793cfa5e847bcd5436",
        "title": "Komodo Island",
        "ImageUrl": "ttps://www.pegipegi.com/travel/wp-content/uploads/2019/10/candi-borobudur.jpg",
        "rating": 4.8,
        "review": "2312 Reviews",
        "location": "Keputih, Surabaya"
    }
    ],
    region: "Kota Bandung",
  };
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={country.country}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={country.popular} />

          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotels"}
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
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
