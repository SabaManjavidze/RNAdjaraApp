import React, { useEffect, useState } from 'react'
import { View, Text, Image,ScrollView,Dimensions, StyleSheet, Button, Modal } from 'react-native'
import { fetchMovieDetails,fetchMovieFiles } from '../../../Services/services'
import MoviePlayer from '../../Components/MoviePlayer'

const dimensions = Dimensions.get("screen")

export default function MovieDetails({route,navigation}) {
    const {adjaraId,movieId} = route.params.movieId
    const [fileObj, setFileObj] = useState()
    const [movie, setMovie] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchMovieDetails(adjaraId).then(res=>{
                setMovie(res)
                const ses = res.seasons.data
                fetchMovieFiles(movieId,ses[ses.length-1].number)
                .then(obj=>{
                    console.log(obj)
                    setFileObj(obj)
                    setLoaded(true)
            })
        })
    }, [movieId])
    return (
        <React.Fragment>
        {loaded&&   
        (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flex:1}}>
                        <MoviePlayer url={fileObj.files[0].files[0].src}/>
                    </View>
    
                    <View style={styles.imageContainer}>
                        <View >
                            <Image 
                                source={{uri:movie.posters.data[240]}}
                                style={styles.poster}
                            />
                        </View>
                        <View style={{flex:1,justifyContent:'center',backgroundColor:'red'}}>
                            <Text style={{textAlign:'center'}}>{movie.secondaryName}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{textAlign:'center'}}>
                            {
                                movie.plots.data.find(item=>item.language==="ENG").description||
                                movie.plots.data.find(item=>item.language==="RUS").description||
                                movie.plots.data.find(item=>item.language==="GEO").description
                            }
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )}
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    poster:{
        width:150,
        height:250,
        resizeMode:'cover'
    },  
    imageContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
})