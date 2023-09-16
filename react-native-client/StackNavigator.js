import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Starter from './screens/Starter';
import { useNavigation } from '@react-navigation/native';

import { LanguageProvider } from './LanguageContext';
import ChatScreen from './screens/ChatScreen';
import Role from './screens/Role';
import VolunteerScreen from './screens/VolunteerScreen';
import ParticipantScreen from './screens/ParticipantScreen';
import VolunteerSignup from './screens/VolunteerSignup';
import ParticipantSignup from './screens/ParticipantSignup';
import VolunteerLogin from './screens/VolunteerLogin';
import ParticipantLogin from './screens/ParticipantLogin';
import MapScreen from './screens/MapScreen';
import PStarter1 from './screens/PStarter1';
import { MarathonProvider } from './MarathonContext'; // Import your context provider


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    const navigation = useNavigation();

    return (
        <MarathonProvider>
            <LanguageProvider>
                <Stack.Navigator initialRouteName='ParticipantScreen'>
                    <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Starter" component={Starter} options={{ headerShown: false }} />
                    <Stack.Screen name="Role" component={Role} options={{ headerShown: false }} />
                    <Stack.Screen name="VolunteerLogin" component={VolunteerLogin} options={{ headerShown: false }} />
                    <Stack.Screen name="ParticipantLogin" component={ParticipantLogin} options={{ headerShown: false }} />
                    <Stack.Screen name="VolunteerSignup" component={VolunteerSignup} options={{ headerShown: false }} />
                    <Stack.Screen name="ParticipantSignup" component={ParticipantSignup} options={{ headerShown: false }} />
                    <Stack.Screen name="PStarter1" component={PStarter1} options={{ headerShown: false }} />
                    <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="VolunteerScreen" component={VolunteerScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ParticipantScreen" component={ParticipantScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </LanguageProvider>
        </MarathonProvider>
    )
}

export default StackNavigator
