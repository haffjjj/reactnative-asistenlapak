import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base';

import Row from '../../../../components/Row'

export default class TabProcess extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <Row
                        body={(
                            <View style={{ flexDirection: 'row'}}>
                                <Image style={styles.rowImage}
                                    source={require('../../../../assets/images/market.png')}
                                />
                                <View style={{ flex: 5, paddingLeft: 10 }}>
                                    <Text style={styles.rowTextTitle}>Els Komputer</Text>
                                    <Text style={styles.rowTextAddress}>JL DI Panjaitan No 128 Purwokerto</Text>
                                    <Text style={styles.rowTextIn}>Masuk</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.rowTextDate}>21 Maret 2018</Text>
                                        <Text style={styles.rowTextSender}>JNE</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        onpress={{
                            view: () => alert('test bro')
                        }}
                    />

                </Content>
            </Container>
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
        color: 'black'
    },
    rowTextIn: {
        fontSize: 13,
    },
    rowTextAddress: {
        fontSize: 15,
        color: '#4c4c4c',
        marginBottom: 5
    },
    rowTextDate: {
        fontSize: 15,
        color: '#4c4c4c',
        flex: 2
    },
    rowTextSender: {
        fontSize: 15,
        color: '#4c4c4c',
        flex: 1,
        backgroundColor: '#e0e0e0',
        textAlign: 'center',
        borderRadius: 50
    }
})