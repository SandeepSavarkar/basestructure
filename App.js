/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { NetworkProvider, NetworkConsumer, useIsConnected } from 'react-native-offline';
import RootNavigator from './src/router';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { Color } from './src/utils';
import Label from './src/components/ui/label';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <NetworkProvider>
        <NetworkConsumer>
          {({ isConnected }) =>
            <>
              {
                !isConnected &&
                <View style={{ backgroundColor: Color.BLACK, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                  <Label color={Color.WHITE}>Please check your network connection!!</Label>
                </View>
              }
              <RootNavigator />
            </>
          }
        </NetworkConsumer>
      </NetworkProvider>
    </SafeAreaView>
  );
};



export default App;
