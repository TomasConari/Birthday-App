import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDYRIsroLO-lM0WxYrMCnS6lle1RY2ZU-U",
    authDomain: "birthday-app-39760.firebaseapp.com",
    projectId: "birthday-app-39760",
    storageBucket: "birthday-app-39760.appspot.com",
    messagingSenderId: "847568863582",
    appId: "1:847568863582:web:0b44d49635c92098eb4fcf"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);

// Inicialización de Auth
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth, createUserWithEmailAndPassword };
