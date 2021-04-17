import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const cardH = 150, cardW = 200;
const Card = (props) => {
    return (
        <View style = {styles.card}>
            <View style={{position: 'absolute', height: cardH, width: cardW, opacity: 0.9}}>
                <Image 
                    source={props.image} 
                    style={{height: null, width: null, resizeMode:'cover', flex:1, borderRadius: 10,
                    borderWidth: 1, borderColor: "#fff"}}
                />
            </View>
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center',}}>
                <Text style={styles.cardName}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        height: cardH,
        width: cardW, 
        marginHorizontal: 10,
    }, 
    cardName: {
        width: 150,
        borderColor: "#fff",
        borderWidth: 3,
        color: "#fff",
        fontSize: 20,
        textAlign: 'center',
    }
})

export default Card;