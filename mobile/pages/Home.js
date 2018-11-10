import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import Icon from "../components/Icon";
import MainText from "../components/Text";
import Header from "../components/header";
import Editty from "../components/editty";

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
      <View>
        <Header />
        {!this.state.keyboardOpen && <React.Fragment>
        <View>
          <TouchableOpacity onPress={e => navigate("QR")}>
            <Text
              style={styles.button}
              accessibilityLabel="Learn more about this purple button"
            >
              Scan
            </Text>
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
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    width: 200,
    textAlign: "center"
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
