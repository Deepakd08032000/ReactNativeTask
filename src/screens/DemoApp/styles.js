import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { height, width } = Dimensions.get("window")
export default StyleSheet.create({
    innerContainer: {
        width: width * 0.94,
        alignSelf: 'center',
    },
    // logo
    logoBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.15,
    },
    logoStyle: {
        height: height * 0.1,
        width: width * 0.2,
        alignSelf: 'center',
    },
    logoText: {
        fontSize: width * 0.05,
        fontFamily: FONTS.semiBold,
        color: COLORS.black,
        marginBottom: -3,
    },
    // heading
    headingBox: {
        marginTop: height * 0.025,

    },
    headingTxt: {
        fontSize: width * 0.05,
        color: COLORS.black,
        fontFamily: FONTS.semiBold,

    },
    headingsubTxt: {
        fontSize: width * 0.035,
        color: COLORS.black,
        fontFamily: FONTS.regular,
        marginBottom: -2,
    },
    mainStyle: {
        marginTop: height * 0.03,
    },
    textStyle: {
        fontSize: width * 0.041,
        color: COLORS.white,
        width: width * 0.8,
        textAlign: 'center',
        fontFamily: FONTS.medium,
        marginBottom: -2,
    },
    mainStylebtn: {
        marginVertical: height * 0.03,
        elevation: 0,

    },
    // linebox
    lineBox: {
        marginTop: height * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: width * 0.02,
    },
    line: {
        width: width * 0.42,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray1,
    },
    lineTxt: {
        fontSize: width * 0.038,
        color: COLORS.black,
        marginBottom: -3,
        fontFamily: FONTS.medium,
    },
    TouchBox: {
        alignSelf: 'center',
        marginVertical: height * 0.035,
    },
    Touchtxt: {
        fontSize: width * 0.04,
        color: COLORS.black,
        fontFamily: FONTS.medium,
    },
    suggest: {
        fontSize: SIZES.width * 0.03,
        color: COLORS.green1,
        fontFamily: FONTS.regular,
        marginVertical: SIZES.width * 0.03,
    },
    suggestPass: {
        fontSize: SIZES.width * 0.041,
        color: COLORS.black,
        fontFamily: FONTS.medium,
        textAlign: 'center',
        marginVertical: SIZES.width * 0.01,
    }
})