
import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, Button, FlatList, ActivityIndicator } from 'react-native'
import { COLORS, FONTS, SIZES, data, icons, images } from '../../constants'
import styles from './styles'
import { useAddNewPostMutation, useDeletePostMutation, useGetDataByIdQuery, useGetDataQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import Button1 from '../../component/Button'
const Home = ({ navigation }) => {
    const [isFetching, setisFetching] = useState(false)
    const { data, isLoading, isSuccess } = useGetDataQuery();

    // console.log(data);
    const handleRefresh = () => {
        isLoading == true,
            data
    }
    const [select, setSelect] = useState(-1)
    return (
        <View>
            {isLoading ?
                <ActivityIndicator size={'large'} />
                :
                <>
                    <View>
                        <Text style={{ justifyContent: 'center', fontSize: 15, color: COLORS.black, alignSelf: 'center', fontFamily: FONTS.medium, marginTop: 12, }}>Number Of Products:{data?.products.length}</Text>
                    </View>
                    <FlatList data={data?.products}
                        refreshing={isFetching}
                        showsVerticalScrollIndicator={false}
                        onRefresh={handleRefresh}
                        renderItem={({ item, index }) => (
                            <View style={[styles.box, { backgroundColor: select == index ? COLORS.lightGray31 : null }]} >
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ justifyContent: 'center', fontSize: 22, color: COLORS.black, fontFamily: FONTS.semiBold }}>
                                            {item?.category}
                                        </Text>
                                        <Text style={{ justifyContent: 'center', fontSize: 12, color: COLORS.blue, fontFamily: FONTS.medium }}>
                                            {item?.brand}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ justifyContent: 'center', fontSize: 18, color: COLORS.black, fontFamily: FONTS.medium }}>
                                            {item?.title}
                                        </Text>
                                        <Text style={{ justifyContent: 'center', fontSize: 14, color: COLORS.black, fontFamily: FONTS.medium }}>
                                            Rating: {item?.rating}
                                        </Text>
                                    </View>
                                    <Text style={{ justifyContent: 'center', fontSize: 14, color: COLORS.black, fontFamily: FONTS.medium }}>
                                        Stock to buy: {item?.stock}
                                    </Text>
                                    <Text style={{ justifyContent: 'center', fontFamily: FONTS.regular, fontSize: 13, color: 'purple' }} numberOfLines={2}>
                                        {item?.description}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ justifyContent: 'center', fontSize: 15, color: COLORS.primary, fontFamily: FONTS.semiBold, marginVertical: 12, }}>
                                            Price: {item?.price}
                                        </Text>
                                        <Text style={{ justifyContent: 'center', fontSize: 13, color: 'red', fontFamily: FONTS.medium }}>
                                            Discount: {item?.discountPercentage}%
                                        </Text>
                                    </View>
                                    <Image source={{ uri: item?.thumbnail }} resizeMode='contain' style={styles.imgStyle} />
                                </View>
                                <FlatList
                                    data={item?.images}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => (
                                        <View style={{ marginHorizontal: 15, marginVertical: 12 }}>
                                            <Image source={{ uri: item }} resizeMode='contain' style={styles.imgStyleslide} />
                                        </View>
                                    )}>
                                </FlatList>
                                <View style={styles.btnBox}>
                                    <Button1 mainStyle={{ width: SIZES.width * 0.35, elevation: 0, height: SIZES.height * 0.06 }} children={"BUY NOW"}  onPress={() => { setSelect(index), navigation.navigate("cartVIew", { index }) }} />
                                    <Button1 mainStyle={{ width: SIZES.width * 0.35, elevation: 0, height: SIZES.height * 0.06 }} children={"MORE DETAIL"} onPress={() => { setSelect(index), navigation.navigate("cartVIew", { index }) }}  />
                                </View>
                            </View>
                        )
                        }>
                    </FlatList >
                </>
            }
        </View >
    )
}
export default Home