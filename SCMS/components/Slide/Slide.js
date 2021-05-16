import React,{useState , createRef,useEffect ,Component} from 'react';
import { 
    SafeAreaView,
    View, 
    Text, 
    StyleSheet ,
    Image,
} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo-linear-gradient';


const slides = [
    {
      key: 'one',
      title: 'Welcome to Smart Car monitoring system',
      text: 'This project aims to make all old cars into smart cars',
      image: require('../../assets/speedometer.jpg'),
      backgroundColor: 'rgb(4, 15, 15)',
      backgroundColor1: 'rgb(18, 18, 18)',
      
    },
    {
      key: 'two',
      title: 'Location ',
      text: 'This mobile app lets you track your car',
      image: require('../../assets/map.png'),
      backgroundColor: 'rgb(4, 15, 15)',
      backgroundColor1: 'rgb(18, 18, 18)',
    },
    {
      key: 'three',
      title: 'Check engine',
      text: 'Monitor your car\'s engine ',
      image: require('../../assets/engine.png'),
      backgroundColor: 'rgb(4, 15, 15)',
      backgroundColor1: 'rgb(18, 18, 18)',
    }
  ];

export class Slide extends Component {
  constructor(props){
    super(props);
    this.state = {
      showRealApp: false
    }
  }
  _renderItem = ({ item }) => {
    return (
      <LinearGradient colors={[
        item.backgroundColor,
        item.backgroundColor1,
      ]} style={[
        styles.slide,]}>

      <SafeAreaView style={[
        styles.slide,]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </SafeAreaView>
      </LinearGradient>
    );
  }


  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-arrow-forward-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate('Main')
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} renderDoneButton={this._renderDoneButton}
      renderNextButton={this._renderNextButton}/>;
    }
  }
}

export default Slide

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  image: {
    width: 390,
    height: 300,
    // marginVertical: 32,
  },
  text: {
    color: 'rgba(10,132,235, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    color: 'rgb(10,132,235)',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 