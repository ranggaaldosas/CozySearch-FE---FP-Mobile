import { StyleSheet, FlatList} from 'react-native';
import {  } from "react-native";

import React from 'react';
import Slides from '../../components/Onboard/Slides';

const Onboarding = () => {
    const slides = [
        {
            id: 1,
            lottie: require('../../assets/images/travel_lottie.json'),
            title: "Kemudahan pencarian Kos Terbaik?",
            backgroundImage: require('../../assets/images/1.png') // Ganti dengan gambar latar belakang yang sesuai
        },
        {
            id: 2,
            lottie: require('../../assets/images/payment_lottie.json'),
            title: "Pembayaran Aman?",
            backgroundImage: require('../../assets/images/2.png') // Ganti dengan gambar latar belakang yang sesuai
        },
        {
            id: 3,
            lottie: require('../../assets/images/app_lottie.json'), // Ganti dengan animasi Lottie yang sesuai
            title: "CozySearch Jawabannya!",
            backgroundImage: require('../../assets/images/3.png') // Ganti dengan gambar latar belakang yang sesuai
        },
        
    ];

    return (
        <FlatList 
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=> <Slides item={item}/>}
        />
    );
}

export default Onboarding;