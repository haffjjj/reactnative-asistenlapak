import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, RefreshControl } from 'react-native'
import { Container, Title, Content, Text, Icon, Fab, Spinner } from 'native-base';

import axios from 'axios'
import config from '../../../config'

import Footer from '../../../components/Footer'
import Row from '../../../components/Row'


export default class Main extends Component {

    state = {
        refreshing: true,
        stores: []
    }

    getAllData() {
        this.setState({ refreshing: true });
        axios.get(`${config.uri}/stores?props=name%2Caddress%2Clogo&loadRelations=assistant`).then((stores) => {
            this.setState({ stores: stores.data, refreshing: false })
        })
    }

    componentDidMount() {
        this.getAllData()
    }

    render() {
        return (
            <Container>


                <ScrollView
                    style={{ backgroundColor: 'white' }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getAllData.bind(this)}
                        />
                    }
                >

                    <Content>

                        {/* {this.state.loading == true ? (<Spinner color='red' />) : null} */}

                        {(this.state.loading == false) && (this.state.stores.length) == 0 ? (
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>No data</Text>
                        ) : null}

                        {this.state.stores.map((store, indexes) => (
                            <Row
                                body={(
                                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                                        <Image style={styles.rowImage}
                                            source={{ uri: store.logo }}
                                        />
                                        <View style={{ flex: 6, paddingLeft: 10 }}>
                                            <Text style={styles.rowTextTitle}>{store.name}</Text>
                                            <Text style={styles.rowTextAsist}>Asisten Lapangan</Text>
                                            <Text style={styles.rowTextAsistName}>{store.assistant.name}</Text>
                                            <Text style={styles.rowTextAddress}>{store.address}</Text>
                                        </View>
                                    </View>
                                )
                                }
                                onpress={{
                                    view: () => alert('test bro')
                                }}
                                key={indexes}
                            />
                        ))}

                    </Content>

                </ScrollView>



                <Fab style={{ bottom: 60, backgroundColor: '#DD5453' }}
                    onPress={() => this.props.navigation.navigate('CsHomeAddStore')}>
                    <Icon name="add" />
                </Fab>

                <Footer data={
                    {
                        activeHome: true,
                        screenTransaction: () => this.props.navigation.navigate('CsTransaction'),
                        screenSettings: () => this.props.navigation.navigate('CsSettings'),
                    }
                } />

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
        alignSelf: 'flex-start'
    },
    rowTextAsist: {
        fontSize: 13,
        color: '#828282',
        alignSelf: 'flex-start'
    },
    rowTextAsistName: {
        fontSize: 15,
        marginBottom: 5,
        color: '#4c4c4c',
        alignSelf: 'flex-start'
    },
    rowTextAddress: {
        fontSize: 15,
        color: '#4c4c4c',
        alignSelf: 'flex-start'
    }

})