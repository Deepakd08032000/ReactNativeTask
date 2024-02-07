import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants'


const Button1 = ({ mainStyle, children, textStyle, disabled, onPress, loadingIndicator, rightIcon }) => {
    return (
        <TouchableOpacity style={[styles.touchbtn, mainStyle]}
            activeOpacity={0.5}
            onPress={onPress}
            disabled={disabled}
        >
            {/* {leftIcon &&
                <Image source={leftIcon} resizeMode='contain' style={styles.downloadIcon} />
            } */}
            {loadingIndicator &&
                <ActivityIndicator size={23} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />
            }
            <Text style={[styles.btnText, textStyle]}>{children}</Text>
            {rightIcon &&
                <Image source={rightIcon} resizeMode='contain' style={styles.rightIcon} />
            }
        </TouchableOpacity>
    )
}

export default Button1

Button1.defaultProps = {
    children: "Button"
}

const styles = StyleSheet.create({
    touchbtn: {
        // width: SIZES.width * .9,
        height: SIZES.height * .073,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        elevation: 5,
        shadowColor: COLORS.gray40,
        flexDirection: 'row',

    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .04,
        marginBottom: -4
    },
    rightIcon: {
        width: SIZES.width * .048,
        height: SIZES.width * .048,
        marginLeft:SIZES.width*.03
        // position: 'absolute',
        // right: SIZES.width * .04
    }
})