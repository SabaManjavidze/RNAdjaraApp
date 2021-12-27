import React, { useEffect } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity,StyleSheet } from 'react-native'

export default function MovieCard({navigator,url,title,id,adjaraId}) {

    return (
        <TouchableOpacity 
            onPress={
                ()=>{navigator.navigate("MovieDetails",{movie_id:id,adjara_id:adjaraId})}
                } 
            style={styles.container}>
                <Image 
                source={{uri:url}} 
                style={styles.image}/>
                <Text style={styles.text}>{title}</Text>
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
