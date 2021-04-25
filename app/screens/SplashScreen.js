import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert } from 'react-native';  


 export default SplashScreen = () => {
   return (  
        <View style={styles.SplashScreen_RootView}>  
            <View style={styles.SplashScreen_ChildView}>  
                <Image source={require('../images/logo2.jpg')}  
            style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
            </View>  
        </View>  
   )
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 0,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#fff',  
        flex:1,  
    },  
}); 