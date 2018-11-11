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
  ScrollView,
  Dimensions
} from "react-native";
import MainText from "../components/Text";
import Header from "../components/header";
import ListSelect from "../components/ListSelect";
import TextSelect from "../components/TextSelect";
import ToggleSelect from '../components/ToggleSelect';
import ImageSelect from '../components/ImageSelect';
import SwitchSelect from '../components/SwitchSelect';
import qrIcon from "../assets/QR.png";
import firebase from "firebase";
import background from "../assets/pexels-photo-543223.png";
import backgroundMini from "../assets/pexels-mini.png";
import logo from "../assets/logo.png";
import init from "../firebase";

const fire = init;

export default class App extends React.Component {
  state = {
    keyboardOpen: false,
    name: "leon"
  };
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidChange
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidChange
    );
    this.initUser();
  }
  initUser = async () => {
    const users = firebase.database().ref("users/" + "abc" + "/" + "profile");
    users.on("value", snapshot => {
      const exists = snapshot.val() !== null;
      if (!exists) return;
      return this.setState({
        name: snapshot.val().name
      });
    });
  };
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidChange = () => {
    this.setState({ keyboardOpen: !this.state.keyboardOpen });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Header
          big
          menu
          description={`Hi, ${
            this.state.name
          }. Are you ready to make your train ticket-buying experience a lot easier?`}
        />
        {!this.state.keyboardOpen && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={e => navigate("QR")}>
              <View style={styles.button}>
                <Image source={qrIcon} />
                <Text
                  style={styles.buttonText}
                  accessibilityLabel="Click this button to scan the qr code"
                >
                  SCAN QR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <KeyboardAvoidingView behavior="padding">
          {/* <Editty title="Name and age" />
        <Editty title="Preferred settings" />
        <Editty title="Travel Card" />
        <Editty title="Accessability" /> */}
          <TextSelect
            title="Name and age"
            keyName="profile"
            description="For personalised recommendations on discounts you might qualify for."
          />
          <TextSelect
            title="Preferred language"
            keyName="local"
            description="If possible, we’ll automatically set the language to your preference"
          />
          <SwitchSelect
            title="Preferred language"
          />
          <ImageSelect
            title="Rail Cards"
          />
          <ToggleSelect
            title="Accessability at the ticket machine"
            keyName="accessability"
          />
          <ListSelect
            title="My favourite destinations"
            keyName="favourites"
            description="You’ll be able to purchase these with a single tap at the machine."
          />
        </KeyboardAvoidingView>
        <View>
            <Image
              style={{ width: "100%", height: "150%" }}
              resizeMode="stretch"
              source={logo}
            />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    alignItems: "center"
  },
  buttonContainer: {
    alignSelf: "center"
  },
  button: {
    backgroundColor: "#296091",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    borderRadius: 15,
    width: 305,
    height: 98,
    fontFamily: 'SourceSansPro-Bold',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
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
