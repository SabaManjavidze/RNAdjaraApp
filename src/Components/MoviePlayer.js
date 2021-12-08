import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Video,AVPlaybackStatus} from 'expo-av'

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
          resizeMode="contain"
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
    alignSelf: 'center',
    width: 340,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  });