import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Routes from './routes';
import Profile from '../screens/profile';
import Store from '../screens/store';


const Stack = createNativeStackNavigator();

const Authenticated = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home} options={{
                headerShown : false
            }} />
            <Stack.Screen name={Routes.Profile} component={Profile} options={{ headerShown : false }} />
            <Stack.Screen name={Routes.Store} component={Store} options={{ headerShown : false }} />
        </Stack.Navigator>
    );
};

export default Authenticated;