import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Profile from './Profile';
import BottomTabNavigation from './BottomTab-Navigation';

export default function StackNavigation2() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
