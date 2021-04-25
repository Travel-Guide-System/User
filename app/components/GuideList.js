import React, { useState } from 'react';
import {Text, View, StatusBar, StyleSheet, Dimensions, ImageBackground} from "react-native";
import {FlatList} from 'react-native-gesture-handler'
import GuideCard from '../components/GuideCard';

const {width, height} = Dimensions.get("screen");

const GuideList = () => {
    const [guides, guideState] = useState([
        {name: 'Shobhit Tewari', image: require('../images/profile2.jpg'), phone: '9271927198', rating: 4.3, time: '5 min', active: true},
        {name: 'Shashank Sahu', image: require('../images/profile1.jpg'), phone: '9667580973', rating: 3.8, time: '10 min', active: false},
        {name: 'Gaurang Gupta', image: require('../images/profile3.jpg'), phone: '8802501945', rating: 3.3, time: '1 hr', active: true}
    ])

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../images/bg3.jpg')} style={styles.image}>
                <View style = {{marginBottom: 90}}>
                    {((guides.length === 0)
                    ? <Text style={{
                        alignSelf: 'center',
                        color: "#000",
                        padding: 20,
                        fontSize: 18,
                    }}>Currently No Guides in your Area</Text>
                    : <FlatList
                        style={{bottomMargin: 10}}
                        keyExtractor={(item) => item.name}
                        data = {guides}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <GuideCard
                                name = {item.name}
                                phone = {item.phone}
                                image = {item.image}
                                rating = {item.rating}
                                time = {item.time}
                                active = {item.active}
                            /> 
                        )}
                        showsVericalScrollIndicator={false} />
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 5,
        width: width,
        minHeight: height,
    }, image: {
        flex: 1,
        resizeMode: "cover",
    },
});

export default GuideList;