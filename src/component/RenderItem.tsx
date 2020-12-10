import React from 'react'
import {View,Text,Image} from 'react-native'

const RenderItem = (image,name,price) => {
    return (
        <View>
            <Image source={image}/>
    <Text>{name}</Text>
    <Text>{price}.000d</Text>
        </View>
    )
}

export default RenderItem