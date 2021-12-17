/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Settings,LoginButton, AccessToken,Profile } from 'react-native-fbsdk-next';

Settings.initializeSDK();
Settings.setAppID('610115270245205');

AppRegistry.registerComponent(appName, () => App);
