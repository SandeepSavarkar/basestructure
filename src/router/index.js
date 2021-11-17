import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authenticated from './authentication';
import NotAuthenticated from './nonAuthentication';
import Home from '../screens/home'
import Routes from './routes';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.Authenticated} component={Authenticated} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={Routes.NotAuthenticated} component={NotAuthenticated} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;