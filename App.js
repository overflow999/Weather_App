import React,{ useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { ActivityIndicator,Text,View,StyleSheet } from 'react-native'
import {useGetWeather} from './src/hooks/useGetWeather'
import Error from './src/components/screens/Error'
import * as Updates from 'expo-updates'



// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
   const [loading,error,weather] = useGetWeather()
   
    
    if(weather && weather.list && !loading){
      return(
        <NavigationContainer>
           <Tabs weather={weather}/>
        </NavigationContainer>
       )
   }

  
  return(
    <View style={styles.container}>
      {error ?(
        <Error/>
      ):(<ActivityIndicator
           size={'large'}  
           color={'blue'}
           />
      
      )}  
    </View>
  )   
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1
  }
})
export default App