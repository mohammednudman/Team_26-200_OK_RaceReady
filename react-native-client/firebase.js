import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOEylOChTyrlPIQcSZP0Ff9tqrIuUdtwA",
    authDomain: "racerw-40735.firebaseapp.com",
    projectId: "racerw-40735",
    storageBucket: "racerw-40735.appspot.com",
    messagingSenderId: "894123707151",
    appId: "1:894123707151:web:19856372a7d84a66be4c7a",
    measurementId: "G-GEEPYRDLWG"
  };


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = firebase.firestore();

export { db };