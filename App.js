import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { StyleProvider } from 'native-base'
import { StackNavigator } from 'react-navigation'

import SignIn from './app/SignIn'
import SignUp from './app/SignUp'

// import Loader from './app/Loader'

import CsHome from './app/cs/home/Main'
import CsHomeAddStore from './app/cs/home/AddStore'
import CsTransaction from './app/cs/transaction/Main'
import CsTransactionAdd from './app/cs/transaction/AddTransaction'
import CsTransactionAddPassing from './app/cs/transaction/AddTransactionPassing'
import CsSettings from './app/cs/settings/Main'

import FieldHome from './app/field/home/Main'
import FieldHomeAddProduct from './app/field/home/FAddProduct'
import FieldHomeAddStore from './app/field/home/FAddStore'
import FieldHomeProductList from './app/field/home/FProductList'
import FieldTransaction from './app/field/transaction/Main'
import FieldTransactionRequestView from './app/field/transaction/ViewRequest'
import FieldSettings from './app/field/settings/Main'

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#DD5453',
        elevation:0
    }
})

const App = StackNavigator({
    // Loader : {
    //     screen :Loader
    // },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'SignIn',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    CsHome: {
        screen: CsHome,
        navigationOptions: {
            title: 'CS Home',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    CsHomeAddStore: {
        screen: CsHomeAddStore,
        navigationOptions: {
            title: 'Add Store',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    CsTransaction: {
        screen: CsTransaction,
        navigationOptions: {
            title: 'CS Transaction',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    CsTransactionAdd: {
        screen: CsTransactionAdd,
        navigationOptions: {
            title: 'Add Transaction',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    CsTransactionAddPassing: {
        screen: CsTransactionAddPassing,
        navigationOptions: {
            title: 'Add Transaction TestGET',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    CsSettings: {
        screen: CsSettings,
        navigationOptions: {
            title: 'CS Settings',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    FieldHome: {
        screen: FieldHome,
        navigationOptions: {
            title: 'Field Home',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    FieldHomeAddProduct: {
        screen: FieldHomeAddProduct,
        navigationOptions: {
            title: 'Field Home',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    FieldHomeAddStore: {
        screen: FieldHomeAddStore,
        navigationOptions: {
            title: 'Filed Home TestGet',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    FieldHomeProductList: {
        screen: FieldHomeProductList,
        navigationOptions: {
            title: 'Add Product',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    },
    FieldTransaction: {
        screen: FieldTransaction,
        navigationOptions: {
            title: 'Field Transaction',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        },
    },
    FieldTransactionRequestView: {
        screen: FieldTransactionRequestView,
        navigationOptions: {
            title: 'Field Transaction Request',
            headerStyle: styles.header,
            headerTintColor: '#fff'
        },
    },
    FieldSettings: {
        screen: FieldSettings,
        navigationOptions: {
            title: 'Field Settings',
            headerLeft: null,
            headerStyle: styles.header,
            headerTintColor: '#fff'
        }
    }
},
    {
        initialRouteName: 'SignIn',
    })

export default () => (
    <StyleProvider style={getTheme(material)}>
        <App />
    </StyleProvider>
)
