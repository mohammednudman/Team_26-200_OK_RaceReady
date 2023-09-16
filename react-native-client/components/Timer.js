import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useMarathonContext } from '../MarathonContext';

export default function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const { run, setRun } = useMarathonContext(); // Access the run state and setRun function

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
        setRun(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <View style={{ width: 320, backgroundColor: 'white', borderRadius: 25, padding: 20, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 30 }}>
                    <View style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <Image
                            source={require('../assets/kms.png')}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: 'black' }}
                        />
                        <Text style={{ fontSize: 30 }}>5 Kms</Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <Image
                            source={require('../assets/steps.png')}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: 'black' }}
                        />
                        <Text style={{ fontSize: 30 }}>2000</Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <Image
                            source={require('../assets/time.png')}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: 'black' }}
                        />
                        <Text style={{ fontSize: 30 }}>{`${Math.floor(seconds / 60)}:${(
                            '0' + (seconds % 60)
                        ).slice(-2)}`}</Text>
                    </View>

                </View>

                {!isRunning ? (

                    <TouchableOpacity style={{ marginTop: 30 }} onPress={startTimer}>
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            backgroundColor: 'black'
                        }}>
                            <Image
                                source={require('../assets/start.png')}
                                resizeMode="contain"
                                style={{ width: 25, height: 25, tintColor: 'white' }}
                            />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={{ marginTop: 30 }} onPress={stopTimer}>
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            backgroundColor: 'red'
                        }}>
                            <Image
                                source={require('../assets/stop.png')}
                                resizeMode="contain"
                                style={{ width: 25, height: 25, tintColor: 'white' }}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            </View>


        </View>
    );
}
