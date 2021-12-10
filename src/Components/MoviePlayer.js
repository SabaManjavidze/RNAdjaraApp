import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Video,AVPlaybackStatus} from 'expo-av'

const dimensions = Dimensions.get("screen")
export default function MoviePlayer({url}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({isPlaying:"Pause"});
  return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: url
          }}
          useNativeControls
          resizeMode="cover"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
          </View> */}
          </View>
        )
      }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    flex:1,
    width: dimensions.width,
    height:dimensions.height/3,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  });