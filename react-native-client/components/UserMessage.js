import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const UserMessage = props => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          {/* <Image
            style={styles.square}
            source={require('../assets/chatbot.png')}
          /> */}
          <Text style={styles.user}>{props.user}</Text>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserMessage;

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-end',
  },

  item: {
    backgroundColor: '#0988D7',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '75%',
    borderColor: '000',
  },

  // user Heading writing "me" just entered
  user: {
    color: '#ffffff',
    fontSize: 13,
  },
  itemLeft: {
    flexDirection: 'column',
    flextWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
  },
  itemText: {
    // marginLeft: 10,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
