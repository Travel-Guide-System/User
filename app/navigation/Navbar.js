import React from 'react';
import {Text, View, StatusBar, StyleSheet} from "react-native";
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {FontAwesome5} from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Ionicons";
import {HomeScreen, JourneyScreen, FaqScreen, AccountScreen} from '../screens';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                shifting: 'true',
                tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#444"/>
            }
        },
        Journey: {
            screen: JourneyScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={24} name='map'/>  
                    </View>),  
                activeColor: '#293849',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' }
            }
        },
        Faq: {
            screen: FaqScreen,
            navigationOptions: {
                tabBarLabel: 'Faqs', 
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name='help-circle'/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' }, 
            }
        },
        Account: {
            screen: AccountScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user-circle" size={24}  color="#444"/>
            }
        }
    },
    {
        initialRouteName: "Home",  
        activeColor: '#49AB12',  
        inactiveColor: '#928371', 
        barStyle: { backgroundColor: '#3BAD87' }
    }
)

export default createAppContainer(TabNavigator);