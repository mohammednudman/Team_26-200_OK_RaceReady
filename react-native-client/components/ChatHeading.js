import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ChatHeading = props => {
  return (
    <View style={styles.root}>
      <View style={styles.heading}>
        <Image
          style={styles.profilePic}
          source={require('../assets/chatbot.png')}
        />
        <Text style={styles.user}>Chats</Text>
      </View>
    </View>
  );
};

export default ChatHeading;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: 70,
    margin: 5,
    padding: 20
  },

  heading: {
    flexDirection: 'row',
  },

  profilePic: {
    width: 35,
    height: 35,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },

  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 5,
    marginTop: 5,
  },

  LastText: {
    fontSize: 15,
    marginLeft: 60,
  },
});
