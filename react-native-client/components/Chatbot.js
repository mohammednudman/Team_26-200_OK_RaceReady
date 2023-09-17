import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import axios, { all } from 'axios';
import ChatHeading from './ChatHeading';

export default function Chatbot({ navigation }) {
  const [userInput, setUserInput] = useState();
  const [symptoms, setSymptoms] = useState([]);
  const [prediction, setPrediction] = useState();
  const [description, setDescription] = useState();
  const [treatment1, setTreatment1] = useState();
  const [treatment2, setTreatment2] = useState();
  const [treatment3, setTreatment3] = useState();
  const [treatment4, setTreatment4] = useState();
  const [error, setError] = useState(false);
  const [allMsgs, setAllMsgs] = useState([]);

  const donePressed = async () => {
    

  };

  const handleAddUserInput = () => {
    setAllMsgs([...allMsgs, { u: userInput }]);
    setSymptoms([...symptoms, userInput]);
    setUserInput(null);
  };

  React.useEffect(() => {
    allMsgs.map((value, index) => {
      console.log(index);
      console.log(value);
    });
  }, [allMsgs]);

  return (
    <>
      <View style={styles.container}>
        <ChatHeading />
        <View style={styles.messageWrapper}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <ScrollView style={styles.scrollarea}>
            <View style={styles.items}>
              <BotMessage user="Mom" text="Hiii" />
              <BotMessage user="Dad" text="Hello" />
              <BotMessage
                user="Rohan"
                text="Welcome to the biggest line I am going to write today Seems everything is working good"
              />



              {allMsgs.map((value, index) => {
                console.log(Object.keys(value) == 'u');
                console.log(value['u']);
                console.log(value['b']);
                // Object.keys(value) == 'u' ? (
                //   <UserMessage key={index} text={value['u']} />
                // ) : (
                //   <BotMessage key={index} text={value['b']} />
                // );
                if (Object.keys(value) == 'u') {
                  return (
                    <UserMessage key={index} user="Me" text={value['u']} />
                  );
                } else {
                  return <BotMessage key={index} user="Me" text={value['b']} />;
                }
              })}

              <BotMessage
                user="Rohan"
                text="Welcome to the biggest line I am going to write today Seems everything is working good"
              />
            </View>
          </ScrollView>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Write your message here'}
            value={userInput}
            onChangeText={text => {
              setUserInput(text);
            }}
          />

          <TouchableOpacity onPress={() => handleAddUserInput()}>
            <View style={styles.addWrapper}>
              <Image
                style={styles.image}
                source={require('../assets/send_message.png')}
              />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF7FF',
  },

  messageWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#042E49',
    marginTop: 20,
  },

  items: {
    marginTop: 20,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '85%',
    height: 50,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.2,
    backgroundColor: '#fff',
  },

  image: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollarea: {
    height: '85%',
  },

  ConfirmButton: {
    backgroundColor: '#0988D7',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
  },
});
