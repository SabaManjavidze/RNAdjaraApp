import React, { useEffect, useState } from 'react'
import { View, Text, Image, Touchable, TouchableOpacity,StyleSheet, Dimensions, FlatList } from 'react-native'
import { fetchMovieFiles } from '../../services/services'
import EpisodeCard from './EpisodeCard'

const dimensions = Dimensions.get("screen")
export default function EpisodeList({error_img,movieId,seasonNum}) {
    const [fileObj, setFileObj] = useState({})
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        fetchMovieFiles(movieId,seasonNum)
        .then(obj=>{
            setFileObj(obj)
            setLoaded(true)
    })
    }, [])

    const renderItem = ({item}) =>{
        return(<EpisodeCard error_img={error_img} child={item}/>)
    }

    return (
        <React.Fragment>
    {loaded&& 
            <FlatList
                data={fileObj}
                keyExtractor={key=>key.episode.toString()}
                renderItem={renderItem}
                scrollEnabled={false}
            />
    }
    </React.Fragment>
    )

}
const styles = StyleSheet.create({
    episodesContainer:{

    },
    dropDownBtn:{
        flex:1,
        height:dimensions.height/15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#764ABC'
    },
})
