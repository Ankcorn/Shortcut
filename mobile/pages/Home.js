import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Icon from '../components/Icon';
import MainText from '../components/Text';
import Editty from '../components/editty';

export default class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Icon />
        </View>
        <View>
        <MainText>
          Hi, Leon. Are you ready to make your train ticket-buying experience a lot easier?
        </MainText>
        </View>
        <View>
        <TouchableOpacity onPress={(e) => navigate('QR') } >
          <Text style={styles.button}  accessibilityLabel="Learn more about this purple button">Scan</Text>
        </TouchableOpacity>
        </View>
        <Editty title="Name and age"/>
        <Editty title="Preferred settings"/>
        <Editty title="Travel Card"/>
        <Editty title="Accessability"/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    width: 200,
    textAlign:'center',
  },
  welcome: {
      fontSize: 42,
      letterSpacing: 4
  }
});
