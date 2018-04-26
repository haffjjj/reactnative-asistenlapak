import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Tab, Tabs, Text, Body, Badge, TabHeading } from 'native-base';

import { TabProcess, TabFailed, TabSuccess } from './tab/Main'
import Footer from '../../../components/Footer'


export default class Main extends Component {

    state = {
        notification : {
            transaction :{
                process : 92,
                success : 23,
                failed : 1
            }
        }
    }

    render() {
        return (
            <Container>
                <Tabs locked={true} initialPage={0}>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Proses</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.process}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabProcess fab={()=>this.props.navigation.navigate('CsTransactionAdd')} />
                    </Tab>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Sukses</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.success}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabSuccess />
                    </Tab>
                    <Tab heading={(
                        <TabHeading>
                            <Text>Gagal</Text>
                            <Badge style={styles.badge}>
                                <Text style={styles.badgeText}>{this.state.notification.transaction.failed}</Text>
                            </Badge>
                        </TabHeading>
                    )}>
                        <TabFailed />
                    </Tab>
                </Tabs>

                <Footer data={
                    {
                        activeTransaction: true,
                        screenHome: () => this.props.navigation.navigate('CsHome'),
                        screenSettings: () => this.props.navigation.navigate('CsSettings')
                    }
                } />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor:'white'
    },
    badgeText :{
        color:'#DD5453'
    }
})