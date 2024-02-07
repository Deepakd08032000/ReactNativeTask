import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import { COLORS, SIZES, icons, images } from '../../constants'
import MainView from '../../component/MainView'
import Button1 from '../../component/Button'
import Input1 from '../../component/Input1'
import styles from './styles'

const Home = ({ navigation }) => {
    const [postData, setPostData] = useState({
        fullName: null,
        password: null,
    });
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value,
        });
    };
    console.log("postdata", postData)
    return (
        <MainView>
            <ScrollView style={styles.innerContainer} keyboardShouldPersistTaps={"true"} showsVerticalScrollIndicator={false}>
                <View style={styles.logoBox}>
                    <Image source={icons.logo} resizeMode='contain' style={styles.logoStyle} />
                </View>
                <View style={styles.headingBox}>
                    <Text style={styles.headingTxt} numberOfLines={1}>SIGN IN</Text>
                    <Text style={styles.headingsubTxt} numberOfLines={2}>Looks Let’s create a new account for you.</Text>
                </View>
                <View>
                    <Input1 placeholder={"Name"} placeholderTextColor={COLORS.secondary} mainStyle={styles.mainStyle} value={postData.fullName}
                        onChangeText={text => handleChange('fullName', text)} label={"Name"} />
                    <Input1 placeholder={"Password"} placeholderTextColor={COLORS.secondary} mainStyle={styles.mainStyle}
                        value={postData.password} onChangeText={text => handleChange('password', text)} label={"Password"} />
                </View>
                <Text style={styles.suggest}>
                    Suggestion- For Login Enter Password 12345
                </Text>
                <Button1 children={"LOGIN"} textStyle={styles.textStyle} mainStyle={styles.mainStylebtn} onPress={() => postData.password == "12345" && navigation.navigate("Home")} />
                {postData.password == "12345" ?
                    <Text style={styles.suggestPass}>
                        Success: Correct Password Press Login
                    </Text> :
                    <Text style={styles.suggestPass}>
                        Enter Valid Password
                    </Text>
                }
            </ScrollView>
        </MainView>
    )
}

export default Home