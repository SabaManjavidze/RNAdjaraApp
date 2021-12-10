import React, { useEffect } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity,StyleSheet } from 'react-native'

export default function EpisodeCard({error_img,child}) {
    return (
        <View
        style={{
                backgroundColor:'#764ABC',
                borderColor:"#2b1b45",
                borderBottomWidth:5,
                borderTopWidth:5,
                flex:1,
                flexDirection:'row',
                justifyContent:'center'
            }}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{color:"white",fontSize:15,marginLeft:10}}>{child.episode}</Text>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image 
                    style={{width:120,height:70,resizeMode:'cover'}}
                    source={{
                        uri:child.covers[1920]==""?error_img:child.covers[1920]
                    }}
                />
            </View>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:20,textAlign:'left',color:'white'}}>
                {child.title.length==0?`Episode ${child.episode}`:child.title}
            </Text>
        </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        padding:5,
        position:'relative'
    },
    image:{
        width:120,
        height:170,
        borderRadius:5,
        resizeMode:'cover'
    },
    text:{
        textAlign:'center',
        maxWidth:120
    }
})



