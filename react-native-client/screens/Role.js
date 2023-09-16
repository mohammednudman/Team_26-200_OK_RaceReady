import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import volunteer from "../assets/volunteer.png"
import participant from "../assets/participant.png"
import organizer from "../assets/organizer.png"
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { translations } from '../translations';
import { I18n } from 'i18n-js';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLanguage } from '../LanguageContext';


const i18n = new I18n(translations);


i18n.enableFallback = true;
const Role = () => {

    const { languageSelected, setLanguageSelected } = useLanguage();
    i18n.locale = languageSelected;

    const navigation = useNavigation();
    const [submitted, setSubmitted] = useState(false);
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
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#15803d' }}
        >


            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <View>
                    <Text style={{ fontFamily: 'dm-bold', fontSize: 40, color: 'white' }}>{`Help us to \n Identify yourself`}</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', }}>
                    <TouchableOpacity onPress={() => navigation.push('ParticipantSignup')}>
                        <View style={{
                            display: 'flex', alignItems: 'center', shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            marginTop: 50,
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            elevation: 6, justifyContent: 'space-between', backgroundColor: '#86efac', flexDirection: 'row', padding: 20, borderRadius: 20
                        }}>
                            <Image
                                source={participant}
                                resizeMode="contain"
                                style={{ width: 120, height: 120 }}
                            />
                            <Text style={{ fontSize: 38, fontFamily: 'dm-bold' }}>Participant</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.push('VolunteerSignup')}>
                        <View style={{
                            display: 'flex', flexDirection: 'row',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            marginTop: 30,
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            elevation: 6, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#86efac', padding: 20, borderRadius: 20
                        }}>
                            <Image
                                source={volunteer}
                                resizeMode="contain"
                                style={{ width: 100, height: 120 }}
                            />
                            <Text style={{ fontSize: 38, fontFamily: 'dm-bold' }}>Volunteer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
 


            </View>

        </View>

    )
}

export default Role