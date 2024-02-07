import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
// import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { DrawerItemList, } from "@react-navigation/drawer";
import { COLORS, icons } from '../../constants'
import styles from "./styles";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../BottomTabNavigator";
import ContactUs from '../../screens/Contact';
import AboutUs from '../../screens/About';
import Help from '../../screens/Help';
import SingleProduct from "../../screens/SingleProduct";
import MyAccount from "../../screens/MyAccount";
const { width, height } = Dimensions.get('window')


const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const { navigation } = props

  return (
    <View>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
          <Image style={styles.menu} source={icons.menu} resizeMode="cover" />
        </TouchableOpacity>
        <Text style={styles.headTitle}>More Options</Text>
      </View>

      <DrawerItemList {...props} />

    </View>

  )
}


const DrawerNavigator = () => {

  return (
    <Drawer.Navigator 
      initialRouteName="BottomTab"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: styles.labels,
        drawerItemStyle: styles.items,
        drawerStyle: styles.drawerContainer,
      }}
    >
      
        <Drawer.Screen name='Home' component={TabNavigator}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image style={[styles.icons, { width: width * .055, height: height * .035 }]} source={icons.home} />
            </View>
          ),
        })}
      />  
        <Drawer.Screen name='Profile' component={MyAccount}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image style={[styles.icons, { width: width * .055, height: height * .035 }]} source={icons.Profile} />
            </View>
          ),
        })}
      />  
  <Drawer.Screen name='Product' component={SingleProduct}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image  style={styles.icons} source={icons.Category} />
            </View>
          ),
        })}
      />  
        <Drawer.Screen name='Services' component={TabNavigator}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image  style={styles.icons} source={icons.Category} />
            </View>
          ),
        })}
      />  
        <Drawer.Screen name='About Us' component={AboutUs}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image  style={styles.icons} source={icons.Info} />
            </View>
          ),
        })}
      />  
        <Drawer.Screen name='Help FAQ' component={Help}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image  style={styles.icons} source={icons.Info} />
            </View>
          ),
        })}
      />  
        <Drawer.Screen name='Contact Us' component={ContactUs}
        options={() => ({
          headerShown: false,
          drawerStyle: styles.tabs,
          drawerIcon: () => (
            <View style={styles.iconsContainer}>
              <Image style={styles.icons} source={icons.Info} />
            </View>
          ),
        })}
      />  
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

