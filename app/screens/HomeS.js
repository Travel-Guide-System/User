import React from 'react';
import {Text, View, StatusBar, StyleSheet, Dimensions} from "react-native";
import ActionSheet from '../components/ActionSheet';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  

const {width, height} = Dimensions.get("screen")

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mapStyle: {  
      position: 'absolute',  
      top: 0,  
      left: 0,  
      right: 0,  
      bottom: height * (1 / 2),  
    },  
  }); 

export default Screen = () => (
    <View style={{width, height}}>
        <View style={styles.homeContainer}>
            <MapView  
                style={styles.mapStyle}  
                showsUserLocation={false}  
                zoomEnabled={true}  
                zoomControlEnabled={true}  
                initialRegion={{  
                latitude: 28.579660,   
                longitude: 77.321110,  
                latitudeDelta: 0.0922,  
                longitudeDelta: 0.0421,  
                }}>  

                <Marker  
                coordinate={{ latitude: 28.579660, longitude: 77.321110 }}  
                title={"JavaTpoint"}  
                description={"Java Training Institute"}  
                />  
            </MapView> 
        </View>
        <ActionSheet />
    </View>
)