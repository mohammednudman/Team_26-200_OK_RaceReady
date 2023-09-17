import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import { useUserContext } from '../UserContext'
import { useNavigation } from '@react-navigation/native'

const PStarter1 = () => {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState("")
  const [view, setView] = useState(false)

  const { userId, setUserId } = useUserContext(); // Access userId and setUserId from the context
  const navigation = useNavigation();


  const sendDataToServer = async (weight, height,gender) => {
    try {
      const apiUrl = `https://4ded-49-248-167-18.ngrok-free.app/api/participant/${userId}/bmi`; // Replace with your server URL

      const requestBody = {
        height,
        weight,
        gender,
      };

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Server Error');
      }

      console.log('Logged in successfully');
      navigation.navigate('PStarter2'); 
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  const Submit = () => {
    if (weight && height && gender) {
      sendDataToServer(weight, height, gender);
    } else {
      alert('Please fill in all the required fields');
    }
  };


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >

      <SafeAreaView style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10, flex: 1, paddingBottom: 160 }}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 130 }}>

            <Text style={{ fontSize: 30, }}>Participant Starter 1</Text>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
              <TextInput
                style={{
                  paddingLeft: 20, width: 250, height: 50, backgroundColor: 'white', borderRadius: 10
                }}
                onChangeText={setWeight}
                value={weight}
                placeholder={'Enter weight in kg'}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType="numeric" // Add this to show a numeric keyboard

              />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
              <TextInput
                style={{
                  paddingLeft: 20, width: 250, height: 50, backgroundColor: 'white', borderRadius: 10
                }}
                onChangeText={setHeight}
                value={height}
                placeholder={'Enter height in cm'}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType="numeric" // Add this to show a numeric keyboard

              />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>
              <TextInput
                style={{
                  paddingLeft: 20, width: 250, height: 50, backgroundColor: 'white', borderRadius: 10
                }}
                onChangeText={setGender}
                value={gender}
                placeholder={'Enter gender'}
                autoCorrect={false}
                autoCapitalize='none'
              />
            </View>

            <TouchableOpacity style={{ marginTop: 30 }} onPress={Submit}>
              <View style={{
                width: 200,
                height: 50,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: 'black'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold'
                }} >Submit</Text>
              </View>
            </TouchableOpacity>


          </View>
        </View>

      </SafeAreaView>

    </ScrollView>
  )
}

export default PStarter1