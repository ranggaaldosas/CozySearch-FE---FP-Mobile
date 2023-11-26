import { StyleSheet } from "react-native";
import {SIZES} from "../../constants/theme"

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        width: SIZES.width,
        height: SIZES.height
    },
    lottieContainer: {
        flex: 1, // Menggunakan flex untuk mengatur ukuran container
        justifyContent: 'center', // Memusatkan konten secara vertikal
        alignItems: 'center', // Memusatkan konten secara horizontal
        width: SIZES.width,
        height: SIZES.height
      },
    lottie: {
        width: 350,  // Lebar yang diinginkan
        height: 350, // Tinggi yang diinginkan
        alignSelf: 'center' // Untuk memusatkan animasi
      },
    stack: {
        position: "absolute",
        bottom: 0,
        marginBottom: 60,
        marginHorizontal: 20
    }
})

export default styles