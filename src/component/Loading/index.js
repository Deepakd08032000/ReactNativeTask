import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLORS, SIZES, icons } from '../../constants'



const Loading = ({}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Image source={icons.loadimage} resizeMode='contain' style={styles.loadimage} />
        </View>
    )
}
export default Loading

Loading.defaultProps = {
}

const styles = StyleSheet.create({
    loadimage:{
        width:SIZES.width*.28,
        height:SIZES.width*.28
    }
})