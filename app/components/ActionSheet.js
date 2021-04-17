import React, { Component, useState } from "react";
import { render } from "react-dom";
import {View, Text, StyleSheet, Dimensions, ScrollView, ImageBackground, TextComponent} from "react-native";
import {FlatList} from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from 'reanimated-bottom-sheet';
import PlaceCard from './PlacesCard';
import NearMe from './NearMe';

const {width, height} = Dimensions.get("screen")

const ActionSheet = (props) => {
    const [cards, dataState] = useState([
        {name: 'Amrik Sukhdev',
        image: require('../images/recent1.jpg'),
        description: 'Phasellus tortor augue, cursus at nibh id, lacinia feugiat orci.',
        rating: 4, time: '5 min'},
        {name: 'Schremser', image: require('../images/recent2.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', rating: 4, time: '2 hrs'},
        {name: 'Kricket', image: require('../images/recent3.jpg'), description: 'Etiam vitae diam quis nisl fringilla luctus non nec nulla.', rating: 3, time: '8 min'},
        {name: 'Local', image: require('../images/recent4.jpg'), description: 'Duis varius ipsum vel enim egestas gravida.  In efficitur euismod hendrerit.', rating: 4.5, time: '1 hr 30 min'}
    ]);

    const renderHeader = () => (
        <View style={{width: width, height: 50, backgroundColor:'#000'}}>
            <View style={styles.grabber} />
        </View>
    )

    const GetHeader = () => {
        return (
            <View style={{position:'relative', height: 320}}>
                <ImageBackground source={require('../images/bg2.jpg')} style={styles.image}>
                <Text style={[styles.heading, styles.textView]}>{props.locationName}</Text>
                <Text style={[styles.description, styles.textView]}>{props.locationDescription}</Text>
                <NearMe />
                <View style = {styles.recent}>
                    <Text style={{width: 130, textAlign: 'center', alignSelf: 'center', fontSize: 16, borderBottomColor: "#045ef2", borderBottomWidth: 2}}>Recent Places</Text>
                </View>
                </ImageBackground>
            </View>
        );
    }

    const renderContent = () => (
        <View style={styles.container}>
            <ImageBackground source={require('../images/bg2.jpg')} style={styles.image}>
                <View style = {{marginBottom: 90}}>
                    {((cards.length === 0)? <GetHeader />
                    :<FlatList
                        style={{bottomMargin: 10}}
                        ListHeaderComponent={GetHeader}
                        keyExtractor={(item) => item.name}
                        data = {cards}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <PlaceCard 
                                name = {item.name}
                                image = {item.image}
                                description = {item.description}
                                rating = {item.rating}
                                time = {item.time}
                            /> 
                        )}
                        showsVericalScrollIndicator={false}
                        stickyHeaderIndices={[0]}
                    />)
                    }
                </View>
            </ImageBackground>
        </View>
    );

    const fall = new Animated.Value();
    const headerPos = new Animated.Value(1);

    return (
        <>
            <BottomSheet
                snapPoints={[150, height]}
                initialSnap = {1}
                renderHeader={renderHeader}
                renderContent={renderContent}
                headerPosition={headerPos}
                callbackNode={fall}
                enabledContentGestureInteraction={true}
                overdragResistanceFactor={10}
                callbackThreshold={0.001}
            />
        </>
    );
}

const styles = StyleSheet.create({
    grabber: {
        width: 100,
        borderTopWidth: 5,
        borderTopColor: "#aaa",
        borderRadius: 10,
        position: 'absolute',
        marginTop: 25,
        marginHorizontal: width / 2 - 50,
    }, container: {
        zIndex: 5,
        width: width,
        minHeight: height-50,
    },
    textView: {
        color: "#eee",
        paddingHorizontal: 20,
    },
    heading: {
        paddingTop: 5,
        fontSize: 30,

    },
    description: {

    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    recent: {
        paddingLeft: 20,
        paddingVertical: 10,
        width: width,
        backgroundColor: "#fff",
        marginBottom: 10,
        alignContent: 'center'
    }
});

export default ActionSheet;