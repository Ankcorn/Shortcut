import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Main from "./Text";
import firebase from "firebase";


const Edit = styled.View`
  /* Rectangle 2: */
  border: 1px solid #5c5c5c;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  /*width: 60px;*/
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const ButtonText = styled.Text`
  font-family: SourceSansPro-Regular;
  font-size: 15px;
  color: #5c5c5c;
  letter-spacing: 1px;
`
const Container = styled.View`
  margin: 25px;
  margin-bottom: 15px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

const Description = styled.Text`
  /* You’ll be able to pu: */
  font-family: SourceSansPro-Regular;
  font-size: 16px;
  color: #296091;
  letter-spacing: 0;
`;

const EditView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-bottom: 20px;
`;

const ItemText = styled.Text`
    /* High contrast: */
    font-family: SourceSansPro-Regular;
    font-size: 16px;
    color: #454545;
    letter-spacing: 0;
`;

const UnderLine = styled.TextInput`
  font-family: SourceSansPro-Regular;
  border-bottom-color: black;
  border-bottom-width: 1px;
  width: 150px;
  margin-top: 10px;
  height: 35px;
`;


const Button = ({ edit, onPress, title, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Edit edit={edit}>
      <Ionicons style={{ paddingRight: 5 }} name={icon} />
      <ButtonText>{title}</ButtonText>
    </Edit>
  </TouchableOpacity>
);

export default class TextSelect extends React.Component {
  state = {
    editValue: "",
    profileNameValue: "",
    profileAgeValue: "",
    profileLangEditting: "",
    profileNameEditting: false,
    profileAgeEditting: false,
    profileLangEditting: false
  };

  async componentDidMount() {
    const users = firebase
      .database()
      .ref("users/" + "abc" + "/" + this.props.keyName);
    users.on("value", snapshot => {
      const exists = (snapshot.val() !== null);
      if(!exists) return;
      if(this.props.keyName === "profile") {
        return this.setState({
            profileNameValue: snapshot.val().name,
            profileAgeValue: snapshot.val().age,
        });
      }
      return this.setState({
        profileLangValue: snapshot.val().lang,
        
    });
      
    });
  }
  addItem = () => {
    this.setState({
      info: [...this.state.info, this.state.editValue],
      editValue: ""
    });
  };
  activateState = el => {
    //   if(this.state.edit) firebase.database().ref('users/' + "abc" + "/" + this.props.keyName).set(
    //     this.state.info
    //   );
    switch (el) {
      case "name":
        if(this.state.profileNameEditting) {
            firebase.database().ref('users/' + "abc" + "/" + this.props.keyName).set({
                name: this.state.profileNameValue,
                age: this.state.profileAgeValue,
            });
        }
        return this.setState({
          profileAgeEditting: false,
          profileNameEditting: !this.state.profileNameEditting
          
        });
      case "age":
        if(this.state.profileAgeEditting) {
            firebase.database().ref('users/' + "abc" + "/" + this.props.keyName).set({
                age: this.state.profileAgeValue,
                name: this.state.profileNameValue,
            });
        }
        return this.setState({
          profileAgeEditting: !this.state.profileAgeEditting,
          profileNameEditting: false
        });
      case "lang":
        if(this.state.profileLangEditting) {
            firebase.database().ref('users/' + "abc" + "/" + this.props.keyName).set({
                lang: this.state.profileLangValue
            });
        }
        return this.setState({
          profileLangEditting: !this.state.profileLangEditting
        });
    }
  };
  
  render() {
    const {
      edit,
      editValue,
      info,
      profile,
      profileLangValue,
      profileAgeValue,
      profileNameValue,
      profileNameEditting,
      profileAgeEditting,
      profileLangEditting
    } = this.state;
    return (
      <Container>
        <Header>
          <Main>{this.props.title}</Main>
        </Header>
        <Description>{this.props.description}</Description>
        {this.props.keyName === "profile" ? (
          <React.Fragment>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: 280,
                margin: 10
              }}
              onPress={() => this.activateState("name")}
            >
              {profileNameEditting ? (
                <UnderLine
                  onChangeText={editValue => this.setState({ profileNameValue:editValue })}
                  value={profileNameValue}
                />
              ) : (
                <ItemText>{profileNameValue}</ItemText>
              )}
              {!profileNameEditting ? (
                <Button
                  onPress={() => this.activateState("name")}
                  title="EDIT"
                  icon="md-create"
                />
              ) : (
                <Button
                  onPress={() => this.activateState("name")}
                  title="SAVE"
                  icon="md-save"
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: 280,
                margin: 10
              }}
              onPress={() => this.activateState}
            >
              {profileAgeEditting ? (
                <UnderLine
                  onChangeText={editValue => this.setState({ profileAgeValue:editValue })}
                  value={profileAgeValue}
                />
              ) : (
                <ItemText>{profileAgeValue}</ItemText>
              )}
              {!profileAgeEditting ? (
                <Button
                  onPress={() => this.activateState("age")}
                  title="EDIT"
                  icon="md-create"
                />
              ) : (
                <Button
                  onPress={() => this.activateState("age")}
                  title="SAVE"
                  icon="md-save"
                />
              )}
            </TouchableOpacity>
          </React.Fragment>
        ) : (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: 280,
              margin: 10
            }}
            onPress={() => this.activateState("lang")}
          >
            {profileLangEditting ? (
              <UnderLine
                onChangeText={editValue => this.setState({ profileLangValue:editValue })}
                value={profileLangValue}
              />
            ) : (
              <ItemText>{profileLangValue}</ItemText>
            )}
            {!profileLangEditting ? (
              <Button
                onPress={() => this.activateState("lang")}
                title="EDIT"
                icon="md-create"
              />
            ) : (
              <Button
                onPress={() => this.activateState("lang")}
                title="SAVE"
                icon="md-save"
              />
            )}
          </TouchableOpacity>
        )}
      </Container>
    );
  }
}
