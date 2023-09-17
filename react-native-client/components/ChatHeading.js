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
        <Text style={styles.user}>{props.user}</Text>
      </View>
      <Text style={styles.LastText}>{props.LastText}</Text>
    </View>
  );
};

export default ChatHeading;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: 70,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.2,
    margin: 5,
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
    fontSize: 17,
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
