import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { SIZES } from "../../constants/theme";
import Country from "../Tiles/Country/Country";

const Places = () => {
  const countries =  [
    {
     _id: "64c62bfc65af9f8c969a8d04",
     country: "Bandung",
     description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc",
     imageUrl:
       "https://elshinta.com/asset/upload/article/2023/september/8628_ELSHINTADOTCOM_20230925_gesat-2.jpg",
     region: "Bandung",
   },
   {
     _id: "64cf2c565d14628d0ac0a2b7",
     country: "Surabaya",
     description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc",
     imageUrl:
       "https://discoveringsurabaya.files.wordpress.com/2015/09/landmark1.jpg",
     region: "Surabaya",
   },
   {
     _id: "64cf2c935d14628d0ac0a2b9",
     country: "Yogyakarta",
     description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc",
     imageUrl:
       "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/10-kegiatan-seru-bagi-solo-traveler-saat-wisata-di-yogyakarta/1.jpg",
     region: "Yogyakarta",
   },
   {
     _id: "64cf2d095d14628d0ac0a2bd",
     country: "Malang",
     description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc",
     imageUrl:
       "https://asset.kompas.com/crops/xYt4NxeYnrl6jG0LzW-Ioi9FtYI=/255x317:744x643/750x500/data/photo/2019/09/23/5d88578da4bb9.jpg",
     region: "Malang",
   },
   {
     _id: "64cf2d4d5d14628d0ac0a2bf",
     country: "DKI Jakarta",
     description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor aliquam, nunc libero ultricies nunc",
     imageUrl:
       "data:image/jpeg;base64,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",
     region: "DKI Jakarta",
   },
]
  return (
    <View>
     <HeightSpacer height={20}/>

     <VirtualizedList 
     data={countries}
     horizontal
     keyExtractor={(item) => item._id}
     showsHorizontalScrollIndicator={false}
     getItemCount={(data)=> data.length}
     getItem={(data, index)=> data[index]}
     renderItem={({item, index})=> (
        <View style={{marginRight: SIZES.medium}}>
          <Country item={item}/>
        </View>
     )}
     />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
