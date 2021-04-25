import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image, Linking} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';
import {FontAwesome5} from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Ionicons";

const {width, height} = Dimensions.get("screen");

const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', padding: 12,}}>
                <Image style={{height: 175, width: 150, }} source={props.image} />
                <View style={{flexDirection: 'column', width: '70%', paddingHorizontal: 15,}}>
                    <Text style={{color: "#000", fontSize: 20,}}>{props.name}</Text>

                    <View style={{flexDirection: 'row', alignContent:'center', marginTop: 5}}>
                        <FontAwesome5 name="phone-alt" size={18} color="#444"/>
                        <Text onPress={() => {Linking.openURL(`tel:${props.phone}`);}} style={{fontSize: 15, marginHorizontal: 15, color: "#13E"}}>{props.phone}</Text>
                    </View>
                    {
                        (props.active)
                        ? <View style={[styles.activeStyle, {backgroundColor: "#1a5", width: 70}]}>
                            <Text style={{fontSize: 14, color: "#fff"}}>Active</Text>
                        </View>
                        : <View style={[styles.activeStyle, {backgroundColor: "#a11", width: 100}]}>
                            <Text style={{fontSize: 14, color: "#fff"}}> Not Active</Text>
                        </View>
                    }

                    <View style={{flexDirection: 'row', width: '100%', bottom: 15, position: 'absolute'}}>
                        <Rating readonly showRating={false}  startingValue={props.rating} count={5} imageSize={20} style={{flex: 1, backgroundColor: "#fff"}} />
                        <Text style={{flex: 1, textAlign:'center'}}>{props.time}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: 190,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: "#fff", 
        borderRadius: 10,
        shadowOffset: {
            width: 20,
            height: -10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3  
    }, bottomBorder: {
        width: width - 50,
        borderBottomColor: "#555",
        borderBottomWidth: 2,
        alignSelf: 'center'
    }, activeStyle: {
        borderRadius: 15, 
        marginVertical: 10, 
        paddingHorizontal: 10,
        paddingVertical: 5, 
    }
})

export default Card;