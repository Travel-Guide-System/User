import React, { useState } from 'react';
import {Text, View, StatusBar, StyleSheet} from "react-native";
import GuideList from '../components/GuideList';

const Screen = () => {
    return(
        <View style = {styles.journeyContainer}>
            <StatusBar barStyle="light-content" />
            <Text style={{fontSize: 20, padding: 15}}>Book a Guide</Text>
            <GuideList />
        </View>
    );
};

const styles = StyleSheet.create({
    journeyContainer: {
        backgroundColor: "#f0f0f0",
        shadowOffset: {
            width: 20,
            height: -20
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3
    }, container: {
        zIndex: 5,
        width: '100%',
    },
});

export default Screen;