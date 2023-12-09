import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppBar, HeightSpacer, ReusableBtn } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const SelectRoom = ({navigation}) => {

  
  const rooms = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Kos Putra Pak Karyo",
      location: "Keputih, Surabaya ",
      imageUrl:
        "https://www.99.co/id/panduan/wp-content/uploads/2022/11/peraturan-kos-kosan-1000x630.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "AB Kost",
      location : "Keputih, Surabaya",
      imageUrl : "https://www.99.co/id/panduan/wp-content/uploads/2022/11/peraturan-kos-kosan-1000x630.jpg",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Kos Pak Dzaki (Putra)",
      location: "Depok, Yogyakarta",
      imageUrl:
        "https://www.99.co/id/panduan/wp-content/uploads/2022/11/peraturan-kos-kosan-1000x630.jpg",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Kos Merpati (Putri)",
      location: "Keputih, Surabaya",
      imageUrl:
        "https://www.99.co/id/panduan/wp-content/uploads/2022/11/peraturan-kos-kosan-1000x630.jpg",
      rating: 4.8,
      review: "24455 Reviews",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      imageUrl:
        "https://www.99.co/id/panduan/wp-content/uploads/2022/11/peraturan-kos-kosan-1000x630.jpg",
      title: "Kos Putra Pak Asril",
      location: "U.S.A New York ",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={"Select Room"}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <FlatList 
        data={rooms}
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({item})=> (
          <View style={styles.tileColumn}>
            <View style={styles.tile}>
            <ReusableTile item={item}/> 

          <View style={styles.btnStyle}>
          <ReusableBtn
          onPress={() => navigation.navigate("SelectedRoom", {item})}
          btnText={"Select Room"}
          width={SIZES.width - 50}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />
          </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({
  tileColumn: {marginHorizontal: 20, marginBottom: 10},
  tile: {backgroundColor: COLORS.lightWhite, borderRadius: 12},
  btnStyle: {margin: 10, alignItems: "center"}
});
