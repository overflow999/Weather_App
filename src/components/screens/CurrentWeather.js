
import React from 'react'
import { SafeAreaView, Text, View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowText from './RowText';
import { Weathertype } from '../Utilities/Weathertype';

const  CurrentWeather = ({weatherData}) => {
  const {highLowWrapper,
         highlow,
         bodyWrapper,
         message,
         description,
         tempStyle,
         feels,
         wrapper,
        container} = styles
// console.log(weatherData);
const {main: {temp,feels_like,temp_max,temp_min},weather} = weatherData

const weatherCondition = weather[0].main
  return (


    <SafeAreaView style={[wrapper,{backgroundColor:Weathertype[weatherCondition].backgroundColor}]}>
        <View style={container} >
          <Text>Current Weather</Text>
          <Feather name={Weathertype[weatherCondition]?.icon} size={24} color="white" />
            <Text style={tempStyle}>{temp}</Text>
            <Text style={feels}>{`Feels Like ${feels_like}°`}</Text>
          <RowText messageOne={`High: ${temp_max}° `} 
            messageTwo={`Low:${temp_min}°`}
            containerStyle={highLowWrapper} 
            messageOneStyle={highlow} 
            messageTwoStyle={highlow} />
        </View>
          <RowText messageOne={weather[0]?.description}
            messageTwo={Weathertype[weatherCondition]?.message}
            containerStyle={bodyWrapper} messageOneStyle={description} 
            messageTwoStyle={message} />
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  wrapper: {
    flex:1,
    backgroundColor:'cyan',
  },
  tempStyle:{
    color:'black',
    fontSize:50
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highlow:{
    color:'black',
    fontSize:20
  } ,
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:40
  },
  message:{
    fontSize:20
  }
})
export default CurrentWeather