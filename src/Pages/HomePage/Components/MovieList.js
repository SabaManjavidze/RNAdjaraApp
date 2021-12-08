import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native'
import MovieCard from '../../../Components/MovieCard'
export default function MovieList({navigation,title,data}) {
    const renderItem = ({item}) =>{
        return(<MovieCard navigator={navigation} item={item}/>)
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
