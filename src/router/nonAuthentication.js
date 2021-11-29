import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Routes from './routes';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import ForgotPassword from '../screens/forgotPassword';
import ResetPassword from '../screens/resetPassword';

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.SignUp} component={SignUp} />
            <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
        </Stack.Navigator>
    );
};

export default NotAuthenticated;