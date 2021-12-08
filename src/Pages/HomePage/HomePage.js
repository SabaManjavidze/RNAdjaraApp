import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import React, { Component, useState,useEffect } from 'react'
import { FlatList, Image, Text, View,StyleSheet,Dimensions, SafeAreaView, ScrollView, Button } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import {fetchData, fetchMovieImages} from '../../../Services/services'
import MovieList from '../HomePage/Components/MovieList'

const dimensions = Dimensions.get("screen")
export default function HomePage({navigation}) {
    const [Images, setImages] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Movies, setMovies] = useState([])
    const slider_url=`http://10.0.2.2:4000/slider`
    const movies_url=`http://10.0.2.2:4000/movies`
    
    // const mock_movies = [
    //     {url:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",id:1},
    //     {url:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",id:2},
    //     {url:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",id:3},
    //     {url:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",id:4},
    //     {url:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",id:5},
    //     {url:"https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",id:6},
    // ]
    // const mock_images = [
    //     "https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",
    //     "https://cdn.wallpapersafari.com/34/82/YRzXPk.jpeg",
    // ]
    
    useEffect(() => {
        try {
            fetchMovieImages(slider_url,setImages)
            fetchData(movies_url,setMovies )
            
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
{Loading?null:               <SliderBox 
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