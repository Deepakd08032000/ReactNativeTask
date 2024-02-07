import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import styles from './styles'
import { COLORS } from '../constants'
import Home from '../screens/home';
import cartVIew from '../screens/cartView';
import DemoApp from '../screens/DemoApp';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator initialRouteName='DemoApp' screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='DemoApp' component={DemoApp} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen options={{
                headerShown:true,
                headerStyle:{
                    elevation:0,
                }

            }} name='cartVIew' component={cartVIew} />
        </Stack.Navigator>
    )
}

export default Root