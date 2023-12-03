import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const Recommended = ({ navigation }) => {
  const recommendations = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Kos Putri Pak Budi",
      location: "Keputih, Sukolilo",
      imageUrl:
        "https://thekosan.com/kosangu/img/photo/14.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "AB Kost Putra",
      location: "Keputih, Sukolilo",
      imageUrl:
        "https://thekosan.com/kosangu/img/photo/11.jpg",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Kos Merpati",
      location: "Keputih, Sukolilo",
      imageUrl:
        "https://yukbisniskost.com/wp-content/uploads/2022/08/2.-usaha-kos-kosan.jpg",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Kos Garuda",
      location: "Keputih, Sukolilo",
      imageUrl:
        "https://www.nusabali.com/article_images/141777/5-daftar-lengkap-kost-eksklusif-di-bali-berikut-ha-800-2023-05-14-205327_0.jpg",
      rating: 4.8,
      review: "24455 Reviews",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      imageUrl:
        "https://blog-images.reddoorz.com/uploads/image/file/10590/kost-bali-terdekat-dari-kampus-feature.jpg",
      title: "Kos Melati",
      location: "Keputih, Sukolilo",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          top={10}
          left={0}
          right={0}
          title={"Recommendations"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('Search')}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recommended;
