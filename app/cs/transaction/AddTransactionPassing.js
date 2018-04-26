import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class AddTransactionPassing extends Component{
	render(){
		return(
			<View>
				<Text>{this.props.navigation.state.params.data.reqProduct}</Text>
				<Text>{this.props.navigation.state.params.data.stock}</Text>
				<Text>{this.props.navigation.state.params.data.specialReq}</Text>
				<Text>{this.props.navigation.state.params.data.orderNum}</Text>
				<Text>{this.props.navigation.state.params.data.nameOfCustomer}</Text>
				<Text>{this.props.navigation.state.params.data.customerPhone}</Text>
				<Text>{this.props.navigation.state.params.data.customerAdd}</Text>
				<Text>{this.props.navigation.state.params.data.nearCourier}</Text>

                <Text>{this.props.navigation.state.params.data.radio1}</Text>
                <Text>{this.props.navigation.state.params.data.radio2}</Text>
			</View>
		)
	}
}