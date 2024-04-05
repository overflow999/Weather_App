import React from 'react'
import { View,Text } from 'react-native'

const RowText = (props) => {
    const {messageOne,messageTwo,
        containerStyle,messageOneStyle,messageTwoStyle} = props
  return (
<View style={containerStyle}>
    <Text style={messageOneStyle}>{messageOne}</Text>  
    <Text style={messageTwoStyle}> {messageTwo}</Text>
</View>
  )
}


export default RowText