import React, { useEffect } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity,StyleSheet } from 'react-native'

export default function MovieCard({navigator,item}) {
    return (
        <TouchableOpacity onPress={()=>navigator.navigate("MovieDetails",{Movie:item.id})} style={styles.container}>
            <Image 
            source={{uri:item.url}} 
            style={styles.image}/>
            <Text style={styles.text}>{"Movie Title Here"}</Text>
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
