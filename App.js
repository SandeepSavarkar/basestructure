/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Settings,LoginButton, AccessToken,Profile } from 'react-native-fbsdk-next';

import { NetworkProvider, NetworkConsumer, useIsConnected } from 'react-native-offline';
import RootNavigator from './src/router';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <NetworkProvider>
        <NetworkConsumer>
          {({ isConnected }) => {
            console.log(isConnected);
            return (
              isConnected ? (
                <RootNavigator />
              ) : (
                //UI for handling network error
                <Text>Downloading images is disabled since you are offline</Text>
              ))
          }}
        </NetworkConsumer>
      </NetworkProvider>
    </View>
  );
};



export default App;
