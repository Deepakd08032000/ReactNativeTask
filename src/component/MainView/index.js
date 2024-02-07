import React from 'react'
import { View,  StyleSheet, StatusBar,SafeAreaView } from 'react-native'
import { COLORS } from '../../constants'



const MainView = ({ mainStyle, children, statusBarColor }) => {
    return (
        <SafeAreaView style={[styles.cont, mainStyle]}>
            <StatusBar backgroundColor={statusBarColor} barStyle={"light-content"} />
            {children}
        </SafeAreaView>
    )
}
export default MainView

MainView.defaultProps = {
    statusBarColor: COLORS.primary
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})