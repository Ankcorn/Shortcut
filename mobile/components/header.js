import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import styled  from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import logo from '../assets/logo.png';
import background from '../assets/pexels-photo-543223.png'
import backgroundMini from '../assets/pexels-mini.png';

const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-top: 35px;
    padding-bottom: 25px;
    padding-left: 25px;
    padding-right: 25px;
    height: ${props => props.big ? '40%' : '30%'};
`;

const Title = styled.View`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

const Description = styled.Text`
    /*font-family: SourceSansPro-SemiBold;*/
    padding-top: 50px;
    font-size: 20px;
    color: #454545;
    letter-spacing: 0;
`
export default class Header extends Component {
    render(){
        return(
            <Container big={this.props.big}>
                <Image style={{position: 'absolute', height: '95%'}} resizeMode="stretch" source={this.props.big ? background : backgroundMini}/>
                <Title>
                    <Image style={{width: "25%", height: "150%"}} resizeMode="stretch" source={logo}/>
                    {this.props.menu && <TouchableOpacity>
                        <Ionicons size={32} name="md-menu" color="white"/>
                    </TouchableOpacity>}
                </Title>
                <Description>
                    Hi, Leon. Are you ready to make your train ticket-buying experience a lot easier?
                </Description>
            </Container>
        )
    }
}