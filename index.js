import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerGlobals} from 'react-native-webrtc';

import ReactNativeForegroundService from '@supersami/rn-foreground-service';

//Add this here.
ReactNativeForegroundService.register();

registerGlobals();

AppRegistry.registerComponent(appName, () => App);
