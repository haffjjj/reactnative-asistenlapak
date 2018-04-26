import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header,Title, Content, Text, FooterTab, Button, Icon, View, Body } from 'native-base';

import Footer from '../../../components/Footer'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>setting</Text>
                </Content>
                <Footer data={

                    {
                        activeSettings :true,
                        screenHome: ()=>this.props.navigation.navigate('CsHome'),
                        screenTransaction : ()=>this.props.navigation.navigate('CsTransaction')
                    }
                }/>
                
            </Container>
        )
    }
}