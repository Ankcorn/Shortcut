import {
  createStackNavigator,
} from 'react-navigation';
import React from 'react';
import { Font, AppLoading } from 'expo';
import './firebase';

import Camera from './pages/Camera';
import HomeScreen from './pages/Home';

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  QR: {screen: Camera },
}, { headerMode: 'none' });

class FontLoader extends React.Component{
  state = {
    loaded: false
  }
  componentWillMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Promise.all([
      Font.loadAsync({'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf')}),
      Font.loadAsync({'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf')}),
      Font.loadAsync({'SourceSansPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf')}),
    ]);
    this.setState({loaded: true});
  }
  render(){
    if(!this.state.loaded) return <AppLoading />
    return <Navigation />;
  }
}

export default FontLoader;