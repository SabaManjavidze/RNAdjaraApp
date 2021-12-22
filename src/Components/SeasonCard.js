import React, { useEffect, useState } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity,StyleSheet } from 'react-native'
import EpisodeList from './EpisodeList'

export default function SeasonCard({movieId,error_img,num}) {
    const [visible, setvisible] = useState(false)
    console.log(movieId)
    return (
        <View>
            <TouchableOpacity onPress={()=>setvisible(!visible)}>
                <View style={styles.container}>
                    <Text style={styles.text}>Season {num}</Text>
                </View>
            </TouchableOpacity>
                <View>
                    {visible&&<EpisodeList 
                                error_img={error_img} 
                                seasonNum={num} 
                                movieId={movieId}
                                seasonNum={num}
                                />}
                </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"gray"
    },
    text:{
        fontSize:30,
        color:"white",
        fontWeight:'900',
    }
})



