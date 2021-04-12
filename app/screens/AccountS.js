import React from 'react';
import {View, Text, StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    accContainer: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Screen = () => (
    <View style = {styles.accContainer}>
        <StatusBar barStyle="light-content" />
        <Text>Account</Text>
    </View>
)