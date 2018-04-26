import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { Container, Title, Content, Text, Icon, Fab } from 'native-base';

import Footer from '../../../components/Footer'
import Row from '../../../components/Row'

export default class Main extends Component {
	render() {
		return (
			<Container>
				<Content style={{ backgroundColor: 'white' }}>
					<Row
						body={(
							<View style={{ flexDirection: 'row', padding: 10 }}>
								<Image style={styles.rowImage}
									source={require('../../../assets/images/market.png')}
								/>
								<View style={{ flex: 5, paddingLeft: 10 }}>
									<Text style={styles.rowTextTitle}>Cawet Ijo</Text>
									<Text style={styles.rowTextCondition}>Baru</Text>
									<Text style={styles.rowTextPrice}>Rp. 200000</Text>
								</View>
							</View>
						)}
					/>
				</Content>

				<Fab style={{ bottom: 60, backgroundColor: '#DD5453' }}
					onPress={() => this.props.navigation.navigate('FieldHomeAddProduct')}>
					<Icon name="add" />
				</Fab>

				<Footer data={
					{
						activeHome: true,
						screenTransaction: () => this.props.navigation.navigate('FieldTransaction'),
						screenSettings: () => this.props.navigation.navigate('FieldSettings'),
					}
				} />

			</Container>
		)
	}
}

const styles = StyleSheet.create({

	
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
	  rowTextCondition:{
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