import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants'



const HeaderBack = ({ touchStyle, onPress, icon ,iconStyles}) => {
    return (
        <TouchableOpacity style={[styles.btn, touchStyle]}
            onPress={onPress}
        >
            <Image source={icon} resizeMode='contain' style={[styles.backIcon,iconStyles]} />
        </TouchableOpacity>
    )
}
export default HeaderBack

HeaderBack.defaultProps = {
    icon: icons.back
}

const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .12,
        height: SIZES.width * .12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 6
    },
    backIcon: {
        width: SIZES.width * .04,
        height: SIZES.width * .042
    }
})