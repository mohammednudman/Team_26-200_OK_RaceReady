import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import io from 'socket.io-client';

const SERVER_URL = ''; // Replace with your Express server address

// const ChatScreen = ({ route }) => {
const ChatScreen = () => {
//   const { roomName, username } = route.params;
  const [message, setMessage] = useState('');
  const [roomName, setRoomName] = useState('template');
  const [username, setUsername] = useState('user');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    newSocket.emit('join room', roomName, username);

    return () => {
      newSocket.disconnect();
    };
  }, [roomName, username]);

  useEffect(() => {
    if (socket) {
      socket.on('chat history', (history) => {
        setMessages(history);
      });

      socket.on('chat message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    }
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const msg = {
        roomName,
        username,
        text: message.trim(),
        timestamp: new Date().toISOString(),
      };

      socket.emit('chat message', msg);
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.timestamp}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text>{`${item.username}: ${item.text}`}</Text>
              <Text>{item.timestamp}</Text>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ flex: 1, paddingHorizontal: 10 }}
            placeholder="Type a message..."
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;