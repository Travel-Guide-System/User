import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';  
import Navbar from './app/navigation/Navbar';
import Splash_Screen from './app/screens/SplashScreen';

export default class App extends Component {
  constructor(){  
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
  
 componentDidMount(){  
   var that = this;  
   setTimeout(function(){  
     that.Hide_Splash_Screen();  
   }, 5000);  
  }  

  render() {
    return(
      <View style={{height: '100%', padding: 0, margin: 0}}>
        {
          (this.state.isVisible === true) ? <Splash_Screen /> : <Navbar />
        } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
