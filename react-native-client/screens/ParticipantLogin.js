import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import React, { useState, useContext } from 'react';
import { Button, Image, ScrollView, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native';
import hide from "../assets/hide.png"
import viewButton from "../assets/view.png"
// import { LoginContext } from '../Contexts/LoginContext';

const ParticipantLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [city, setCity] = useState('');
    const [lastName, setLastName] = useState('');
    const [view, setView] = useState(false);
    const navigation = useNavigation();
    // const { user, setUser } = useContext(LoginContext);


    const sendDataToServer = async (username, password, email, firstname, lastname, city) => {
        try {
            const apiUrl = 'https://4ded-49-248-167-18.ngrok-free.app/api/login/participant'; // Replace with your server URL

            const requestBody = {
                username,
                password,
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
            setUsername('')
            setPassword('')
            console.log('Logged in successfully');
            navigation.navigate('Participant Screen')
        } catch (error) {
            console.error('Error sending data to the server:', error);
        }
    };

    const Signin = () => {
        if (username && password && email && firstName && lastName && city) {
            sendDataToServer(username, password, email, firstName, lastName, city);
        } else {
            alert("Please fill in all the required fields");
        }
    };




    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 130 }}>
               
            <Text style={{ fontSize: 30 , }}>Participant Login</Text>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
                    <TextInput
                        style={{
                            paddingLeft: 20, width: 250, height: 50, backgroundColor: 'white', borderRadius: 10
                        }}
                        onChangeText={setUsername}
                        value={username}
                        placeholder={'Enter username'}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TextInput
                        secureTextEntry={view ? false : true}
                        style={{
                            paddingLeft: 20, width: 250, height: 50, backgroundColor: 'white', borderRadius: 10,
                        }}
                        onChangeText={setPassword}
                        value={password}
                        placeholder={'Password'}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity style={{ position: 'absolute', zIndex: 10, marginLeft: 220 }} onPress={() => { view ? setView(false) : setView(true) }}>
                        {view ?
                            <Image
                                source={viewButton}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                            :
                            <Image
                                source={hide}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                        }
                    </TouchableOpacity>
                </View>
          

                <TouchableOpacity style={{ marginTop: 30 }} onPress={Signin}>
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
                        }} >Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ display: 'flex', marginTop: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ height: 1, width: 30, backgroundColor: 'red' }} />
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>OR</Text>
                    <View style={{ height: 1, width: 30, backgroundColor: 'red' }} />
                </View>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate('ParticipantSignup')}>
                    <View style={{
                        width: 200,
                        height: 50,
                        borderRadius: 15,
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderColor: 'red',
                        borderWidth: 2,
                    }}>
                        <Text style={{
                            color: 'red',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }} >Sign Up</Text>
                    </View>
                </TouchableOpacity>



            </View>
        </View>


    )
}

export default ParticipantLogin