import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Routes from '../../router/routes';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Profile)}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Store)}>
                <Text>Grid</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;