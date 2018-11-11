import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import MainText from "../components/Text";
import Header from "../components/header";
import firebase from "firebase";

const Container = styled.View`
    flex: 1;
    background-color: white;
`;
export default class App extends React.Component {
  state = {
    name: ""
  };
  componentDidMount() {
    this.initUser();
  }
  initUser = () => {
    const users = firebase.database().ref("users/" + "abc" + "/" + "profile");
    users.on("value", snapshot => {
      const exists = snapshot.val() !== null;
      if (!exists) return;
      return this.setState({
        name: snapshot.val().name
      });
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header navigate={navigate} big menu description={`Hey, ${this.state.name}. Please complete the purchase on the Ticket Machine. `} />
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                height: 300,
                paddingTop: 100,
                justifyContent: 'center',
            }}>
                <Ionicons name="md-train" size={256}/>
            </View>
      </Container>
    );
  }
}