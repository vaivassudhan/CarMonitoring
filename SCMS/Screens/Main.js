import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image,SafeAreaView, TextInput,ScrollView , } from 'react-native';

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
            <Image style={styles.logo} source={require('../assets/Hyundai-Logo-1990.png')}/>
            <Text style={styles.head}>Hyundai Verna</Text>
        </View>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
        }}
        />
        {/* <Text style={{color:'rgb(56, 130, 241)',fontSize:28,marginLeft:22}}>Data</Text> */}
      <ScrollView>
    <View>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/fuel.png')}/> 
                <Text style={styles.cardtext2}>Fuel Level  </Text>
                <Title style={styles.cardvalue}>__</Title>
                <Paragraph  style={{marginTop:20}}> %</Paragraph>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
            
            </Card.Content>
                
        </Card>

        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/speedometer.png')}/> 
                <Text style={styles.cardtext3}>Speed   </Text>
                <Title style={styles.cardvalue}>__</Title>
                <Paragraph  style={{marginTop:20}}> km/hr</Paragraph>
            </Card.Content>
            
        </Card>


        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo2} source={require('../assets/thermometer.png')}/> 
                <Text style={styles.cardtext}>Temperature   </Text>
                <Title style={styles.cardvalue}>__</Title>
                <Paragraph  style={{marginTop:20}}> C</Paragraph>
            </Card.Content>
            
        </Card>
        <Card style={styles.cardstyle}>
            <Card.Content>
              <View style={{flex:1,flexDirection:'row'}}>
                <Image style={styles.cardlogo2} source={require('../assets/location.png')}/> 
                <Text style={styles.cardtext5}>Location   </Text>
              </View>
              <View style={{flex:1}}>
                <Image style={styles.locationimg} source={require('../assets/map.png')}></Image>
              </View>
            </Card.Content>
            <Card.Content style={{flexDirection:'row'}}>
            </Card.Content>
        </Card>


        {/* Check engine  */}
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/check.png')}/> 
                <Text style={[styles.cardtext,{marginLeft:10,marginTop:4}]}>Check Engine </Text>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
                <Title style={styles.cardvalue}>List if any problems here</Title>
                
            </Card.Content>
        </Card>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop:20
        }}
        />
        <Text style={[styles.head,{marginLeft:12,marginTop:45}]}>Addition Data</Text>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/engine.png')}/> 
                <Text style={styles.cardtext}>Engine Data</Text>
            </Card.Content>
            {/* RPM */}
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
              <Text style={styles.engineData}>RPM</Text>
                <Title style={styles.enginevalue}>3000 </Title>
                <Paragraph  style={{marginTop:20}}></Paragraph>
            </Card.Content>
            {/* RPM */}
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
              <Text style={styles.engineData}>Torque</Text>
                <Title style={styles.enginevalue}>___ </Title>
                <Paragraph  style={{marginTop:20}}></Paragraph>
            </Card.Content>
        </Card>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop:20
        }}
        />
        <Text style={[styles.head,{marginLeft:12,marginTop:45}]}>Built by Senthil sivaraman</Text>
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
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop:12,
    backgroundColor:'rgb(15,15,15)'
  },
  logo: {
    width: '30%',
    height:'100%',
   
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
      marginTop:0,
      fontSize:26,
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
    width:'60%'
  },
  cardtext2:{
    color:'rgb(88,178,177)',
    fontSize:22,
    marginTop:12,
    width:'60%'
  },
  cardtext3:{
    // color:'rgb(56, 130, 241)',
    color:'rgb(85,177,94)',
    fontSize:22,
    marginTop:12,
    width:'60%'
  },
  cardtext4:{
    color:'#ff8f00',
    fontSize:22,
    marginTop:12,
    width:'60%'
  },
  cardtext5:{
    color:'#c62828',
    fontSize:22,
    marginTop:12,
    width:'50%'
  },
  cardvalue:{
    color:'white',
    marginTop:12
  },
  locationimg:{
    width:330,
    height:200,
    alignSelf:'center'
  },
  engineData:{
    color:'rgb(223,98,51)',
    fontSize:22,
    marginTop:12,
    width:'35%',
    marginLeft:34
  },
  enginevalue:{
    color:'white',
    marginTop:12,
    marginLeft:0
  }
});
