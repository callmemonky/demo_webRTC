import React, {useEffect, useState} from 'react';

import {SafeAreaView, Platform} from 'react-native';
import {ScreenSharing} from './Screensharing';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';

const App = () => {
  const initializeForegroundService = (meetingId, video, audio) => {
    if (Platform.OS === 'android') {
      if (ReactNativeForegroundService.is_task_running('meetingstart')) {
        return;
      }

      return ReactNativeForegroundService.start({
        id: 144,
        title: 'Random',
        message: 'Ongoing Call',
      });
    }
  };

  useEffect(() => {
    initializeForegroundService();
  }, []);

  return (
    <SafeAreaView>
      <ScreenSharing />
    </SafeAreaView>
  );
};

export default App;
