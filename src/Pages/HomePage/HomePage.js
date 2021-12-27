import { StatusBar } from 'expo-status-bar'
import React, { Component, useState,useEffect } from 'react'
import { Text, View,StyleSheet,Dimensions, ScrollView, Button } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import {fetchData,boiler, fetchMovieImages} from '../../../services/services'
import MovieList from '../../Components/MovieList'

const dimensions = Dimensions.get("screen")
export default function HomePage({navigation}) {
    const [Images, setImages] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Movies, setMovies] = useState([])
    const [TVShows, setTVShows] = useState([])
    const slider_url=`${boiler}/slider`
    const movies_url=`${boiler}/movies`
    const shows_url=`${boiler}/tv-shows`
    
    const getHomePage = async () =>{
        const img_arr = await fetchMovieImages(slider_url)
        setImages(img_arr)
        const movie_arr = await fetchData(movies_url)
        setMovies(movie_arr)
        const show_arr = await fetchData(shows_url)
        setTVShows(show_arr)
    }

    useEffect(() => {
        try {
            getHomePage()
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }, [])

    return (
        <React.Fragment>
            <ScrollView>
                <View style={styles.SliderContainer}>
                    {Loading?null:               
                        <SliderBox 
                            images={Images} 
                            sliderBoxHeight={dimensions.height / 3}
                            ImageComponentStyle={{borderRadius:3}}
                            resizeMode={"cover"}
                            dotStyle={styles.dotStyle}
                            autoplay
                            circleLoop
                        />}
                </View>

                <View style={styles.carousel}>
                    {Loading?null:<MovieList navigation={navigation} title={"Movies"} data={Movies} />}
                </View>

                <View style={styles.carousel}>
                    {Loading?null:<MovieList navigation={navigation} title={"TV Shows"} data={TVShows} />}
                </View>

            </ScrollView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    SliderContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    carousel:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    dotStyle:{
        height:0,
    }
  });