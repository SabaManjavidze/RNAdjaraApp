import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native'
import MovieCard from './MovieCard'
export default function MovieList({navigation,title,data}) {
    const renderItem = ({item}) =>{
        const img_url = item.covers.data[1920]
        return(
            <MovieCard 
                navigator={navigation} 
                title={item.secondaryName}
                url={img_url!=""?img_url:item.posters.data[240]}
                id={item.id}
                adjaraId={item.adjaraId}
                />
            )
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={key=>key.id.toString()}
                    horizontal={true}
                />
            </View>
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
