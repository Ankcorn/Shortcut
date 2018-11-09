import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, Alert, BarCodeScanner } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    barcodeScanning: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onBarCodeScanned = code => {
    this.setState(
      { barcodeScanning: !this.state.barcodeScanning },
      Alert.alert(`Barcode found: ${code.data}`)
    );
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            barCodeScannerSettings={{
                barCodeTypes: [
                    BarCodeScanner.Constants.BarCodeType.qr,
                ]
            }} 
            onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}
            style={{ flex: 1 }}
            type={this.state.type}
            ratio="9:9">
          </Camera>
        </View>
      );
    }
  }
}