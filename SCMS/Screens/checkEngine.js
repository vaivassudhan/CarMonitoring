import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image,SafeAreaView,ActivityIndicator, TextInput,ScrollView, TouchableOpacity , } from 'react-native';
import Speedometer from 'react-native-speedometer-chart';
import {db} from '../config/fireconfig';
import {Text,useTheme} from 'react-native-paper'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import MapView  , { Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';
import {FontAwesome} from 'react-native-vector-icons';
export default function Demo({navigation}) {
    const lightBlue="rgb(88,178,177)"
    const green="rgb(85,177,94)"
    const orange="rgb(223,98,51)"
    const red="#c62828"
    const { colors } = useTheme();
  
    const [cardata,setcardata]=useState('')
    const [loading,setloading]=useState(true)
    const [errorcodes, seterrorcodes]=useState(false)
    const [battery, setbattery]=useState(false)
    const [engine, setengine]=useState(false)
    const [oil, setoil]=useState(false)
    const [temp, settemp]=useState(false)
    useEffect(()=>{
  
      db.ref('/scms-33eae-default-rtdb/Car/').on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let cdata = {...data};
        seterrorcodes(false)
        cdata=cdata["-M_ElJUj2wV6MB9xW8u8"]
        setcardata(cdata)
        var checkEngine=cdata["checkEngine"]
        if(cdata["checkE"]){
            seterrorcodes(true)
        }
        if(checkEngine["battery"]){
            setbattery(true)
        }
        if(checkEngine["oil"]){
            setoil(true)
        }
        if(checkEngine["temp"]){
            settemp(true)
        }
        if(checkEngine["engine"]){
            setengine(true)
        }
        setloading(false)
      });
      
    },[]);
    return (
      
      <SafeAreaView style={styles.container}>
        
        {loading ?
        <View style={[styles.container_load,styles.horizontal_load]}>
            <ActivityIndicator size ="large" color="#009387" />
        </View> :
        <View>
          <View style={styles.headview}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <FontAwesome name = 'angle-left' style={{marginLeft:8,marginTop:4}} size ={40} color='white' />
            </TouchableOpacity>
            <Image style={[styles.cardlogo,{marginTop:8,marginLeft:44}]} source={require('../assets/check.png')}/> 
              <Text style={[styles.head,{marginTop:8,marginLeft:10}]}>Check Engine</Text>
          </View>
          <View
          style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
          }}
          />
        <ScrollView>
      <View style={{marginBottom:45}}>
          <Card style={styles.cardstyle}>
              <Card.Content style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                  {!errorcodes ?
                    <View>
                        <View style={{flex:1}}>
                        <Image style={styles.cardlogo2} source={require('../assets/enginechecked.png')}></Image>
                        </View>
                        <View>
                            <Text style={{fontSize:24,marginTop:14}}>No DTC Error codes </Text>
                        </View>
                    </View>:
                    <View>
                    <View style={{flex:1}}>
                    <Image style={styles.cardlogo2} source={require('../assets/warn.png')}></Image>
                    </View>
                    <View>
                        {battery?
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.cardlogo3,{marginTop:18}]} source={require('../assets/symbols/battery.webp')}></Image>
                            <Text style={{fontSize:20,marginTop:46}}> Batery Alert </Text>
                        </View>
                        :
                        <View></View>
                        }
                        {oil?
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.cardlogo3,{marginTop:18}]} source={require('../assets/symbols/oil.webp')}></Image>
                            <Text style={{fontSize:20,marginTop:42}}> Oil Pressure Light </Text>
                        </View>
                        :
                        <View></View>
                        }
                        {temp?
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.cardlogo3,{marginTop:18}]} source={require('../assets/symbols/temp.webp')}></Image>
                            <Text style={{fontSize:20,marginTop:46}}> Engine Temperature Warning </Text>
                        </View>
                        :
                        <View></View>
                        }
                        {engine?
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.cardlogo3,{marginTop:18}]} source={require('../assets/symbols/engine.webp')}></Image>
                            <Text style={{fontSize:20,marginTop:34}}> Engine Warning </Text>
                        </View>
                        :
                        <View></View>
                        }
                    </View>
                </View>
                }
              </Card.Content>
          </Card>
      </View>
      </ScrollView>
      </View>
        }
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:12,
      backgroundColor:'rgb(15,15,15)'
    },
    cardlogo:{
      width: 50,
      height:50,
      marginRight:8
    },
    container_load:{
      justifyContent:'center'
    },
    horizontal_load:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
    },  
    cardlogo2:{
      width: 150,
      height:150,
      alignSelf:'center'
    },
    cardlogo3:{
        width: 65,
        height:65,
        marginLeft:10,
        // alignSelf:'center'
    },
    head: {
        marginTop:0,
        fontSize:26,
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
      marginTop:18,
      flexDirection:'row',
    },
    cardtext:{
      fontSize:20,
      marginTop:12,
      width:'50%'
    },
  
   
    
  });