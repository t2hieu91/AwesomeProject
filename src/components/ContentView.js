import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const ContentView = () => {
	const [components, setComponents] = useState([{ index: '0', title: ''}]);

	onTextChange = (item, value) => {
		setComponents([...components].map(object => {
			if (object.index === item.index) {
				return {
					...object,
					title: value
				}
			} else {
				return object
			}
		}));
	};

	onButtonPress = () => {
		setComponents([...components, {
			index: `${components.length}`
		}]);
	};

	return (
		<View style={styles.viewContainer}>
			<FlatList
				style={styles.listView}
				keyExtractor={item => item.index}
				data={components}
				renderItem={({ item }) => {
					return (
						<View style={styles.itemView}>
							<TextInput
								style={styles.inputItem}
								onChangeText={text => this.onTextChange(item, text)}
								value={item.title}
								clearButtonMode={'while-editing'}
								placeholder={`Option #${item.index}`}
							/>
							<Icon
								raised
								name='heartbeat'
								type='font-awesome'
								color='#f50'
								onPress={() => console.log('hello')} />
						</View>
					);
				}}
			/>
			<Button
				title={'Add something'}
				style={styles.buttonAdd}
				onPress={ () => this.onButtonPress() }
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
	},
	listView: {
		borderWidth: 1,
		borderColor: 'blue',
		marginTop: 15,
	},
	viewItem: {
		justifyContent: 'center',
		marginTop: 15,
		margin: 15,
	},
	textItem: {
		fontSize: 20,
	},
	itemView: {
		borderBottomColor: 'red',
		borderBottomWidth: 1,
		marginHorizontal: 15,
		height: 45,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	inputItem: {
		fontSize: 16,
	},

});

export default ContentView;
