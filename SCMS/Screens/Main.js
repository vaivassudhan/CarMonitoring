import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image,SafeAreaView, TextInput } from 'react-native';

import { Badge } from 'react-native-paper';
import { Button } from 'react-native-paper';
import {Text,useTheme} from 'react-native-paper'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { color } from 'react-native-reanimated';
export default function Demo(props) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headview}>
            <Image style={styles.logo} source={require('../assets/bmw-logo.png')}/>
            <Text style={styles.head}>BMW 320D</Text>
        </View>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
        }}
        />
    <View styles={styles.cardview}>
        <Card style={styles.cardstyle}>
            <Card.Content>
            <Image style={styles.logo} source={require('../assets/fuel.png')}/>
            <Title>Fuel Level</Title>
            <Paragraph>32 in L</Paragraph>
            </Card.Content>
        </Card>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop:'12px',
    backgroundColor:'rgb(0,0,0)'
  },
  logo: {
    width: 70,
    height:70,
    marginRight:28
  },
  head: {
      marginTop:8,
      fontSize:32,
    //   color:'rgb(223,98,51)'
  },
  headview: {
    marginTop:32,
    marginLeft:28,
    marginRight:32,
    marginBottom:14,
    flexDirection:'row'
  },
  cardview:{
    margin:24,
    flexDirection:'row'
  },
  cardstyle:{
    margin:24,
    flexDirection:'row',
  }
});
