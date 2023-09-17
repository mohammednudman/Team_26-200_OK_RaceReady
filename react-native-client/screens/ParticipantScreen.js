import { View, Text, Image, TouchableOpacity, ScrollView, Animated, Linking, Platform, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import ExploreTopics from '../components/ExploreTopics';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Search from '../components/Search';
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import { SelectList } from 'react-native-dropdown-select-list'
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import Timer from '../components/Timer';
import { useMarathonContext } from '../MarathonContext';
import Events from "../screens/Events"
import * as Font from 'expo-font';



const i18n = new I18n(translations);

i18n.locale = Localization.locale;

i18n.enableFallback = true;

let customFonts = {
  'dm': require('../assets/fonts/DMSans-Regular.ttf'),
  'dm-bold': require('../assets/fonts/DMSans-Bold.ttf'),
  'dm-semibold': require('../assets/fonts/DMSans-SemiBold.ttf'),
};

const ParticipantScreen = () => {
  const [isLoaded] = useFonts(customFonts);

  const [dropdownSelectedOption, setDropdownSelectedOption] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(Localization.locale);

  const { run, setRun } = useMarathonContext(); // Access the run state and setRun function

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [linkOptions, setLinkOptions] = useState({
    home: true,
    search: false,
    events: false,
    profile: false
  })
  const navigation = useNavigation();
  const slideValue = new Animated.Value(0);
  const { languageSelected, setLanguageSelected } = useLanguage();
  const [fontLoaded, setFontLoaded] = useState(false);

  
  if (!isLoaded) {
    return null;
  }

  // const [isLoaded] = useFonts({
  //   'dm': require('../assets/fonts/DMSans-Regular.ttf'),
  //   'dm-bold': require('../assets/fonts/DMSans-Bold.ttf'),
  //   'dm-semibold': require('../assets/fonts/DMSans-SemiBold.ttf'),
  //   'dm-thin': require('../assets/fonts/DMSans-Thin.ttf'),
  //   'dm-medium': require('../assets/fonts/DMSans-Medium.ttf'),
  // });





  // useEffect(() => {
  //   const loadCustomFont = async () => {
  //     await Font.loadAsync({
  //       'dm': require('../assets/fonts/DMSans-Regular.ttf'),
  //       'dm-bold': require('../assets/fonts/DMSans-Bold.ttf'),
  //       'dm-semibold': require('../assets/fonts/DMSans-SemiBold.ttf'),
  //     });
  //     setFontLoaded(true);
  //   };

  //   loadCustomFont();
  // }, [])



  const ListOptions = [
    { key: '1', value: 'English' },
    { key: '2', value: 'Hindi' },
    { key: '3', value: 'Marathi' },
    { key: '4', value: 'Assamese' },
    { key: '5', value: 'Bengali' },
    { key: '6', value: 'Gujarati' },
    { key: '7', value: 'Oriya' },
  ]



  const changeLanguage = (newLanguage) => {
    setLanguageSelected(newLanguage);
    setCurrentLanguage(newLanguage);
    i18n.locale = newLanguage;
  };




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.timing(slideValue, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };



  const menuTranslateX = slideValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  const handleCallPress = () => {


    if (Platform.OS == 'android') {
      Linking.openURL("tel: 9137244728");
    }
    else {
      Linking.openURL("telprompt: 9137244728");
    }

  };


  return (
    <>


      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {linkOptions.home == true && (

          <SafeAreaView style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10, backgroundColor: '#fcd34d', flex: 1, paddingBottom: 160 }}>

            <View style={{ padding: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', backgroundColor: 'white' }}>

              <TouchableOpacity onPress={toggleMenu}>
                <View>
                  <Image
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, fontFamily: 'dm-bold' }}>Race Ready</Text>

              {/* Profile Icon  */}
              <TouchableOpacity onPress={handleCallPress}>
                <View>
                  <Image
                    source={require('../assets/phone.png')}
                    resizeMode="contain"
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* {locale !== 'en' ? <Button title="Switch to english" onPress={() => setLocale('en')} /> : undefined} */}

            <View style={{ marginTop: 20 }}>

              <SelectList
                setSelected={(val) => changeLanguage(val)}
                boxStyles={{ borderColor: 'white', color: 'white' }} //override default styles
                data={ListOptions}
                save="value"
              // defaultOption={{ key: '2', value: 'Hindi' }}   //default selected option

              />

            </View>



            <Text style={{ fontFamily: 'dm-medium', fontSize: 34, marginTop: 20, color: 'white' }}>{i18n.t('Welcome')}</Text>
            <Text style={{ fontFamily: 'dm', fontSize: 20, color: 'white', marginTop: 10 }}>Let's get you ready for marathon</Text>

            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              {

                run ? <Timer /> : (

                  <>
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
                        <Text style={{ fontSize: 30 }}>20:00</Text>
                      </View>

                    </View>

                    <TouchableOpacity style={{ marginTop: 30 }} onPress={() => setRun(true)}>
                      <View style={{
                        width: 230,
                        height: 80,
                        borderRadius: 20,
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: 'black'
                      }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Start Running</Text>
                      </View>
                    </TouchableOpacity>
                  </>
                )
              }

            </View>
            <ExploreTopics />

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
              <Text style={{ color: 'white', fontSize: 30, fontFamily: 'dm' }}>Communities</Text>
              <Text style={{ color: 'white', fontSize: 15, fontFamily: 'dm', textDecorationLine: "underline" }}>{i18n.t('View all')}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, borderRadius: 20, paddingBottom: 10, backgroundColor: '#dcfce7' }}>
                    <Image
                      source={require('../assets/community-2.jpg')}
                      resizeMode="cover"
                      style={{ width: 200, height: 230, borderRadius: 20, }}
                    />
                    <Text style={{ fontSize: 25, fontFamily: 'dm', marginTop: 10 }}>Mumbai Elite</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, borderRadius: 20, paddingBottom: 10, backgroundColor: '#dcfce7' }}>
                    <Image
                      source={require('../assets/community-3.jpg')}
                      resizeMode="cover"
                      style={{ width: 200, height: 230, borderRadius: 20, }}
                    />
                    <Text style={{ fontSize: 25, fontFamily: 'dm', marginTop: 10 }}>LifeLong Run</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, borderRadius: 20, paddingBottom: 10, backgroundColor: '#dcfce7' }}>
                    <Image
                      source={require('../assets/community-1.jpg')}
                      resizeMode="cover"
                      style={{ width: 200, height: 230, borderRadius: 20, }}
                    />
                    <Text style={{ fontSize: 25, fontFamily: 'dm', marginTop: 10, }}>Runner World</Text>
                  </View>
                </TouchableOpacity>

              </View>

            </ScrollView>



          </SafeAreaView>)}
      </ScrollView>

      {linkOptions.search == true && <Search />}
      {linkOptions.events == true && <Events />}



      {/* BottomNavigator */}

      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 20, }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 70, backgroundColor: 'white', }}>
          <TouchableOpacity onPress={() => setLinkOptions({
            home: true,
            search: false,
            events: false,
            profile: false
          })}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={[styles.icon, { tintColor: linkOptions.home == true ? 'blue' : 'black' }]}
              />
              <Text style={{ color: linkOptions.home == true ? 'blue' : 'black' }}>{i18n.t('Home')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLinkOptions({
            home: false,
            search: true,
            events: false,
            profile: false
          })}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/search.png')}
                resizeMode="contain"
                style={[styles.icon, { tintColor: linkOptions.search == true ? 'blue' : 'black' }]}
              />
              <Text style={{ color: linkOptions.search == true ? 'blue' : 'black' }}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLinkOptions({
            home: false,
            search: false,
            events: true,
            profile: false
          })}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/events.png')}
                resizeMode="contain"
                style={[styles.icon, { tintColor: linkOptions.events == true ? 'blue' : 'black' }]}
              />
              <Text style={{ color: linkOptions.events == true ? 'blue' : 'black' }}>Events</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLinkOptions({
            home: false,
            search: false,
            events: false,
            profile: true
          })}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/user.png')}
                resizeMode="contain"
                style={[styles.icon, { tintColor: linkOptions.profile == true ? 'blue' : 'black' }]}
              />
              <Text style={{ color: linkOptions.profile == true ? 'blue' : 'black' }}>{i18n.t('Profile')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>


  )
}

export default ParticipantScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30, height: 30,
  },
});