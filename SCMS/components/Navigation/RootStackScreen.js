import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
import Slide from '../Slide/Slide';
import Main from '../../Screens/Main'
import checkEngine from '../../Screens/checkEngine'
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Slide" component={Slide}/>
        <RootStack.Screen name="Main" component={Main}/>
        <RootStack.Screen name="checkEngine" component={checkEngine}/>
    </RootStack.Navigator>
);

export default RootStackScreen;