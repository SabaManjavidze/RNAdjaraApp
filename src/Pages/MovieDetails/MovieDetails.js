import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ScrollView, StyleSheet, Button, Modal } from 'react-native'
import { fetchMovieDetails,fetchMovieFiles } from '../../../Services/services'
import MoviePlayer from '../../Components/MoviePlayer'

export default function MovieDetails({route,navigation}) {
    const movieId = route.params.Movie
    const [fileObj, setFileObj] = useState()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    // useEffect(() => {
    //     fetchMovieDetails(movieId).then(res=>{
    //             setMovie(res)
    //             const ses = res.seasons.data
    //             fetchMovieFiles(movieId,ses[ses.length-1].number)
    //             .then(obj=>{
    //                 setFileObj(obj)
    //         })
    //     })
    //     setLoading(false)
    // }, [movieId])
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text>{movieId}</Text>
                    <Image 
                        source={{uri:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg"}}
                        style={styles.poster}
                    />
                <Text>{"Movie TItle Goes Here BitCh fAcK AuTa hEre"}</Text>
                </View>
                <View>
                <Button onPress={()=>setModalVisible(!modalVisible)} title="click to play movie"/>

                    <Modal
                        animationType={"slide"}
                        visible={modalVisible}
                    >
                    <Button title="close moadal" onPress={()=>setModalVisible(!modalVisible)}/>

                    <MoviePlayer url={"https://vjs.zencdn.net/v/oceans.mp4"}/>

                    </Modal>
                </View>
                <View>
                    <Text style={{textAlign:'center'}}>{"movie description kook checkmate dismal factual files"}</Text>
                </View>
            </View>
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    poster:{
        width:200,
        height:300,
        resizeMode:'stretch'
    },  
    imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
})
