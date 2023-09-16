import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Starter = () => {

    const navigation = useNavigation();
    const [isLoaded] = useFonts({
        'dm': require('../assets/fonts/DMSans-Regular.ttf'),
        'dm-bold': require('../assets/fonts/DMSans-Bold.ttf'),
        'dm-semibold': require('../assets/fonts/DMSans-SemiBold.ttf'),
        'dm-thin': require('../assets/fonts/DMSans-Thin.ttf'),
        'dm-medium': require('../assets/fonts/DMSans-Medium.ttf'),
    });


    if (!isLoaded) {
        return null;
    }

    return (
        <View style={styles.view}>
            <Image
                source={require('../assets/starter.gif')}
                resizeMode="cover"
                style={{
                    width: 280, height: 250, borderWidth: 100, borderColor: 'gray', marginTop: 20,
                    borderRadius: 40
                }}
            />
            <Text style={{ fontSize: 40, marginTop: 50, fontFamily: 'dm' }}>RaceReady</Text>
            <Text style={{ fontSize: 17, marginTop: 10 }}>Run Together, Achieve Together</Text>
            <TouchableOpacity onPress={() => navigation.push('Role')}>
                <View style={styles.view3}>
                    <Text style={styles.login} >Next</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default Starter

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flex: 1,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 90,
        width: 200,
        height: 50,
        borderRadius: 15,
        backgroundColor: "transparent",
        borderColor: 'red',
        borderWidth: 1,
    },
    view3: {
        borderColor: 'red',
        borderWidth: 2,
        width: 150,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    view4: {
        borderColor: 'red',
        borderWidth: 2,
        width: 120,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    text: {
        marginTop: 50,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: 'red',
        width: 1,
        height: 30,
    },
    signup: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    login: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        padding: 10,
        color: 'white',
    },
    text2: {
        marginTop: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '800'
    },
});