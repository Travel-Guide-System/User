import React from 'react';
import {Text, View, StatusBar, StyleSheet, Dimensions} from "react-native";
import ActionSheet from '../components/ActionSheet';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const {width, height} = Dimensions.get("screen");

const data = {
    'title': 'Kingdom of Dreams',
    'description': 'Gurugram, Haryana'
};

const styles = StyleSheet.create({
    mainContainer: {
        zIndex: 1,
        width: width,
        height: height,
    },
    searchBar: {
        zIndex: 5,
        marginHorizontal: 10,
        marginTop: 10,
    },
    homeContainer: {
        zIndex: 1,
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mapStyle: {
        zIndex: 1,
        position: 'absolute',  
        top: -10,
        left: 0,
        right: 0,
        bottom: 0,
    },  
});

export default Screen = () => (
    <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.searchBar}>
        <GooglePlacesAutocomplete
            placeholder="Search"
            query={{
                key: 'a4db08b7-5729-4ba9-8c08-f2df493465a1',
                language: 'en'
            }}
            onPress={(data, details = null) => console.log(data)}
            onFail={(error) => console.error(error)}
            requestUrl={{
                url:'',
                useOnPlatform: 'web',
            }}
        />
        </View>
        <View style={styles.homeContainer}>
            <MapView  
                style={styles.mapStyle}  
                showsUserLocation={false}  
                zoomEnabled={true}  
                zoomControlEnabled={true}  
                initialRegion={{  
                    latitude: 28.579660,   
                    longitude: 76.321110,  
                    latitudeDelta: 0.0922,  
                    longitudeDelta: 0.0421,  
                }}
            >  
                <Marker  
                    coordinate={{ latitude: 28.579660, longitude: 76.321110 }}  
                    title={data.title}  
                    description={data.description}  
                />  
            </MapView> 
        </View>
        <ActionSheet 
            locationName = {data.title}
            locationDescription = {data.description}
            
        />
    </View>
)