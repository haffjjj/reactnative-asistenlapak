import React, { Component } from 'react'
import { Text, StyleSheet, SectionList, Image } from 'react-native'
import { Container, Content, Header, SwipeRow, View, Icon, Button } from 'native-base'

import Row from '../../../../components/Row'

export default class TabRequestsend extends Component {

    state = {
        section: [
            {
                title: '21 Maret 2018',
                data: [
                    { data: null }
                ]
            }
        ]
    }

    render() {
        return (
            <Container>
                <Content>

                    <SectionList
                        renderItem={({ item, index, section }) => (
                            <Row
                                body={(
                                    <View style={{ flexDirection: 'row',padding:10}}>
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
                                    view: () => this.props.navigation.navigate('FieldTransactionRequestView')
                                }}
                            />

                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.deadline}>Batas Akhir, {title}</Text>
                        )}
                        sections={this.state.section}
                        keyExtractor={(item, index) => item + index}
                    />
                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    deadline: {
        textAlign: 'center',
        padding: 5,
        color: 'black',
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 5
    },
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
        color:'#7c7c7c'
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
