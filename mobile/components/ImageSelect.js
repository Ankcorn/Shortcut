import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Switch,
  Image
} from "react-native";
import styled, { css } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./ListSelect";
import Main from "./Text";
import firebase from "firebase";
import railcard from "../assets/railcard.gif";

const Container = styled.View`
  margin: 25px;
  align-items: center;
`;
const ItemText = styled.Text`
  /* High contrast: */
  font-family: SourceSansPro-Regular;
  font-size: 16px;
  color: #454545;
  letter-spacing: 0;
`;

const EditImage = styled.View`
  width: 300px;
  height: 180px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 2px solid #454545;
  padding: 30px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 15px;
`;

export default class ImageSelect extends React.Component {
  state = {
    edit: false
  };

  toggle = () => this.setState({ edit: !this.state.edit });
  render() {
    return (
      <Container>
        <Header>
          <Main>{this.props.title}</Main>
          {!this.state.edit ? (
            <Button onPress={this.toggle} title="EDIT" icon="md-create" />
          ) : (
            <Button onPress={this.toggle} title="SAVE" icon="md-save" />
          )}
        </Header>
        {!this.state.edit ? (
          <Image source={railcard} />
        ) : (
          <TouchableOpacity>
            <EditImage>
              <ItemText>
                Please upload a clear picture of your rail card
              </ItemText>
            </EditImage>
          </TouchableOpacity>
        )}
      </Container>
    );
  }
}
