import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Color } from '../utils/color'
import Home from '../screens/home';
import Routes from './routes';
import Profile from '../screens/profile';
import ResetPassword from '../screens/resetPassword';
import { responsiveHeight, responsiveWidth } from '../utils/themeUtils';
import Label from '../components/ui/label';

//Bottom Tab Navagator
// const Tab = createBottomTabNavigator();
// const BottomTab = () => {
//     return (
//         <Tab.Navigator >

//             <Tab.Screen name={Routes.Home} component={Home} options={{ />
//             <Tab.Screen name={Routes.Profile} component={Profile} options={{ headerShown: false }} />
//         </Tab.Navigator>
//     );
// }


// If you want to use Material tab Navigation




const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const MaterialBottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={Routes.Home}
            activeColor={Color.WHITE}
            inactiveColor={Color.DARK_GRAY}
            barStyle={{ backgroundColor: Color.BLACK }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicon name="home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{

                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicon name="ios-person-add-sharp" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}


const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Profile} component={Profile} options={{
                headerShown: false
            }} />
            <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
};


//Authenticated Screen Navigation

// const Authenticated = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='MaterialBottomTab' component={MaterialBottomTab} options={{
//                 headerShown: false
//             }} />
//         </Stack.Navigator>
//     );
// };



const Authenticated = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="MaterialBottomTab" component={MaterialBottomTab} />
            <Drawer.Screen options={{
                headerShown: false
            }} name='ProfileStack' component={ProfileStack} />
        </Drawer.Navigator>
    );
}


function CustomDrawerContent(props) {

    return (
        <DrawerContentScrollView {...props}>
            <View
                style={[
                    { backgroundColor: Color.WHITE },
                ]}>
                <>
                    <View
                        style={[

                            { backgroundColor: Color.DARK_GRAY, }]}>

                        <View style={{ height: responsiveHeight(30), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 150, height: 150, borderRadius: 100 }}
                                resizeMode="cover"
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRfl9cnr8NXxgTTRRKt6dUGT57fPRfIoj9Q&usqp=CAU" }}
                            />
                            <Label bold mt={10}>Allu Arjun</Label>
                        </View>
                    </View>
                    <DrawerItem
                        label="Home"
                        labelStyle={{ color: Color.BLACK, fontSize: 20 }}
                        onPress={() => {
                            props.navigation.navigate(Routes.Home);
                        }}
                        icon={() => {
                            return (
                                <Ionicon name='home' size={25} color={Color.BLACK} />
                            )
                        }}
                    />
                    <DrawerItem
                        label="Profile"
                        labelStyle={{ color: Color.BLACK, fontSize: 20 }}

                        onPress={() => {
                            props.navigation.navigate('ProfileStack');
                        }}

                        icon={() => {
                            return (
                                <Ionicon name='person' size={25} color={Color.BLACK} />
                            )
                        }}
                    />
                </>
            </View>
        </DrawerContentScrollView>
    );
}

export default Authenticated;