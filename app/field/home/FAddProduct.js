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
    Card,
    CardItem,
    List
} from 'native-base';
import { StyleSheet, View, Image } from 'react-native';

import Footer from '../../../components/Footer'
import Row from '../../../components/Row'

export default class CsAddProduct extends Component {

    state = {
        checkedName: "",
        conditione: false,
        checkedName2: "",
        selectedName: "",
        selectedName2: "",
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

        productName: "",
        price: "",
        request: "",
        descProduct: "",
        weight: "",
        time: "",
        radio1: "",
        radio2: ""
    }

    handleButtonPress() {
        this.setState({ checkBoxStatus: !this.state.checkBoxStatus });
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

    checkRadio2(name, id) {
        this.setState({
            selectedName2: name,
            radio2: id
        })

        if (this.state.selectedName2 == name) {
            this.setState({
                selectedName2: ""
            })
        }
    }

    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'white'}}>
                    <Row
                        body={(
                            <View style={{ flexDirection: 'row',paddingLeft:20,paddingRight:20 }}>
                                <Image style={styles.rowImage}
                                    source={require('../../../assets/images/market.png')}
                                />
                                <View style={{ flex: 5, paddingLeft: 10 }}>
                                    <Text style={styles.rowTextTitle}>Els Komputer</Text>
                                    <Text style={styles.rowTextAsist}>Asisten CS</Text>
                                    <Text style={styles.rowTextAsistName}>Hafiz Joundy Syafie</Text>
                                    <Text style={styles.rowTextAddress}>JL DI Panjaitan No 128 Purwokerto</Text>
                                </View>
                            </View>
                        )}
                    />

                    <Form>
                        <View style={{ width: '95%', alignSelf: 'center' }}>
                            <Label style={styles.batasAtas}>Nama Produk (max 70 karakter)</Label>
                            <Item regular>
                                <Input onChangeText={(text) => this.setState({ productName: text })} />
                            </Item>

                            <Label style={styles.batasAtas}>Gambar Produk</Label>
                            <Button transparent onPress={() => { alert("Coming Soon") }}>
                                <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                            </Button>

                            <Label style={styles.batasAtas}>Harga</Label>
                            <Item regular>
                                <Input onChangeText={(text) => this.setState({ price: text })} />
                            </Item>

                            <Label style={styles.batasAtas}>Pemesanan minimun/buah</Label>
                            <Item regular>
                                <Input onChangeText={(text) => this.setState({ request: text })} />
                            </Item>

                            <Label style={styles.batasAtas}>Kondisi</Label>

                            {this.state.items4.map((item, index) => {
                                return (
                                    <ListItem key={item.name} style={styles.iteme}>
                                        <Radio selected={item.name == this.state.selectedName ? true : false} onPress={() => this.checkRadio(item.name, item.id)} />
                                        <Body>
                                            <Label style={styles.labelSelect}>{item.name}</Label>
                                        </Body>
                                    </ListItem>
                                )
                            })}

                            <Label style={styles.batasAtas}>Deskripsi Produk</Label>
                            <Item regular>
                                <Input onChangeText={(text) => this.setState({ descProduct: text })} />
                            </Item>

                            <Label style={styles.batasAtas}>Berat (kg)</Label>
                            <Item regular>
                                <Input onChangeText={(text) => this.setState({ weight: text })} />
                            </Item>

                            <Label style={styles.batasAtas}>Aktifkan preorder untuk waktu proses produksi yang lebih lama</Label>

                            {this.state.items5.map((item, index) => {
                                return (
                                    <ListItem key={item.name} style={styles.iteme}>
                                        <Radio selected={item.name == this.state.selectedName2 ? true : false} onPress={() => this.checkRadio2(item.name, item.id)} />
                                        <Body>
                                            <Label style={styles.labelSelect}>{item.name}</Label>
                                        </Body>
                                    </ListItem>
                                )
                            })}

                            <Label style={styles.batasAtas}>Waktu Proses (wajib diisi untuk mengetahui lama produk diproses)</Label>
                            <Item regular>
                                <Input onChangeText={(text) => this.setState({ time: text })} />
                            </Item>
                        </View>

                        <View style={{margin:20}}>
                            <Button full style={styles.buttone} onPress={() => this.props.navigation.navigate('FieldHomeDemandViewPassing', {
                                data: {
                                    productName: this.state.productName,
                                    price: this.state.price,
                                    request: this.state.request,
                                    descProduct: this.state.descProduct,
                                    weight: this.state.weight,
                                    time: this.state.time,
                                    radio1: this.state.radio1,
                                    radio2: this.state.radio2
                                }
                            })}>

                                <Text>Submit</Text>
                            </Button>
                            
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
        );
    }
}

const styles = StyleSheet.create({
    buttone: {
        backgroundColor: "#DD5453"
    },

    iteme: {
        marginLeft: -0.1
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

    fileChooser: {
        color: '#156af2',
        marginLeft: -17
    },

    cardHeader: {
        fontSize: 20,
        marginBottom: 5,
        color: '#0c0c0c'
    },
    cardContent: {
        color: '#424242'
    },
    cardDate: {
        marginTop: 5
    },

    mainColor: {
        backgroundColor: '#dd5453'
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
        alignSelf:'flex-start'
    },
    rowTextAsist: {
        fontSize: 13,
        color: '#828282',
        alignSelf:'flex-start'
    },
    rowTextAsistName: {
        fontSize: 15,
        marginBottom: 5,
        color: '#4c4c4c',
        alignSelf:'flex-start'
    },
    rowTextAddress: {
        fontSize: 15,
        color: '#4c4c4c',
        alignSelf:'flex-start'
    }
})