import React, { Component } from 'react';
import {
  Content,
  Text,
  Header,
  Container,
  Form,
  Item,
  Input,
  Textarea,
  Label,
  Button,
  Body,
  Title,
  ListItem,
  CheckBox,
  Radio,
  Right,
  Left,
  Picker,
  Icon,
  List
} from 'native-base'
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';

import Footer from '../../../components/Footer'


export default class CsAddStore extends Component {

  state = {
    checkedName: "",
    checkedName2: "",
    selectedName: "",
    selectedName2: "",
    selectedName3: "",
    items: [{
      id: 1,
      name: "Fashion Wanita"
    },
    {
      id: 2,
      name: "Fashion Pria"
    },
    {
      id: 3,
      name: "Fashion Muslim"
    },
    {
      id: 4,
      name: "Fashion Anak",

    },
    {
      id: 5,
      name: "Handphone dan Tablet",

    },
    {
      id: 6,
      name: "Elektronik",

    },
    {
      id: 7,
      name: "Kecantikan",

    },
    {
      id: 8,
      name: "Kesehatan",

    },
    {
      id: 9,
      name: "Ibu dan bayi",

    },
    {
      id: 10,
      name: "Perawatan tubuh",

    },
    {
      id: 11,
      name: "Rumah Tangga",

    },
    {
      id: 12,
      name: "Gaming",

    },
    {
      id: 13,
      name: "Laptop dan Aksesoris",

    },
    {
      id: 14,
      name: "Komputer dan Aksesoris",

    },
    {
      id: 15,
      name: "Kamera",

    },
    {
      id: 16,
      name: "Otomotif",

    },
    {
      id: 17,
      name: "Olahraga",

    },
    {
      id: 18,
      name: "Film dan Musik",

    },
    {
      id: 19,
      name: "Dapur",

    },
    {
      id: 20,
      name: "Office dan Stationeri",

    },
    {
      id: 21,
      name: "Sofenir dan Kado",

    },
    {
      id: 22,
      name: "Mainan dan Hobi",

    },
    {
      id: 23,
      name: "Makanan dan Minuman",

    },
    {
      id: 24,
      name: "Buku",

    },
    {
      id: 25,
      name: "Software",

    },
    {
      id: 26,
      name: "Produk Lainya",

    },
    ],

    check: [],
    checkk: [],

    items2: [{
      id: 1,
      name: "JNE"
    },
    {
      id: 2,
      name: "TIKI"
    },
    {
      id: 3,
      name: "WAHANA"
    },
    {
      id: 4,
      name: "GO-JEK"
    },
    {
      id: 5,
      name: "POS Indonesia"
    },
    {
      id: 6,
      name: "First"
    },
    {
      id: 7,
      name: "SiCepat"
    },
    {
      id: 8,
      name: "J&T"
    }
    ],

    items3: [{
      id: 1,
      name: "Selalu Tersedia"
    },
    {
      id: 2,
      name: "Stock Terbatas"
    },
    {
      id: 3,
      name: "Stock Kosong"
    }],

    items4: [{
      id: 1,
      name: "Baru"
    },
    {
      id: 2,
      name: "Bekas"
    },
    ],

    items5: [{
      id: 1,
      name: "Ya"
    },
    {
      id: 2,
      name: "Tidak"
    },
    ],

    marketName: "",
    slogan: "",
    description: "",
    fullAddress: "",
    city: "",
    postCode: "",
    website: "",
    phone: "",
    email: "",
    bankName: "",
    radio1: "",
    check1: [],
    check2: []

  }

  checkRadio(name, id) {
    this.setState({
      selectedName: name,
      radio1: id
    })

    if (this.state.selectedName == name) {
      this.setState({
        selectedName: ""
      })
    }
  }

  addCheck(set) {

    if (!this.state.check.includes(set)) {
      getCheck = this.state.check
      getCheck.push(set)
      this.setState({
        check: getCheck,
        check1: getCheck
      })
    }

    else {
      geCheck = this.state.check
      geCheck = geCheck.filter(item => item !== set)
      this.setState({
        check: geCheck
      })
    }

  }

