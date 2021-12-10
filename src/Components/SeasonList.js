import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native'
import SeasonCard from './SeasonCard'

export default function SeasonList({movieId,error_img,data}) {
    const renderItem = ({item}) =>{
        const num = item.number
        return(
            <SeasonCard 
                error_img={error_img}
                movieId={movieId}
                num={num}
            />
            )
    }
    return (
        <View style={styles.container}>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={key=>key.number.toString()}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
})
