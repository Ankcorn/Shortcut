import {
  createStackNavigator,
} from 'react-navigation';
import firebase from "firebase";

import Camera from './pages/Camera';
import HomeScreen from './pages/Home';

import env from './Env'

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  QR: {screen: Camera },
});

const config = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID
};
const firebaseApp = firebase.initializeApp(config);

const rootRef = firebase.database().ref();
const itemsRef = rootRef.child('items');

export default Navigation;