  addCheck2(set) {

    if (!this.state.checkk.includes(set)) {
      getCheck = this.state.checkk
      getCheck.push(set)
      this.setState({
        checkk: getCheck,
        check2: getCheck
      })
    }

    else {
      geCheck = this.state.checkk
      geCheck = geCheck.filter(item => item !== set)
      this.setState({
        checkk: geCheck
      })
    }

  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Text>Asisten Lapangan</Text>
            <Picker
              iosHeader="Select one"
              mode="dialog"
              // selectedValue={this.state.selected1}
              // onValueChange={this.onValueChange.bind(this)}
              style={{ marginLeft: -7, marginBottom: 10 }}
            >
              <Picker.Item label="si A" value="key0" />
              <Picker.Item label="si B" value="key1" />
              <Picker.Item label="si C" value="key2" />
              <Picker.Item label="Another name" value="key3" />
              <Picker.Item label="another name again" value="key4" />
            </Picker>
            <Label>Nama Toko</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ marketName: text })} />
            </Item>

            <Label style={styles.batasAtas}>Slogan</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ slogan: text })} />
            </Item>

            <Label style={styles.batasAtas}>Logo Toko</Label>
            <Button transparent onPress={() => { alert("Coming Soon") }}>
              <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
            </Button>

            <Label style={styles.batasAtas}>Deskripsi</Label>
            <Textarea rowSpan={5} bordered onChangeText={(text) => this.setState({ description: text })} />

            <Label style={styles.batasAtas}>Alamat Lengkap</Label>
            <Textarea rowSpan={5} bordered onChangeText={(text) => this.setState({ fullAddress: text })} />

            <Label style={styles.batasAtas}>Kota</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ city: text })} />
            </Item>

            <Label style={styles.batasAtas}>Kode Pos</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ postCode: text })} />
            </Item>

            <Label style={styles.batasAtas}>Situs Web</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ website: text })} />
            </Item>

            <Label style={styles.batasAtas}>No Telp</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ phone: text })} />
            </Item>

            <Label style={styles.batasAtas}>Alamat Email</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item>

            <Label style={styles.batasAtas}>Nama Bank dan No Rek.</Label>
            <Item regular>
              <Input onChangeText={(text) => this.setState({ bankName: text })} />
            </Item>

            <Label style={styles.batasAtas}>Jenis barang (Kategori)</Label>

            {this.state.items.map((item, key) => (
              <ListItem key={key} style={styles.iteme}>
                <CheckBox onPress={() => this.addCheck(item.id)} checked={this.state.check.includes(item.id) ? true : false} color="#dd5453" />
                <Body>
                  <Label style={styles.labelSelect}>{item.name}</Label>
                </Body>
              </ListItem>
            ))}

            {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}


            <Label style={styles.batasAtas}>Status Produk (Kategori)</Label>

            {this.state.items3.map((item, index) => {
              return (
                <ListItem key={item.name} style={styles.iteme}>
                  <Radio selected={item.name == this.state.selectedName ? true : false} onPress={() => this.checkRadio(item.name, item.id)} />
                  <Body>
                    <Label style={styles.labelSelect}>{item.name}</Label>
                  </Body>
                </ListItem>
              )
            })}

            <Label style={styles.batasAtas}>Jasa Pengiriman</Label>

            {this.state.items2.map((item, key) => (
              <ListItem key={key} style={styles.iteme}>
                <CheckBox onPress={() => this.addCheck2(item.id)} checked={this.state.checkk.includes(item.id) ? true : false} color="#dd5453" />
                <Body>
                  <Label style={styles.labelSelect}>{item.name}</Label>
                </Body>
              </ListItem>
            ))}

            {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}

            <View style={{ margin: 20 }}>

              {/* <ListItem style={{ alignSelf: 'center', justifyContent: 'center' }}> */}
              <Button full style={styles.buttone} onPress={() => this.props.navigation.navigate('FieldHomeActiveStoreProduct', {
                data: {
                  marketName: this.state.marketName,
                  slogan: this.state.slogan,
                  description: this.state.description,
                  fullAddress: this.state.fullAddress,
                  city: this.state.city,
                  postCode: this.state.postCode,
                  website: this.state.website,
                  phone: this.state.phone,
                  email: this.state.email,
                  bankName: this.state.bankName,
                  radio1: this.state.radio1,
                  check1: this.state.check1,
                  check2: this.state.check2,
                }
              })}>
                <Text>Submit</Text>
              </Button>
              {/* </ListItem> */}
            </View>
          </Form>
        </Content>

        <Footer data={
          {
            activeHome: true,
            screenTransaction: () => this.props.navigation.navigate('FieldTransaction'),
            screenSettings: () => this.props.navigation.navigate('FieldSettings')
          }
        } />

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  buttone: {
    backgroundColor: "#DD5453"
  },

  batasAtas: {
    marginTop: 10
  },

  labelBtn: {
    marginLeft: 55
  },

  labelSelect: {
    marginLeft: 20
  },

  label: {
    margin: 20
  },

  iteme: {
    marginLeft: -0.1
  },

  fileChooser: {
    color: '#156af2',
    marginLeft: -17
  },

  mainColor: {
    backgroundColor: '#dd5453'
  }
})