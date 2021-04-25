import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';

const {width, height} = Dimensions.get("screen");

const cardH = 250, cardW = width - 40;
const PlaceCard = (props) => {

    return (
        <View style = {[styles.card, {
            shadowOffset: {
              width: 20,
              height: -10
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation: 3
          }]}>
            <View style={{height: cardH / 2, width: cardW, opacity: 0.9}}>
                <Image 
                    source={props.image} 
                    style={{height: null, width: null, resizeMode:'cover', flex:1, borderTopRightRadius: 10, 
                    borderTopLeftRadius: 10, borderWidth: 1, borderColor: "#fff"}}
                />
            </View>
            <View style={{flex: 1, padding: 10,}}>
                <Text style={styles.cardName}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <View style={{flexDirection: 'row', width:cardW-20, position:'absolute', bottom: 15}}>
                    <Rating readonly showRating={false} startingValue={props.rating} count={5} imageSize={20} style={{flex: 1}}/>
                    <Text style={{flex: 2, textAlign:'center'}}>{props.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        height: cardH,
        width: cardW, 
        marginHorizontal: 20,
        backgroundColor: "#fff",
        borderBottomColor: "#888",
        borderBottomWidth: 2,
        borderRadius: 10,
    }, 
    cardName: {
        color: "#333",
        fontSize: 20,
    },
    description: {
        fontSize: 12,
        marginBottom: 5,
        color: "#999"
    }
})

export default PlaceCard;