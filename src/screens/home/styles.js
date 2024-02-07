import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

export default StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    imgStyle: {
        height: SIZES.height * 0.2,
        width: SIZES.width * 0.94,
        borderRadius: 12,
        alignSelf: 'center',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        // marginBottom: 12,

    },
    imgStyleslide: {
        marginVertical: 12,
        height: SIZES.height * 0.1,
        width: SIZES.width * 0.2,
        borderRadius: 12,
        alignSelf: 'center',

        // marginBottom: 12,
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignSelf:'center',


    },
    box: {
        borderWidth: 1,
        width: SIZES.width * 0.94,
        alignSelf: 'center',
        borderRadius: 12,
        paddingVertical: SIZES.width * 0.03,
        paddingHorizontal: SIZES.width * 0.03,
        marginVertical: SIZES.width * 0.03,

    }

})