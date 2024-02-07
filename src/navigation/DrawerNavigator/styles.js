import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    drawerContainer:{
        borderTopRightRadius: 30,
        paddingHorizontal: width * .03,
    },
    head:{
        marginVertical: height * .05,
        marginHorizontal: width * .03,
        flexDirection:'row',
    },
    headTitle:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black2,
    },
    menu:{
        width: width * .06,
        height: height * .027,
        marginRight: width * .03,
    },
    icons:{
        width: width * .065,
        height: height * .03,
        tintColor: COLORS.blue,
    },
    labels:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black2,
        marginLeft: width * -.05,
    },
    items:{
        backgroundColor: COLORS.white,
        // borderWidth:1,
    },
    drawerContainer:{
        borderTopRightRadius: 30,
    },
    iconsContainer:{
        width: width * .06,
    },
  
})