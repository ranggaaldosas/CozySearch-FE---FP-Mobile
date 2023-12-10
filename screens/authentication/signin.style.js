import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.lightWhite
    },
    inputWrapper: (borderColor)=> ({
        borderColor: COLORS.black,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 3,
        borderBottomWidth: 6,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center"
    }), 
    wrapper: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    errorMessage: {
       color: COLORS.red,
       fontSize: SIZES.small,
       fontFamily: 'regular',
       marginTop: 5,
       marginLeft: 5,
    },
    customButton: {
        width: SIZES.width - 40,
        backgroundColor: COLORS.green,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: SIZES.small,
        borderColor: COLORS.black,
        borderWidth: 3,
        borderBottomWidth: 7, // Bottom border width of 5
      },
    buttonText: {
        fontFamily: "medium", // Adjust the font family as per your theme
        fontSize: SIZES.medium,
        color: COLORS.white,
      },

})


export default styles