import React, { Component } from 'react'
import { Image, Text, StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import { Container, Content, Fab, Icon, Spinner } from 'native-base'

import axios from 'axios'
import config from '../../../../config'

import Row from '../../../../components/Row'

export default class TabProcess extends Component {

    state = {
        refreshing: true,
        transactions: []
    }

    getAllData() {
        this.setState({ refreshing: true });
        axios.get(`${config.uri}/transactions?where=status%3D'process'&props=created&loadRelations=typeOfShipping%2CstoreId.assistant%2CstoreId`).then((transactions) => {
            this.setState({ transactions: transactions.data, refreshing: false })
        })
    }

    componentDidMount() {
        this.getAllData()
    }

    render() {
        return (
            <Container>


                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getAllData.bind(this)}
                        />
                    }
                >
                    <Content>

                        {this.state.loading == true ? (<Spinner color='red' />) : null}

                        {(this.state.refreshing == false) && (this.state.transactions.length) == 0 ? (
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>No data</Text>
                        ) : null}

                        {this.state.transactions.map((transaction, index) => {
                            return (
                                <Row
                                    body={(
                                        <View style={{ flexDirection: 'row', padding: 10 }}>
                                            <Image style={styles.rowImage}
                                                source={{ uri: transaction.storeId.logo }}
                                            />
                                            <View style={{ flex: 6, paddingLeft: 10 }}>
                                                <Text style={styles.rowTextTitle}>{transaction.storeId.name}</Text>
                                                <Text style={styles.rowTextAddress}>J{transaction.storeId.address}</Text>
                                                <Text style={styles.rowTextIn}>Ditambahkan</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.rowTextDate}>{transaction.created}</Text>
                                                    <Text style={styles.rowTextSender}>{transaction.typeOfShipping.name}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                    onpress={{
                                        view: () => alert('test bro')
                                    }}
                                    key={index}
                                />
                            )
                        })}
                    </Content>
                </ScrollView>



                <Fab style={{ backgroundColor: '#DD5453' }} onPress={this.props.fab}>
                    <Icon name="add" />
                </Fab>

            </Container>
        )
    }
}


const styles = StyleSheet.create({
    rowImage: {
        resizeMode: 'contain',
        flex: 2
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
