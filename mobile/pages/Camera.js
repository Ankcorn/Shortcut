import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {  Permissions, BarCodeScanner } from 'expo';

import firebase from "firebase";

import init from '../firebase';

const fire = init;

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        hasBarCode: false
      }
    
      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
      }
    
      render() {
        const { hasCameraPermission } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
              <BarCodeScanner
                onBarCodeRead={!this.state.hasBarCode ? this._handleBarCodeRead : false}
                style={StyleSheet.absoluteFill}
              />
            </View>
          );
        }
      }
    
      // Data is the TVM ID
      _handleBarCodeRead = ({ type, data }) => {
        const { navigate } = this.props.navigation;
        this.setState({hasBarCode: true})

        async function _pairTvm() {
          navigate('Home')
          try {
            let response = await fetch('https://us-central1-chuuchuu-758d6.cloudfunctions.net/pairTvm', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: 'user_abc',
                tvmId: data,
              }),
            });
            let responseJson = await response.json();
            } catch (error) {
              console.error(error);
            }
        };

        Alert.alert( 
            `Bar code with type ${type} and data ${data} has been scanned!`,
            `Bar code with type ${type} and data ${data} has been scanned!`,
            [
                {text: 'Help    ', onPress: () => navigate('Home')},
                {text: 'Cancel', onPress: () => navigate('Home'), style: 'cancel'},
                {text: 'OK', onPress: () => _pairTvm()},
              ],
              { cancelable: false }
        );
      }
    }