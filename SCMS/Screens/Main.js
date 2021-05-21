import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image,SafeAreaView,ActivityIndicator, TextInput,ScrollView , } from 'react-native';

import {db} from '../config/fireconfig';
import {Text,useTheme} from 'react-native-paper'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import MapView  , { Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';
export default function Demo(props) {
  const lightBlue="rgb(88,178,177)"
  const green="rgb(85,177,94)"
  const orange="rgb(223,98,51)"
  const red="#c62828"
  const { colors } = useTheme();

  const [cardata,setcardata]=useState('')
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    db.ref('/scms-33eae-default-rtdb/Car/').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let cdata = {...data};
      cdata=cdata["-M_ElJUj2wV6MB9xW8u8"]
      setcardata(cdata)
      console.log("cardata",cardata)
    });
    
  },[]);
  return (
    
    <SafeAreaView style={styles.container}>
      <ActivityIndicator />
        <View style={styles.headview}>
            <Image style={styles.logo} source={require('../assets/Hyundai-Logo-1990.png')}/>
            <Text style={styles.head}>{cardata["Name"]}</Text>
        </View>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
        }}
        />
      <ScrollView>
    <View>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/fuel.png')}/> 
                <Text style={[styles.cardtext,{color:lightBlue}]}>Fuel Level  </Text>
                <Title style={styles.cardvalue}>{cardata["Fuel"]}</Title>
                <Paragraph  style={{marginTop:20}}> %</Paragraph>
                
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
            {/* <Progress.Bar progress={cardata["Fuel"]/100} width={250} color={lightBlue} height={5} marginLeft={'10%'} marginTop={'7%'} /> */}
            </Card.Content>
                
        </Card>

        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/speedometer.png')}/> 
                <Text style={[styles.cardtext,{color:green}]}>Speed   </Text>
                <Title style={styles.cardvalue}>{cardata["Speed"]}</Title>
                <Paragraph  style={{marginTop:20}}> km/hr</Paragraph>
            </Card.Content>
            
        </Card>


       
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo3} source={require('../assets/fuelrange.png')}/> 
                <Text style={[styles.cardtext,{color:orange}]}>Fuel Range   </Text>
                <Title style={styles.cardvalue}>{cardata["Range"]}</Title>
                <Paragraph  style={{marginTop:20}}> Km</Paragraph>
            </Card.Content>
            
        </Card>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo3} source={require('../assets/fuelef.png')}/> 
                <Text style={[styles.cardtext,{color:lightBlue}]}>Efficiency   </Text>
                <Title style={styles.cardvalue}>{cardata["fuelEfficiency"]}</Title>
                <Paragraph  style={{marginTop:20}}> Km/L</Paragraph>
            </Card.Content>
            
        </Card>

        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo2} source={require('../assets/thermometer.png')}/> 
                <Text style={[styles.cardtext,{color:orange}]}>Temperature   </Text>
                <Title style={styles.cardvalue}>{cardata["Temp"]}&deg;</Title>
                <Paragraph  style={{marginTop:20}}>C</Paragraph>
            </Card.Content>
            
        </Card>
        <Card style={styles.cardstyle}>
            <Card.Content>
              <View style={{flex:1,flexDirection:'row'}}>
                <Image style={styles.cardlogo2} source={require('../assets/location.png')}/> 
                <Text style={[styles.cardtext,{color:red}]}>Location   </Text>
              </View>
              <View style={{flex:1}}>
                {/* <Image style={styles.locationimg} source={require('../assets/map.png')}></Image> */}
                <MapView
                style={styles.locationimg} 
                initialRegion={{
                  latitude: 11.5696231,
                  longitude: 78.0329787,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                
              >
               <Marker coordinate={{ latitude: 11.5696231, longitude: 78.0329787 }} />
                </MapView>
              </View>
            </Card.Content>
            <Card.Content style={{flexDirection:'row'}}>
            </Card.Content>
        </Card>
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/check.png')}/> 
                <Text style={[styles.cardtext,{marginLeft:10,marginTop:4}]}>Check Engine </Text>
            </Card.Content>
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
                <Title style={styles.cardvalue}>{cardata["checkEngine"]}</Title>
                {/* <Image style={styles.cardlogo2} source={require('../assets/enginegood.png')}/>  */}
            </Card.Content>
        </Card>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop:20
        }}
        />
        <View style={{flexDirection:'row'}}>
        <Image style={[styles.cardlogo,{marginLeft:12,marginTop:35}]} source={require('../assets/engine.png')}/>
        <Text style={[styles.head,{marginTop:45}]}> Engine Specific Data</Text>
        </View>
        
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                
                {/* <Text style={styles.cardtext5}>Engine Data</Text> */}
            </Card.Content>
            {/* RPM */}
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
              <Text style={styles.engineData}>RPM</Text>
                <Title style={styles.enginevalue}>{cardata["RPM"]}</Title>
                <Paragraph  style={{marginTop:20}}>rpm</Paragraph>
            </Card.Content>
            {/* Torque */}
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
              <Text style={styles.engineData}>Torque</Text>
                <Title style={styles.enginevalue}>{cardata["Torque"]}</Title>
                <Paragraph  style={{marginTop:20}}>nm</Paragraph>
            </Card.Content>
             {/* Fuel pressure */}
            <Card.Content style={{flexDirection:'row',marginLeft:20}}>
              <Text style={styles.engineData}>Fuel Pressure</Text>
                <Title style={styles.enginevalue}>{cardata["fuelPressure"]}</Title>
                <Paragraph  style={{marginTop:20}}>kilopascal</Paragraph>
            </Card.Content>
        </Card>
        <View
        style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginTop:20
        }}
        />
        

       
        <Card style={styles.cardstyle}>
            <Card.Content style={{flexDirection:'row'}}>
                <Image style={styles.cardlogo} source={require('../assets/fuel.png')}/> 
                
                <Text style={styles.cardtext}>Fuel Level</Text>
                <Text style={styles.cardvalue}>80</Text>
               
            </Card.Content>
                
        </Card>

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
  fuelcardhead:{
    fontSize:18,
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
  cardbiglogo:{
    width: 80,
    height:80,
    marginRight:10
  },
  cardlogo3:{
    
    width: 45,
    height:45,
    marginRight:10
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
    fontSize:20,
    marginTop:12,
    width:'50%'
  },

  cardvalue:{
    color:'white',
    marginTop:12,
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
    width:'60%',
    marginLeft:12
  },
  enginevalue:{
    color:'white',
    marginTop:12,
    marginLeft:0,
    marginRight:5
  }
});
