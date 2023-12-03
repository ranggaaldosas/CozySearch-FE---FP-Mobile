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
            backgroundImage: require('../../assets/images/1.png')
        },
        {
            id: 2,
            lottie: require('../../assets/images/payment_lottie.json'),
            title: "Keamanan pembayaran Kos Terbaik?",
            backgroundImage: require('../../assets/images/2.png')
        },
        {
            id: 3,
            lottie: require('../../assets/images/app_lottie.json'),
            title: "CozySearch Jawabannya!",
            backgroundImage: require('../../assets/images/3.png') 
        },
        
    ];

    return (
        <FlatList 
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Slides 
                    item={item} 
                    isLastSlide={item.id === slides.length}
                />
            )}
        />
    );
}

export default Onboarding;