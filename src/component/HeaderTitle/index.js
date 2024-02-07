import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'



const HeaderText = ({ textStyle, children, statusBarColor }) => {
    return (
        <Text style={[styles.text, textStyle]}>
            {children}
        </Text>
    )
}
export default HeaderText

HeaderText.defaultProps = {
    children: "Header Title"
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .046,
        marginBottom: -4
    }
})