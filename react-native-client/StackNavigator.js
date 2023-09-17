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
import { MarathonProvider } from './MarathonContext';
import PStarter2 from './screens/PStarter2';
import { UserProvider } from '../react-native-client/UserContext';
import GymTopics from './screens/GymTopics';
import SupplementTopics from './screens/SupplementTopics';
import BooksTopics from './screens/BooksTopics';
import WaterIntakeTopics from './screens/WaterIntakeTopics';
import NutritionTopics from './screens/NutritionTopics';
import RunningGearTopics from './screens/RunningGearTopics';
import Announcements from './screens/Announcements';
import PaymentScreen from './screens/PaymentScreen';
import { EventProvider } from './EventContext';
import Notifications from './screens/Notifications';
import EventScreen from './screens/EventScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    const navigation = useNavigation();

    return (
        <EventProvider>
            <UserProvider>
                <MarathonProvider>
                    <LanguageProvider>
                        <Stack.Navigator initialRouteName='ParticipantScreen'>
                            <Stack.Screen name="Starter" component={Starter} options={{ headerShown: false }} />
                            <Stack.Screen name="Role" component={Role} options={{ headerShown: false }} />
                            <Stack.Screen name="VolunteerLogin" component={VolunteerLogin} options={{ headerShown: false }} />
                            <Stack.Screen name="ParticipantLogin" component={ParticipantLogin} options={{ headerShown: false }} />
                            <Stack.Screen name="PStarter1" component={PStarter1} options={{ headerShown: false }} />
                            <Stack.Screen name="PStarter2" component={PStarter2} options={{ headerShown: false }} />
                            <Stack.Screen name="VolunteerSignup" component={VolunteerSignup} options={{ headerShown: false }} />
                            <Stack.Screen name="ParticipantSignup" component={ParticipantSignup} options={{ headerShown: false }} />
                            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="VolunteerScreen" component={VolunteerScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="ParticipantScreen" component={ParticipantScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="SupplementTopics" component={SupplementTopics} options={{ headerShown: false }} />
                            <Stack.Screen name="BooksTopics" component={BooksTopics} options={{ headerShown: false }} />
                            <Stack.Screen name="WaterIntakeTopics" component={WaterIntakeTopics} options={{ headerShown: false }} />
                            <Stack.Screen name="NutritionTopics" component={NutritionTopics} options={{ headerShown: false }} />
                            <Stack.Screen name="RunningGearTopics" component={RunningGearTopics} options={{ headerShown: false }} />
                            <Stack.Screen name="GymTopics" component={GymTopics} options={{ headerShown: false }} />
                            <Stack.Screen name="Announcements" component={Announcements} options={{ headerShown: false }} />
                            <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
                            <Stack.Screen name="EventScreen" component={EventScreen} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </LanguageProvider>
                </MarathonProvider>
            </UserProvider>
        </EventProvider>


    )
}

export default StackNavigator
