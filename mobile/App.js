import {
  createStackNavigator,
} from 'react-navigation';
import firebase from "firebase";

import Camera from './pages/Camera';
import HomeScreen from './pages/Home';

require('dotenv').config()

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  QR: {screen: Camera },
});

const config = {
  apiKey: proces.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: procees.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);

const rootRef = firebase.database().ref();
const itemsRef = rootRef.child('items');
export default Navigation;