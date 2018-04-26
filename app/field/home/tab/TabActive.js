import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, RefreshControl } from 'react-native'
import { Container, Content, Fab, Icon, Text, View } from 'native-base';

import axios from 'axios'
import config from '../../../../config'

import Row from '../../../../components/Row'

export default class TabActive extends Component {

    getAllData() {
        this.setState({ refreshing: true });
        axios.get(`${config.uri}/stores?props=name%2Caddress%2Clogo&loadRelations=assistant`).then((stores) => {
            this.setState({ stores: stores.data, refreshing: false })
        })
    }

    componentDidMount() {
        this.getAllData()
    }

    state = {
        refreshing: true,
        stores : []
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
                                            <Text style={styles.rowTextAsist}>Asisten CS</Text>
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

                <Fab style={{ backgroundColor: '#DD5453' }} onPress={()=>this.props.navigation.navigate('FieldHomeAddStore')}>
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
    rowTextTitle:{
        fontSize: 20,
        marginBottom: 5,
    },
    rowTextAsist:{  
        fontSize:13,
        color:'#828282'
    },
    rowTextAsistName:{
        fontSize:15,
        marginBottom:5,
        color:'#4c4c4c'
    },
    rowTextAddress:{
        fontSize:15,
        color:'#4c4c4c'
    }

})