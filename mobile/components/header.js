import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled  from "styled-components";

const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    height: ${props => props.big ? '30%' : '20%'};
`;

// const Header = styled.View`

// `;

const Description = styled.Text`
    color: red;
`
export default class Header extends Component {
    render(){
        return(
            <Container big>
                {/* <Header /> */}
                <Description>Hi, Leon. Are you ready to make your train ticket-buying experience a lot easier?</Description>
            </Container>
        )
    }
}