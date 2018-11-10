import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Main from "./Text";
import firebase from "firebase";


import init from '../firebase';

const fire = init;

const Edit = styled.View`
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
    /*width: 60px;*/
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

const Container = styled.View`
    margin: 25px;
    margin-bottom: 45px;
`;

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
`;

const Description = styled.Text`
    /* You’ll be able to pu: */
    /* font-family: SourceSansPro-Regular; */
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

const Submit = styled.Text`
    color: red;
    margin: 20px;
`;

const UnderLine = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    width: 150px;
    margin-top: 10px;
    height: 35px;
`;

const Button = ({ edit, onPress, title, icon }) => (
    <TouchableOpacity onPress={onPress}>
        <Edit edit={edit}>
            <Ionicons style={{paddingRight:5}} name={icon}/>
            <Text>{title}</Text>
        </Edit>
    </TouchableOpacity>
);

export default class ListSelect extends React.Component { 
  state = {
      edit: false,
      info: [],
      editValue: ''  
  }

  async componentDidMount(){
      const users = firebase.database().ref('users/' + "abc" + "/" + this.props.keyName)
      users.on('value', (snapshot) => {
        const exists = (snapshot.val() !== null);
        if(!exists) return this.setState({info: []})
        return this.setState({ info: snapshot.val()});
      });
  }
  addItem = () => {
      this.setState({info: [...this.state.info, this.state.editValue], editValue: ''});
  }
  activateState = () => {
      console.log('help', JSON.stringify(this.props))
      if(this.state.edit) firebase.database().ref('users/' + "abc" + "/" + this.props.keyName).set(
        this.state.info
      );
      this.setState({edit: !this.state.edit})
    }
  removeItem = (el) => this.setState({info: this.state.info.filter((txt) => txt !== el) })
  render() {
    const { edit, editValue, info } = this.state;
    return (
      <Container>
        <Header>
          <Main>{this.props.title}</Main>
          {!edit?<Button onPress={this.activateState} title="EDIT" icon="md-create" /> : <Button onPress={this.activateState} title="SAVE" icon="md-save"/>}
        </Header>
        <Description>{this.props.description}</Description>
        {edit && <EditView>
            <UnderLine onChangeText={(editValue) => this.setState({editValue})} value={editValue}/>
            <Button onPress={this.addItem} title="ADD" icon="md-add"/>
        </EditView>}
        {info.map(el => !edit ?  <Text key={el}>{el}</Text> : <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                width: 100,
            }}
            key={el}
            onPress={() => this.removeItem(el)}
        >
            <Text>{el}</Text>
            <Ionicons style={{
                paddingLeft: 10
            }} name="md-close" />
        </TouchableOpacity>)}
      </Container>
    );
  }
}
