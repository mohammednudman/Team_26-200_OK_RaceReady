import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const BotMessage = props => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Text style={props.user}>{props.user}</Text>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
  },

  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '85%',
    borderColor: '000',
  },
  itemLeft: {
    flexDirection: 'column',
    flextWrap: 'wrap',
  },
  user: {
    fontSize: 7,
    color: '#000',
  },
  square: {
    width: 24,
    height: 24,
  },
  itemText: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingRight: 7,
    color: '#000',
  },
});

export default BotMessage;
