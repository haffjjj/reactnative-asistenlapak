import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Body, SwipeRow, Button, Icon, Container } from 'native-base';

export default class CRow extends Component {
    render() {
        return (
            <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-160}
                swipeToOpenPercent={70}
                body={
                    this.props.body
                }
                disableRightSwipe={true}
                disableLeftSwipe={this.props.onpress == undefined ? true : false}
                right={
                    this.props.onpress == undefined ? null : (
                        <Container style={{ flex: 1, flexDirection: 'row' }}>
                            {this.props.onpress.view !== undefined ? (
                                <Button onPress={this.props.onpress.view} full primary style={{ flex: 1, height: 'auto' }}>
                                    <Icon active name="eye" />
                                </Button>) : null}

                            {this.props.onpress.edit !== undefined ? (
                                <Button onPress={this.props.onpress.edit} full success style={{ flex: 1, height: 'auto' }}>
                                    <Icon active name="create" />
                                </Button>) : null}

                            {this.props.onpress.delete !== undefined ? (
                                <Button onPress={this.props.onpress.delete} full danger style={{ flex: 1, height: 'auto' }}>
                                    <Icon active name="trash" />
                                </Button>) : null}
                        </Container>
                    )
                }
            />
        )
    }
}


const styles = StyleSheet.create({
    rowImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        flex: 1
    },
    rowTextTitle: {
        fontSize: 20,
        marginBottom: 5,
    },
    rowTextAsist: {
        fontSize: 13,
        color: '#828282'
    },
    rowTextAsistName: {
        fontSize: 15,
        marginBottom: 5,
        color: '#4c4c4c'
    },
    rowTextAddress: {
        fontSize: 15,
        color: '#4c4c4c'
    }

})