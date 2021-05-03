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
        {/* <Text style={{color:'rgb(56, 130, 241)',fontSize:28,marginLeft:22}}>Data</Text> */}
    <View>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/fuel.png')}/> 
                <Text style={styles.cardtext2}>Fuel Level  </Text>
                <Title style={styles.cardvalue}>8</Title>
                <Paragraph  style={{marginTop:20}}> L</Paragraph>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
            
            </Card.Content>
                
        </Card>

        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/speedometer.png')}/> 
                <Text style={styles.cardtext3}>Speed   </Text>
                <Title style={styles.cardvalue}>50</Title>
                <Paragraph  style={{marginTop:20}}> km/hr</Paragraph>
            </Card.Content>
            
        </Card>


        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo2} source={require('../assets/thermometer.png')}/> 
                <Text style={styles.cardtext4}>Temperature   </Text>
                <Title style={styles.cardvalue}>90</Title>
                <Paragraph  style={{marginTop:20}}> C</Paragraph>
            </Card.Content>
            
        </Card>
        {/* <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/fuel.png')}/> 
                <Text style={styles.cardtext}>Fuel Level   </Text>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
                <Title style={styles.cardvalue}>50</Title>
                <Paragraph  style={{marginTop:20}}> in L</Paragraph>
            </Card.Content>
        </Card>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/speedometer.png')}/> 
                <Text style={styles.cardtext}>Speed </Text>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
                <Title style={styles.cardvalue}>50</Title>
                <Paragraph  style={{marginTop:20}}> in km/hr</Paragraph>
            </Card.Content>
        </Card>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/thermometer.png')}/> 
                <Text style={styles.cardtext}>Engine Temp   </Text>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
                <Title style={styles.cardvalue}>50</Title>
                <Paragraph  style={{marginTop:20}}> in C</Paragraph>
            </Card.Content>
        </Card> */}

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop:12,
    backgroundColor:'rgb(0,0,0)'
  },
  logo: {
    width: 70,
    height:70,
    marginRight:28
  },
  cardlogo:{
    width: 50,
    height:50,
    marginRight:8
  },
  cardlogo2:{
    width: 50,
    height:50,
    marginRight:5
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
  cardstyle:{
    marginLeft:12,
    marginRight:12,
    marginTop:12,
    flexDirection:'row',
  },
  cardtext:{
    color:'rgb(223,98,51)',
    fontSize:22,
    marginTop:12,
    width:'50%'
  },
  cardtext2:{
    color:'rgb(88,178,177)',
    fontSize:22,
    marginTop:12,
    width:'50%'
  },
  cardtext3:{
    // color:'rgb(56, 130, 241)',
    color:'rgb(85,177,94)',
    fontSize:22,
    marginTop:12,
    width:'50%'
  },
  cardtext4:{
    color:'#dc4b63',
    fontSize:22,
    marginTop:12,
    width:'50%'
  },
  cardvalue:{
    color:'white',
    marginTop:12
  }
});
