import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useUserContext } from '../UserContext'; // Import the context if not already done

const PStarter2 = ({ navigation }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const { userId, setUserId } = useUserContext();

    const registerForPushNotifications = async () => {
        try {
            // Request permission for notifications
            const { status } = await Notifications.requestPermissionsAsync();
    
            if (status !== 'granted') {
                console.error('Permission to receive push notifications was denied.');
                return;
            }
    
            // Get the Expo Push Token
            const token = (await Notifications.getExpoPushTokenAsync({projectId: 'bd630d55-e4de-46c6-a8c6-648c39cceeb7'})).data;
    
            // Send the token to your backend server
            const apiUrl = `https://4ded-49-248-167-18.ngrok-free.app/api/participant/token/${userId}`; // Replace with your backend URL
            const requestBody = {
                token,
            };
    
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
    
            if (!response.ok) {
                throw new Error('Server Error');
            }
    
            // If the token is successfully sent to your backend, you can navigate to the next screen
            navigation.navigate('ParticipantScreen');
        } catch (error) {
            console.error('Error getting Expo Push Token or sending it to the server:', error);
        }
    };
    

    const handleAccept = () => {
        // Call the function to get the push token
        registerForPushNotifications();
    };

    const handleDecline = () => {
        // Handle the case when the user declines notifications (e.g., show a message)
        Alert.alert('Notifications Declined', 'You have declined push notifications.');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Participant Starter 2</Text>

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 40 }}>
                Allow notifications?
            </Text>

            <TouchableOpacity
                style={{
                    backgroundColor: 'green',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    marginBottom: 20,
                }}
                onPress={handleAccept}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                    Accept
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: 'red',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                }}
                onPress={handleDecline}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                    Decline
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default PStarter2;
