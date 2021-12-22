import React, { useEffect, useState } from 'react'
import { View, Text, Image,ScrollView,Dimensions, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { fetchMovieDetails } from '../../../services/services'
import 'intl';
import 'intl/locale-data/jsonp/en';
import MoviePlayer from "../../Components/MoviePlayer"
import SeasonList from '../../Components/SeasonList';

const dimensions = Dimensions.get("screen")

export default function MovieDetails({route,navigation}) {
    const movieId = route.params.movie_id
    const adjaraId = route.params.adjara_id
    const [fileObj, setfileObj] = useState()
    const [movie, setMovie] = useState({})
    const [desc, setDesc] = useState("No Description")
    const [loaded, setLoaded] = useState(false)
    const [visible, setvisible] = useState(false)
    
    useEffect(() => {
        fetchMovieDetails(adjaraId).then(async (res)=>{
            if(!res.isTvShow){
                const data = await fetchMovieFile()
                setfileObj(data)
            }
            navigation.setOptions({title:res.secondaryName})
            setMovie(res)
            setLoaded(true)
        })
    }, [movieId])
    const fetchMovieFile = async() =>{
        const res = await fetch(`http://10.0.2.2:4000/movie-files/${movieId}/1`)
        const json = await res.json()
        return json
    }
    useEffect(() => {
        loaded&&getDescription()
    }, [loaded])

    const getDescription = () =>{
        movie.plots.data.map(child=>{
            if(child.language=="ENG"){
                setDesc(child.description)
            }
        })
    }

    return (
        <React.Fragment>
        {loaded &&   
        (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flex:1}}>
                        
                        <MoviePlayer url={fileObj[0].files[0].files[0].src}/>
                    </View>
                    <View style={styles.episodesContainer}>
                        {movie.isTvShow&& <SeasonList
                                            movieId={movieId}
                                            error_img={movie.covers.data[1920]}
                                            data={movie.seasons.data}
                                            />
                        }
                    </View>

                    <View style={styles.detailsContainer}>
                        <View>
                            <Image 
                                source={{uri:movie.posters.data[240]}}
                                style={styles.poster}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:'center',fontSize:30}}>{movie.secondaryName}</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:'center',color:'rgb(66, 66, 66)'}}>
                                    Release Date : {movie.releaseDate}
                                    {"\n"}
                                    Views : {new Intl.NumberFormat("us-IN").format(movie.watchCount)}
                                    {"\n"}
                                    {"\n"}
                                    Genres : {
                                                movie.genres.data.length>1
                                                ?
                                                movie.genres.data.map(child=>{
                                                    child.secondaryName+", "
                                                })
                                                :
                                                movie.genres.data[0].secondaryName
                                            }
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={{textAlign:'center',marginTop:20}}>
                            {
                                desc
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
    infoContainer:{
        flex:1,
        justifyContent:'center',
    },
    poster:{
        width:150,
        height:250,
        resizeMode:'cover'
    },  
    descriptionContainer:{

    },
    detailsContainer:{
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