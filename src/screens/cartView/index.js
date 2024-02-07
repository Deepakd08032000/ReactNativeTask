import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, Button, FlatList, ActivityIndicator } from 'react-native'
import { COLORS, FONTS, SIZES, data, icons, images } from '../../constants'
import styles from './styles'
import { useAddNewPostMutation, useDeletePostMutation, useGetDataByIdQuery, useGetDataQuery } from '../../services/api'
const cartVIew = ({ route, navigation }) => {
    console.log("route", route?.params?.index)
    const { data, isLoading } = useGetDataByIdQuery(route?.params?.index + 1)
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            {isLoading ?
                <ActivityIndicator />
                :
                <>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ justifyContent: 'center', fontSize: 22, color: COLORS.black, fontFamily: FONTS.semiBold }}>
                                {data?.category}
                            </Text>
                            <Text style={{ justifyContent: 'center', fontSize: 12, color: COLORS.blue, fontFamily: FONTS.medium }}>
                                {data?.brand}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ justifyContent: 'center', fontSize: 18, color: COLORS.black, fontFamily: FONTS.medium }}>
                                {data?.title}
                            </Text>
                            <Text style={{ justifyContent: 'center', fontSize: 14, color: COLORS.black, fontFamily: FONTS.medium }}>
                                Rating: {data?.rating}
                            </Text>
                        </View>
                        <Text style={{ justifyContent: 'center', fontSize: 14, color: COLORS.black, fontFamily: FONTS.medium }}>
                            Stock to buy: {data?.stock}
                        </Text>
                        <Text style={{ justifyContent: 'center', fontFamily: FONTS.regular, fontSize: 13, color: 'purple' }} >
                            {data?.description}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ justifyContent: 'center', fontSize: 15, color: COLORS.primary, fontFamily: FONTS.semiBold, marginVertical: 12, }}>
                                Price: {data?.price}
                            </Text>
                            <Text style={{ justifyContent: 'center', fontSize: 13, color: 'red', fontFamily: FONTS.medium }}>
                                Discount: {data?.discountPercentage}%
                            </Text>
                        </View>
                        <Image source={{ uri: data?.thumbnail }} resizeMode='contain' style={styles.imgStyle} />
                    </View>
                    <Text style={{ justifyContent: 'center', fontFamily: FONTS.regular, fontSize: 13, color: 'purple', textAlign: 'center' }} >
                        {data?.description}
                    </Text>
                    <FlatList
                        data={data?.images}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginHorizontal: 15, marginVertical: 12 }}>
                                <Image source={{ uri: item }} resizeMode='contain' style={styles.imgStyleslide} />
                            </View>
                        )}>
                    </FlatList>
                </>
            }
        </View >
    )
}
export default cartVIew