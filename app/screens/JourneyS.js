import React from 'react';
import {Text, View, StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    journeyContainer: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Screen = () => (
    <View style = {styles.journeyContainer}>
        <StatusBar barStyle="light-content" />
        <Text>Plan My Journey</Text>
    </View>
)