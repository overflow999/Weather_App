import React from 'react'
import {Text,SafeAreaView,StyleSheet,ImageBackground,View, StatusBar} from 'react-native'
import IconText from '../IconText'
import moment from 'moment'

const City = ({weatherData}) => {
    const {
        container,
        cityName,
        cityText,
        countryName,
        populationText,
        populationwrapper,
        riseSetText,
        riseSetwrapper,
        imageLayaout,
        rowLayout} = styles
    const {name,country,population,sunrise,sunset} = weatherData
    
  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../../../assets/backpacker.jpg')}
        style={imageLayaout}
        >
            <Text style={[cityName,cityText]}>{name} </Text>
            <Text style={[countryName,cityText]}>{country}</Text>
            <View style={populationwrapper}>
              <IconText 
              iconName={'user'} 
              iconColor={'red'}
              bodyText={`population: ${population}`} 
              bodyTextStyle={populationText} />
            </View>
            <View style={[riseSetwrapper,rowLayout]}>
                <IconText
                 iconName={'sunrise'}
                 iconColor={'white'}
                 bodyText={moment(sunrise).format('h:mm:ss a')}
                 bodyTextStyle={riseSetText} />
 
                <IconText 
                iconName={'sunset'} 
                iconColor={'white'}
                bodyText={moment(sunset).format('h:mm:ss a')}
                bodyTextStyle={riseSetText} />
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayaout:{
        flex:1
    },
    cityName:{
        fontSize:40,
    },
    countryName:{
        fontSize:30,
    },
    cityText:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    },
    populationwrapper:{      
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        marginLeft:7.5,
        color:'cyan',
        fontWeight:'bold'
    },
    riseSetwrapper:{
        justifyContent:'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:'cyan',
        fontWeight:'bold'
    },
    rowLayout:{
        flexDirection:'row',
        alignItems:'center'
    }

})
export default City