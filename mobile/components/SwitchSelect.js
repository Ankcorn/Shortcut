import React from "react";
import { Text, TextInput, View, TouchableOpacity, Switch } from "react-native";
import styled, { css } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Main from "./Text";
import firebase from "firebase";

const Container = styled.View`
  margin: 25px;
  align-items: center;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 10px;
`;

const ToggleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  margin: 10px;
`;

const SwitchContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SwitchLabel = styled.Text`
  /* OFF: */
  font-family: SourceSansPro-Bold;
  font-size: 16px;
  color: #454545;
  letter-spacing: 0;
  text-align: right;
  padding-right: 5px;
`;

const Title = styled.Text`
  /* High contrast: */
  font-family: SourceSansPro-Regular;
  font-size: 16px;
  color: #454545;
  letter-spacing: 0;
`;

export default class ToggleSelect extends React.Component {
  state = {
    upgrade: false,
    type: false
  };

  async componentDidMount() {
    const users = firebase.database().ref("users/" + "abc" + "/preferrences");
    users.on("value", snapshot => {
      const exists = snapshot.val() !== null;
      if (!exists) return;
      return this.setState({
        upgrade: snapshot.val().upgrade,
        type: snapshot.val().type
      });
    });
  }
  toggle = setting => {
    if (setting === "class") {
      return firebase
        .database()
        .ref("users/" + "abc" + "/preferrences")
        .set({
            upgrade: !this.state.upgrade,
            type: this.state.type
        });
    }
    return firebase
      .database()
      .ref("users/" + "abc" + "/preferrences")
      .set({
        upgrade: this.state.upgrade,
        type: !this.state.type
      });
  };
  render() {
    return (
      <Container>
        <Header>
          <Main>{this.props.title}</Main>
        </Header>
        <ToggleWrapper>
          <Title>Standard Class</Title>
          <Switch
            value={this.state.upgrade}
            onChange={() => this.toggle("class")}
          />
          <Title>1st Class</Title>
        </ToggleWrapper>
        <ToggleWrapper>
          <Title>Single</Title>
          <Switch
            value={this.state.type}
            onChange={() => this.toggle("type")}
          />
          <Title>Return</Title>
        </ToggleWrapper>
      </Container>
    );
  }
}
