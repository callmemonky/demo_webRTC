import React, {useState, useEffect} from 'react';

import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {mediaDevices, RTCView} from 'react-native-webrtc';

const {width, height} = Dimensions.get('window');

export const ScreenSharing = () => {
  const [stream, setStream] = useState(null);

  async function startScreenSharing() {
    // eslint-disable-next-line no-undef
    const localStream = new MediaStream();

    const streamRTC = await mediaDevices.getDisplayMedia({
      video: true,
      frameRate: 15,
    });
    let track;
    [track] = streamRTC.getVideoTracks();
    localStream.addTrack(track);
    setStream(localStream);
  }
  useEffect(() => {
    startScreenSharing();
  }, []);

  return (
    <SafeAreaView style={{height: height, width: width}}>
      <RTCView
        streamURL={stream ? stream.toURL() : null}
        style={styles.rtcView}
        objectFit={'cover'}
        zOrder={0}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rtcView: {
    width: 300,
    height: 600,
    borderWidth: 1,
  },
});
