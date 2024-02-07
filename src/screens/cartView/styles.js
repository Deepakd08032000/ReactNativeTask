import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgStyle: {
        height: SIZES.height * 0.25,
        width: SIZES.width * 0.94,
        borderRadius: 12,
        alignSelf: 'center',
        borderTopRightRadius:0,
        borderTopLeftRadius:0,
        // marginBottom: 12,

    },
    imgStyleslide: {
        marginVertical:12,
        height: SIZES.height * 0.15,
        width: SIZES.width * 0.3,
        borderRadius: 12,
        alignSelf: 'center',
    },
    box: {
        borderWidth: 1,
        width: SIZES.width * 0.94,
        alignSelf: 'center',
        borderRadius: 12,
        paddingTop: SIZES.width * 0.04,
        paddingHorizontal: SIZES.width * 0.03,
        marginVertical: SIZES.width * 0.06,
        // backgroundColor: COLORS.white,
    }
})