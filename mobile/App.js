import {
  createStackNavigator,
} from 'react-navigation';
import firebase from "firebase";

import Camera from './pages/Camera';
import HomeScreen from './pages/Home';

<<<<<<< HEAD
=======
import env from './Env'

>>>>>>> 6c80d54396180df2728b415447529a34a39d89d7
const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  QR: {screen: Camera },
}, { headerMode: 'none' });

<<<<<<< HEAD
=======
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

>>>>>>> 6c80d54396180df2728b415447529a34a39d89d7
export default Navigation;