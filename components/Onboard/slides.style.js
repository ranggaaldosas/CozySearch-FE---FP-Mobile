import { StyleSheet } from "react-native";
import {SIZES} from "../../constants/theme"

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        width: SIZES.width,
        height: '100%'
    },
    lottieContainer: {
        flex: 1, // Menggunakan flex untuk mengatur ukuran container
        justifyContent: 'center', // Memusatkan konten secara vertikal
        alignItems: 'center', // Memusatkan konten secara horizontal
        width: SIZES.width,
        height: '100%'
      },
    lottie: {
        width: 325,  // Lebar yang diinginkan
        height: 325, // Tinggi yang diinginkan
        alignSelf: 'center', // Untuk memusatkan animasi
        marginBottom: 30 
      },
    stack: {
        position: "absolute",
        bottom: 0,
        marginBottom: 35,
        marginHorizontal: 20
    }
})

export default styles