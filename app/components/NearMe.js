import React, { Component, useState } from "react";
import { render } from "react-dom";
import {View, Text, StyleSheet, Dimensions, ScrollView, ImageBackground} from "react-native";
import {FlatList} from 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import Card from './Card';

const {width, height} = Dimensions.get("screen")

const NearMe = (props) => {
    const [cards, dataState] = useState([
        {name: 'Restaurant', image: require('../images/restaurant2.jpg')},
        {name: 'Parks', image: require('../images/park.jpg')},
        {name: 'PVRs', image: require('../images/theater.jpg')},
        {name: 'Tourist Attractions', image: require('../images/touristAttractions2.jpg')}
    ]);

    return (
        <View style={{marginTop: 20, marginBottom: 10}}>
            <FlatList
                keyExtractor={(item) => item.name}
                horizontal
                data = {cards}
                renderItem={({item}) => (
                    <Card 
                        name = {item.name}
                        image = {item.image}
                    /> 
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default NearMe;