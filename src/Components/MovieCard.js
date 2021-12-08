import React, { useEffect } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity,StyleSheet } from 'react-native'

export default function MovieCard({navigator,item}) {
    const img_url = item.covers.data[1920];
    const img_url_medium = item.covers.data[1050]
    return (
        <TouchableOpacity onPress={()=>navigator.navigate("MovieDetails",{Movie:item.id})} style={styles.container}>
            <Image 
            source={{uri:img_url!=""?img_url:item.posters.data[240]}} 
            // source={{uri:item.url}}
            style={styles.image}/>
            <Text style={styles.text}>{item.secondaryName}</Text>
        </TouchableOpacity>
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
