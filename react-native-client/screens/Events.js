import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Events = () => {
  const navigation = useNavigation();

  // Function to navigate to the EventScreen with event details
  const navigateToEventScreen = () => {
    // Pass event details as params
    navigation.navigate('EventScreen', {
      eventName: "Run Mumbai Run",
      amount: 100,
      location: 'Mumbai',
    });
  };


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={{ backgroundColor: '#d9f99d', paddingRight: 20, paddingLeft: 20, paddingTop: 10, display: 'flex', flex: 1, paddingBottom: 160 }}>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 30 }}>
          <Text style={{ fontSize: 30, fontFamily: 'dm-bold' }}>Events</Text>
        </View>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <TouchableOpacity onPress={navigateToEventScreen}>
              <View style={{ maxWidth: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, borderRadius: 20, paddingBottom: 20 }}>
                <Image
                  source={require('../assets/m1.jpg')}
                  resizeMode="cover"
                  style={{ width: 300, height: 330, borderRadius: 20 }}
                />
                <Text style={{ fontSize: 30, fontFamily: 'dm-bold', marginTop: 10 }}>Run Mumbai Run</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      source={require('../assets/location.png')}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 20, fontFamily: 'dm-bold', marginTop: 10 }}>Mumbai</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      source={require('../assets/runner.png')}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 20, fontFamily: 'dm-bold', marginTop: 10 }}>2000+</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      source={require('../assets/money.png')}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 20, fontFamily: 'dm-bold', marginTop: 10 }}>100/-</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {/* Add more event items here */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Events;
