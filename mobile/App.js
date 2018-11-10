import {
  createStackNavigator,
} from 'react-navigation';
import firebase from "firebase";

import Camera from './pages/Camera';
import HomeScreen from './pages/Home';

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  QR: {screen: Camera },
}, { headerMode: 'none' });

export default Navigation;