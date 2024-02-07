import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    tabBarStyle:{
        height: height * .08,
    },
    home:{
        width: width * .06,
        height:height * .033,
        tintColor: COLORS.blue,
    },
    bag:{
        width: width * .056,
        height:height * .029,
    },
    
    well:{
        width: width * .07,
        height: height * .04,
    },
    notifications:{
        position:'absolute',
        width: width * .05,
        height: height * .026,
        right:-5,
        top:-5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.red,
        borderRadius:50,
    },
    text:{
        fontFamily: "Poppins Bold 700",
        color: COLORS.white,
        fontSize:12,
        marginBottom:-5,
    },
    buy:{
        width: width * .07,
        height: height * .04,
    },
    circle:{
      marginTop:5,
      width: width * .16,
      height: height * .084,
      alignItems:'center',
      backgroundColor: COLORS.yellow,
      borderRadius:50,
    },
    bag:{
        width: width * .06,
        height:height * .033,
        marginTop: height * .01,
    },
    txt:{
        fontFamily: "Poppins Regular 400",
        color: COLORS.black2,
        fontSize:9,
        lineHeight:16,
        marginTop:2,
    },
  })