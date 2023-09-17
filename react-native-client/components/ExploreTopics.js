import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { I18n } from 'i18n-js';




const i18n = new I18n(translations);


i18n.enableFallback = true;

const ExploreTopics = () => {
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
    <View style={{ zIndex: 10 }}>

      {/* Explore Topics */}
      <View>
        <Text style={{ color: 'white', fontFamily: 'dm-bold', fontSize: 30, marginTop: 30 }}>Explore Topics</Text>
      </View>

      <View style={{ marginTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('GymTopics')}>
          <View style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white', padding: 20, borderRadius: 20
          }}>
            <Image
              source={require('../assets/training.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, }}
            />
          </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RunningGearTopics')}>
          <View style={{

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white', padding: 20, borderRadius: 20
          }}>
            <Image
              source={require('../assets/running-shoes.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NutritionTopics')}>

          <View style={{

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white', padding: 20, borderRadius: 20
          }}>
            <Image
              source={require('../assets/nutrition.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('WaterIntakeTopics')}>

          <View style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white', padding: 20, borderRadius: 20
          }}>
            <Image
              source={require('../assets/water.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BooksTopics')}>

          <View style={{

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white', padding: 20, borderRadius: 20
          }}>
            <Image
              source={require('../assets/books.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SupplementTopics')}>

          <View style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'white', padding: 20, borderRadius: 20
          }}>
            <Image
              source={require('../assets/medicines.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, }}
            />
          </View>
        </TouchableOpacity>



      </View>
    </View >
  )
}

export default ExploreTopics