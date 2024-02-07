import React from 'react'
import { View, Text, Dimensions, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants'



const Input1 = ({ mainStyle, label, ref, placeholder, inputStyle, onFocus, secondStyles, multiline, textAlignVertical, numberOfLines, disabled, onPressIn, autoFocus, onPress, iconStyle, onChange, value, editable, onChangeText, defaultValue, placeholderTextColor, keyboardType, maxLength, error, errorMsg, onBlur, icon }) => {
    return (
        <View style={mainStyle}>
            <View style={[styles.mainInput, secondStyles]}>
                {label &&
                    <Text style={styles.lableText}>{label}</Text>
                }
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white }}
                    onPress={onPress}
                    disabled={disabled}
                    activeOpacity={0.8}
                >
                    <TextInput
                        placeholder={placeholder}
                        style={[styles.input, inputStyle]}
                        defaultValue={defaultValue}
                        value={value}
                        onChangeText={onChangeText}
                        placeholderTextColor={placeholderTextColor}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                        onBlur={onBlur}
                        editable={editable}
                        onChange={onChange}
                        autoFocus={autoFocus}
                        onPressIn={onPressIn}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        onFocus={onFocus}
                        textAlignVertical={textAlignVertical}
                        focusable
                    />
                    {icon &&
                        <Image source={icon} resizeMode='contain' style={[styles.iconstyle, iconStyle]} />
                    }
                </TouchableOpacity>
            </View>
            {error &&
                <Text style={styles.errorText}>{errorMsg}</Text>
            }
        </View>
    )
}
export default Input1

Input1.defaultProps = {
    disabled: true,
    placeholder: COLORS.gray40,
    placeholderTextColor: COLORS.gray40
}

const styles = StyleSheet.create({
    mainInput: {
        // borderBottomWidth: 1,
        // borderColor: COLORS.gray20,
    },
    input: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .036,
        paddingBottom: SIZES.height * .011,
        paddingLeft: SIZES.width * .03,
        width: '100%',
        color: COLORS.gray80,
        borderWidth: 1,
        borderColor: COLORS.gray20,
        borderRadius: 5,
        overflow: 'hidden',
        // backgroundColor:COLORS.gray20
    },
    lableText: {
        color: COLORS.black,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .037,
        // marginBottom: -4,

    },
    errorText: {
        color: "red",
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .03,
        marginTop: SIZES.height * .007,
        marginLeft: SIZES.width * .01,
        marginBottom: -3
    },
    iconstyle: {
        width: SIZES.width * .062,
        height: SIZES.width * .062
    }
})