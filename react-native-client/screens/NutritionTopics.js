import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { I18n } from 'i18n-js';
import { SafeAreaView } from 'react-native-safe-area-context'


const i18n = new I18n(translations);


i18n.enableFallback = true;
const SupplementTopics = () => {

    const { languageSelected, setLanguageSelected } = useLanguage();
    i18n.locale = languageSelected;

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

    const navigation = useNavigation();

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <SafeAreaView style={{ backgroundColor: '#d9f99d', paddingRight: 20, paddingLeft: 20, paddingTop: 10, display: 'flex', flex: 1, paddingBottom: 160 }}>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                    <Text style={{ fontSize: 30, fontFamily: 'dm-bold' }}>Nutrition for Runners </Text>
                </View>
                <ScrollView vertical showsHorizontalScrollIndicator={false}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity>
                            <View style={{maxWidth: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, borderRadius: 20, paddingBottom: 20, backgroundColor: '#a7f3d0' }}>
                                <Image
                                    source={require('../assets/n1.jpg')}
                                    resizeMode="cover"
                                    style={{ width: 300, height: 330, borderRadius: 20, }}
                                />
                                <Text style={{ fontSize: 20, fontFamily: 'dm', marginTop: 20 }}>Morning Breakfast</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ maxWidth: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  borderRadius: 20, marginTop: 30, paddingBottom: 20,  backgroundColor: '#a7f3d0' }}>
                                <Image
                                    source={require('../assets/n2.jpg')}
                                    resizeMode="cover"
                                    style={{ width: 300, height: 330, borderRadius: 20, }}
                                />
                                <Text style={{ fontSize: 20, fontFamily: 'dm', marginTop: 20 }}>Lunch</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ maxWidth: 300,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 20,  marginTop: 30, paddingBottom: 20, backgroundColor: '#a7f3d0' }}>
                                <Image
                                    source={require('../assets/n3.jpg')}
                                    resizeMode="cover"
                                    style={{ width: 300, height: 330, borderRadius: 20, }}
                                />
                                <Text style={{ fontSize: 20, fontFamily: 'dm', marginTop: 20, }}>Dinner</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </SafeAreaView>

        </ScrollView>
    )
}

export default SupplementTopics