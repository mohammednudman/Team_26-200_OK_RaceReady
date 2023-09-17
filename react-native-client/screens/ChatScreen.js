import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Chatbot from '../components/Chatbot';


// const ChatScreen = ({ route }) => {
const ChatScreen = () => {
//   const { roomName, username } = route.params;
  const [messages, setMessages] = useState([]);
  const sendMessage = async (messageText, userId) => {
    try {
      const message = {
        text: messageText,
        userId: userId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
  
      await db.collection('messages').add(message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

  return (

      <View style={{ flex: 1 }}>

      </View>
  );
};

export default ChatScreen;