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
    highContrast: false,
    largeText: false
  };

  async componentDidMount() {
      const users = firebase.database().ref('users/' + "abc" + "/accessability")
      users.on('value', (snapshot) => {
        const exists = (snapshot.val() !== null);
        if(!exists) return;
        return this.setState({
            highContrast: snapshot.val().highContrast,
            largeText: snapshot.val().largeText
        });
      });
  }
  toggle = (setting) => {
    if(setting==='contrast') {
        return firebase.database().ref('users/' + "abc" + "/accessability").set({
            highContrast: !this.state.highContrast,
            largeText: this.state.largeText
        })
    }
    return firebase.database().ref('users/' + "abc" + "/accessability").set({
        highContrast: this.state.highContrast,
        largeText: !this.state.largeText
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Main>{this.props.title}</Main>
        </Header>
        <ToggleWrapper>
          <Title>High contrast</Title>
          <SwitchContainer>
            <SwitchLabel>{this.state.highContrast ? 'ON': 'OFF'}</SwitchLabel>
            <Switch value={this.state.highContrast} onChange={()=>this.toggle('contrast')}/>
          </SwitchContainer>
        </ToggleWrapper>
        <ToggleWrapper>
          <Title>Larger text</Title>
          <SwitchContainer>
            <SwitchLabel>{this.state.largeText ? 'ON': 'OFF'}</SwitchLabel>
            <Switch value={this.state.largeText} onChange={()=>this.toggle('text')}/>
          </SwitchContainer>
        </ToggleWrapper>
      </Container>
    );
  }
}
