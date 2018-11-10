import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Main from "./Text";
import firebase from "firebase";
import env from '../Env'

const config = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    databaseURL: env.DATABASE_URL,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID
  };
  const firebaseApp = firebase.initializeApp(config);
  
  const rootRef = firebase.database().ref();

const Edit = styled.View`
    /* Shape: */
    ${props => props.edit ? css`
        background-color: grey;
    `: null}
    /* EDIT: */
    /* font-family: SourceSansPro-Regular; */
    font-size: 15px;
    color: #5c5c5c;
    letter-spacing: 1px;
    /* Rectangle 2: */
    border: 1px solid #5c5c5c;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

const Container = styled.View`
    margin: 10px;
    margin-bottom: 25px;
`;

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
`;

const EditView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 220px;
`;

const Submit = styled.Text`
    color: red;
    margin: 20px;
`;

const UnderLine = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    flex: 1;
`;

const EditButton = ({ edit, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Edit edit={edit}>
            <Ionicons name="md-create"/>
            <Text>EDIT</Text>
        </Edit>
    </TouchableOpacity>
);

export default class Editty extends React.Component { 
  state = {
      edit: false,
      info: [],
      editValue: ''  
  }
  addItem() {
      //this.setState({info: [...this.state.info, this.state.editValue]})
      firebase.database().ref('users/' + "abc").set({
        "hello": "wasup"
    });
  }
  addItem = () => this.setState({info: [...this.state.info, this.state.editValue], editValue: ''})
  activateState = () => this.setState({edit: !this.state.edit})
  removeItem = (el) => this.setState({info: this.state.info.filter((txt) => txt !== el) })
  render() {
    const { edit, editValue, info } = this.state;
    return (
      <Container>
        <Header>
          <Main>{this.props.title}</Main>
          <EditButton onPress={this.activateState} edit={edit} />
        </Header>
        {edit && <EditView>
            <UnderLine onChangeText={(editValue) => this.setState({editValue})} value={editValue}/>
            <TouchableOpacity onPress={this.addItem}><Submit>Submit</Submit></TouchableOpacity>
        </EditView>}
        {info.map(el => !edit ?  <Text key={el}>{el}</Text> : <TouchableOpacity key={el} onPress={() => this.removeItem(el)}><Text>{el}</Text></TouchableOpacity>)}
      </Container>
    );
  }
}
