import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userId] = useState(1); // Replace this with actual user authentication

  const navigation = useNavigation();

  return (

    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={{ backgroundColor: '#93c5fd', paddingRight: 20, paddingLeft: 20, paddingTop: 10, display: 'flex', flex: 1, paddingBottom: 160 }}>


        {/* Explore Topics */}
        <View>
          <Text style={{ color: 'white', fontSize: 30, marginTop: 30, }}>Chats</Text>
        </View>

        <View style={{ marginTop: 40,  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 20, borderRadius: 30, }}>
          <TouchableOpacity onPress={() => navigation.navigate('Announcements')}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
             
                <Image
                  source={require('../assets/announcements.png')}
                  resizeMode="contain"
                  style={{ width: 30, height: 30, }}
                />

              <View>
                <Text style={{ fontSize: 30 ,fontWeight: 'bold'}}>Announcements</Text>
              </View>
            </View>
          </TouchableOpacity>


        </View >

      </SafeAreaView>

    </ScrollView>
  );
};

export default ChatScreen;
