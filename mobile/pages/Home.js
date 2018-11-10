import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";
import Icon from "../components/Icon";
import MainText from "../components/Text";
import Header from "../components/header";
import Editty from "../components/editty";
import qrIcon from "../assets/QR.png"

export default class App extends React.Component {
  state = {
    keyboardOpen: false
  }
  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidChange);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidChange);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidChange = () => {
    this.setState({keyboardOpen: !this.state.keyboardOpen})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header big menu/>
        {!this.state.keyboardOpen && <React.Fragment>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={e => navigate("QR")}>
            <View
              style={styles.button}
            >
              <Image source={qrIcon} />
              <Text style={styles.buttonText} accessibilityLabel="Click this button to scan the qr code">SCAN QR</Text>
            </View>
          </TouchableOpacity>
        </View></React.Fragment>}

        <Editty title="Name and age" />
        <Editty title="Preferred settings" />
        <Editty title="Travel Card" />
        <Editty title="Accessability" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    alignSelf: 'center'
  },
  button: {
    backgroundColor: "#296091",
    shadowColor: '#000',
    shadowOffset: {  width: 0,  height: 4,  },
    shadowRadius: 4,
    borderRadius: 15,
    width: 305,
    height: 98,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
    overflow: "hidden",
    textAlign: "right"
  },
  welcome: {
    fontSize: 42,
    letterSpacing: 4
  },
  form: {
    flex: 1,
    justifyContent: "space-between"
  }
});
