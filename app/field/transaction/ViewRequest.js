import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Container, Content, Text, Button } from 'native-base'

import Footer from '../../../components/Footer'
import Row from '../../../components/Row'

export default class ViewRequest extends Component {
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#f9f9f9' }}>
          <Text style={styles.info}>Batas Akhir 21 Maret 2018</Text>

          <Row
            body={(
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Image style={styles.rowImage}
                  source={require('../../../assets/images/market.png')}
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
          />

          <Text style={styles.info}>Daftar Barang</Text>

          <Row
            body={(
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Image style={styles.rowImage}
                  source={require('../../../assets/images/market.png')}
                />
                <View style={{ flex: 5, paddingLeft: 10 }}>
                  <Text style={styles.rowTextTitle}>Cawet Ijo</Text>
                  <Text style={styles.rowTextPcs}>3pcs</Text>
                  <Text style={styles.rowTextPrice}>Rp. 200000</Text>
                </View>
              </View>
            )}
          />

          <View style={{ flexDirection: 'row', margin: 15 }}>
            <View style={{ flex: 1 }}>
              <Text>Total</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>: Rp 21000</Text>
            </View>
          </View>

          <View style={{margin:20}}>
            <Button full style={{backgroundColor: "#DD5453"}}>
              <Text>Proses</Text>
            </Button>
          </View>
        </Content>

        <Footer data={
          {
            activeTransaction: true,
            screenHome: () => this.props.navigation.navigate('FieldHome'),
            screenSettings: () => this.props.navigation.navigate('FieldSettings')
          }
        } />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  info: {
    textAlign: 'center',
    padding: 5,
    color: 'black',
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
    marginBottom: 15
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
    color: 'black',
    alignSelf: 'flex-start'
  },
  rowTextIn: {
    fontSize: 13,
    alignSelf: 'flex-start',
    color: '#7c7c7c'
  },
  rowTextAddress: {
    fontSize: 15,
    color: '#4c4c4c',
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
  rowTextDate: {
    fontSize: 15,
    color: '#4c4c4c',
    flex: 2,
    alignSelf: 'flex-start'
  },
  rowTextSender: {
    fontSize: 15,
    color: '#4c4c4c',
    flex: 1,
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    borderRadius: 50,
    alignSelf: 'flex-start'
  },
  rowTextPcs:{
    fontSize: 15,
    color: '#4c4c4c',
    flex: 2,
    alignSelf: 'flex-start'
  },
  rowTextPrice:{
    fontSize: 15,
    color: '#4c4c4c',
    flex: 2,
    alignSelf: 'flex-start'
  }
})