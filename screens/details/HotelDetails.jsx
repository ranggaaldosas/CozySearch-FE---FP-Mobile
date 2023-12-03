import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  AppBar,
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  ReviewsList,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./hotelDetails.style";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import {Feather} from '@expo/vector-icons'

const HotelDetails = ({ navigation }) => {
  const hotel = {
    "availability": {
        "start": "2023-08-10T00:00:00.000Z",
        "end": "2023-08-17T00:00:00.000Z"
    },
    "coordinates": {
        "latitude": -7.293969464260375,
        "longitude": 112.80701637268066
    },
    "_id": "64d34be53295a816648298d0",
    "country_id": "64d2fd32618522e2fb342eec",
    "title": "Kos Gholmasyn",
    "description": "Kos Gholmasyn merupakan salah satu kos di kota Surabaya. Dengan fasilitas yang lengkap dan harga yang terjangkau, membuat kos ini menjadi kos yang paling banyak dicari oleh mahasiswa/i yang sedang mencari tempat tinggal di kota Surabaya.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://www.99.co/id/panduan/wp-content/uploads/2022/11/peraturan-kos-kosan-1000x630.jpg",
    "rating": 4.7,
    "review": "425 Reviews",
    "location": "Keputih, Sukolilo",
    "price": "1.500.000",
    "__v": 1,
    "reviews": [
        {
            "_id": "64d38ff59af9119acfab0ece",
            "review": "Kos nya cukup menarik, rapih, dan bersih, Hal ini yang membuat saya betah tinggal di kos ini. Terimakasih Kos Gholmasyn",
            "rating": 4.6,
            "user": {
                "_id": "64c5d95adc7efae2a45ec376",
                "username": "John Doe",
                "profile": "https://t4.ftcdn.net/jpg/02/83/34/87/360_F_283348729_wcG8rvBF5f1VfPGKy916pIcmgGk0PK7B.jpg"
            },
            "updatedAt": "2023-08-09"
        },
        {
            "_id": "64d797efa5628cedef4fce58",
            "review": "Kos nya cukup menarik, rapih, dan bersih, Hal ini yang membuat saya betah tinggal di kos ini. Terimakasih Kos Gholmasyn",
            "rating": 4.6,
            "user": {
                "_id": "64c5d95adc7efae2a45ec376",
                "username": "Zoe Doe",
                "profile": "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            },
            "updatedAt": "2023-08-09"
        }
    ]
}

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }

 

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />
              <ReusableText
                text={hotel.location}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={15} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            family={"regular"}
            size={SIZES.small+2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates}/>

          <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText
            text={'Reviews'}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <TouchableOpacity>
            <Feather name='list' size={20}/>
          </TouchableOpacity>
          </View>

          <HeightSpacer height={10}/>

          <ReviewsList reviews={hotel.reviews}/>

        </View>
        <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
          <View>
          <ReusableText
            text={`\Rp. ${hotel.price}`}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />

          <ReusableText
            text={"Jan 01 - Dec 25"}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          </View>

          <ReusableBtn
          onPress={() => navigation.navigate("SelectRoom")}
          btnText={"Select Room"}
          width={(SIZES.width - 50)/2.2}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />
          </View>

      </View>
    </ScrollView>
  );
};

export default HotelDetails;
