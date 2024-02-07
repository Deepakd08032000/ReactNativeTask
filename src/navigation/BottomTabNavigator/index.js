import React, { useState } from "react";
import {
  Image,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid, Platform
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, images } from '../../constants'


import { DiscoverStackNavigator, HomeStackNavigator, MuzziiStackNavigator, ProfileStackNavigator } from "../StackNavigator";
const Tab = createBottomTabNavigator();
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width
const tabOptions = {
  activeTintColor: "#5237EB",
}


const BottomTab = ({ navigation }) => {

  const [tooltipS, setTooltipS] = useState(false)

  const hasAndroidPermission = async () => {
    const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      console.log("hasPermission", hasPermission)
      navigation.navigate('Gallery')
      return true;
    }

    const status = await PermissionsAndroid.request(permission);

    // console.log("permission",status)
    if (status === "granted") {
      navigation.navigate('Gallery')
    }
    return status === 'granted';
  }


  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={tabOptions}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          // tabBarStyle: { backgroundColor: COLORS.white, borderRadius: 10, marginHorizontal: 0, paddingVertical: 10, marginBottom: 0, height: height*.085, paddingBottom: 10, elevation: 15 },
          tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray40;
            const textColor = focused ? COLORS.white : COLORS.gray40;
            switch (route.name) {
              case "Home":
                return (
                  <View style={{ alignItems: 'center', marginBottom: -height * .012 }}>
                    <Image
                      source={icons.home}
                      resizeMode='contain'
                      style={{
                        tintColor: tintColor,
                        width: width * .065,
                        height: height * .032
                        // marginTop: height * .015
                      }}
                    />
                     <View style={tintColor===COLORS.primary&& {backgroundColor:COLORS.primary,width:width*.17,height:height*.025,borderTopLeftRadius:100,borderTopRightRadius:100,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{ color: textColor, fontSize: 10.6, fontFamily: 'Poppins-Medium-500', marginBottom: -3 }} >Home</Text>
                    </View>
                  </View>
                )

              case "Discover":
                return (
                  <View style={{ alignItems: 'center', marginBottom: -height * .012 }}>
                    <Image
                      source={icons.discover}
                      resizeMode="contain"
                      style={{
                        tintColor: tintColor,
                        width: width * .065,
                        height: height * .032
                      }}
                    />
                    <View style={tintColor===COLORS.primary&& {backgroundColor:COLORS.primary,width:width*.17,height:height*.025,borderTopLeftRadius:100,borderTopRightRadius:100,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{ color: textColor, fontSize: 10.6, fontFamily: 'Poppins-Medium-500', marginBottom: -3 }} >Discover</Text>
                    </View>
                  </View>
                )

             

              case "Message":
                return (
                  <View style={{ alignItems: 'center', marginBottom: -height * .012 }}>
                    <Image
                      source={icons.muzi}
                      resizeMode="contain"
                      style={{
                        tintColor: tintColor,
                        width: width * .07,
                        height: height * .035
                      }}
                    />
                    <View style={tintColor===COLORS.primary&& {backgroundColor:COLORS.primary,width:width*.17,height:height*.025,borderTopLeftRadius:100,borderTopRightRadius:100,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{ color: textColor, fontSize: 10.6, fontFamily: 'Poppins-Medium-500', marginBottom: -3 }} >Muzii</Text>
                    </View>
                  </View>
                )
              case "Profile":
                return (
                  <View style={{ alignItems: 'center', marginBottom: -height * .012 }}>
                    <Image
                      source={icons.profile}
                      resizeMode='contain'
                      style={{
                        tintColor: tintColor,
                        width: width * .065,
                        height: height * .032
                      }}
                    />
                    <View style={tintColor===COLORS.primary&& {backgroundColor:COLORS.primary,width:width*.17,height:height*.025,borderTopLeftRadius:100,borderTopRightRadius:100,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{ color: textColor, fontSize:  10.6, fontFamily: 'Poppins-Medium-500', marginBottom: -5 }} >Profile</Text>
                    </View>
                  </View>
                )

            }
          }
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            title: ''
          }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverStackNavigator}
          options={{
            title: ''
          }}
        />
        {/* <Tab.Screen
          name="plus"
          component={HomeStackNavigator}
          options={({ navigation }) => ({
            title: '',
            tabBarButton: props => <TouchableOpacity {...props} onPress={() => setTooltipS(true)} />
          })}
        /> */}
        <Tab.Screen
          name="Message"
          component={MuzziiStackNavigator}
          options={{
            title: ''
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            title: ''
          }}
        />

      </Tab.Navigator>
      <Tooltip
        isVisible={tooltipS}
        content={<View style={{ width: width * .33, borderRadius: 20, paddingHorizontal: width * .05, }}>
          <TouchableOpacity
            onPress={() => { setTooltipS(false), hasAndroidPermission() }}
            style={{ flexDirection: 'row', alignItems: 'center', height: height * .05, }}
          >
            <Text style={{ color: COLORS.gray70, fontFamily: "Poppins-Medium-500", fontSize: width * .036 }}>Post</Text>
            <Image source={icons.photo} resizeMode='contain' style={{ width: width * .05, height: width * .05, position: 'absolute', right: 0 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', height: height * .05, marginTop: height * .004 }}
          >
            <Text style={{ color: COLORS.gray70, fontFamily: "Poppins-Medium-500", fontSize: width * .036 }}>Video</Text>
            <Image source={icons.video} resizeMode='contain' style={{ width: width * .05, height: width * .05, position: 'absolute', right: 0 }} />
          </TouchableOpacity>
        </View>}
        placement="bottom"
        onClose={() => setTooltipS(false)}
      />



    </>
  )
}

// const mapStateToProps = (state) => ({
//   loading: state.singleProduct.loading,
//   allCartData: state.singleProduct.allCartData,
//   quantity: state.singleProduct.quantity,
// })

// const mapDispatchToProps = {


// }

export default BottomTab
// export default connect(mapStateToProps, mapDispatchToProps)(BottomTab)



























// import { HomeStack, FavouriteStack, AddedCartStack, HistoryStack, NotificationStack } from "../StackNavigator";

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {

//   return (

//     <Tab.Navigator initialRouteName='HomeTab'
//       screenOptions={() => ({
//         tabBarActiveTintColor: COLORS.yellow,
//         tabBarInactiveTintColor: COLORS.black2,
//         tabBarStyle: styles.tabBarStyle,
//       })} >

//       <Tab.Screen name="HomeTab" component={HomeStack}
//         options={() => ({
//           headerShown: false,
//           tabBarIcon: () => <Image style={[styles.home,]} source={icons.home} />
//         })}
//       />
//       <Tab.Screen name="Favourites" component={FavouriteStack}
//         options={() => ({
//           headerShown: false,
//           tabBarIcon: () => <Image style={[styles.heart,]} source={icons.heart} />
//         })}
//       />
//       <Tab.Screen name="MyOrders" component={HistoryStack}
//         options={() => ({
//           headerShown: false,
//           tabBarLabel: '',
//           tabBarIcon: () => <View style={styles.circle} >
//             <Image style={[styles.bag,]} source={icons.bag} />
//             <Text style={styles.txt}>My Orders</Text>
//           </View>
//         })}
//       />
//       <Tab.Screen name="Notification" component={NotificationStack}
//         options={() => ({
//           headerShown: false,
//           tabBarIcon: () => <View>
//             <Image style={[styles.well,]} source={icons.notification} />
//             <View source={icons.redCircle} style={styles.notifications} >
//               <Text style={styles.text}>10</Text>
//             </View>
//           </View>

//         })}
//       />

//       <Tab.Screen name="Cart" component={AddedCartStack}
//         options={() => ({
//           headerShown: false,
//           tabBarIcon: () => <Image style={styles.buy} source={icons.buy} />

//         })}
//       />
//     </Tab.Navigator>
//   )
// }


// export default TabNavigator;

