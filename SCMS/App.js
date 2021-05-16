import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Screens/Main'
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import RootStackScreen from './components/Navigation/RootStackScreen';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
const theme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(223,98,51)',
    accent: 'rgb(220,75,99)',
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
       <NavigationContainer theme={theme}>
        <RootStackScreen/>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
