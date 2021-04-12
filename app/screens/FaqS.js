import React from 'react';
import {Text, View, StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
   faqContainer: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Screen = () => (
    <View style = {styles.faqContainer}>
        <StatusBar barStyle="light-content" />
        <Text>This is Faqs</Text>
    </View>
)