import { View, Text, Image, TouchableOpacity, ScrollView, Animated, Linking, Platform, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import ExploreTopics from '../components/ExploreTopics';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Search from '../components/Search';
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import { SelectList } from 'react-native-dropdown-select-list'
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import Timer from '../components/Timer';
import { useMarathonContext } from '../MarathonContext';
import Events from "../screens/Events"
import * as Font from 'expo-font';
import { useEventContext } from '../EventContext';



const EventScreen = () => {
    const route = useRoute();
    const { eventName } = route.params; // Access the passed data
    const { location } = route.params; // Access the passed data
    const navigation = useNavigation();
    const { eventId, setEventId, amount, setAmount } = useEventContext(); // Access the run state and setRun function

    const sendDataToServer = async (username, password) => {
        try {
            const apiUrl = `https://4ded-49-248-167-18.ngrok-free.app/api/events/${eventName}`; // Replace with your server URL


            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Server Error');
            }

            const responseData = await response.json();

            const uid = responseData.userId;

            setEventId(eventId);

            alert('Successful');
            navigation.navigate('PaymentScreen', { eventId: eventId });
        } catch (error) {
            console.error('Error sending data to the server:', error);
        }
    };





    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >

                <SafeAreaView style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10, backgroundColor: '#fcd34d', flex: 1, paddingBottom: 160 }}>

                    <Text>EventScreen</Text>
                    <Text>{eventName}</Text>
                    <Text>{amount}</Text>
                    <Text>{location}</Text>
                    <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.navigate('PaymentScreen', { eventId: eventId })}>
                        <View style={{
                            width: 200,
                            height: 50,
                            borderRadius: 15,
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            backgroundColor: 'red'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }} >Register</Text>
                        </View>
                    </TouchableOpacity>

                </SafeAreaView>
            )
            
        </ScrollView>
    )
}
export default EventScreen