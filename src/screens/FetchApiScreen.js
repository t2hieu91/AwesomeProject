import React, { Component } from "react";
import { SafeAreaView, Button, View, Text, TextInput, StyleSheet, ActivityIndicator } from "react-native";

export default class FetchApiScreen extends Component {
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			responseString:'',
			loading: false,
		}
	}

	handleChangeName = value =>{
		this.setState({ name: value })
	};

	handleChangeEmail = value =>{
		this.setState({ email: value })
	};

	handleSubmit = () =>{
		this.setState({loading: true, responseString: ''});
		console.log("User name : " + this.state.name);
		console.log("User Email : " + this.state.email);

		const url ="https://jsonplaceholder.typicode.com/users/";
		const data = {
			name: this.state.name,
			email: this.state.email
		};

		fetch(url, { method: 'POST', // or ‘PUT’
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: { 'Content-Type' : 'application/json' } }
			)
	.then(res => res.json())
			.catch(error => console.error('Error:', error))
	.then( response => {
		this.setState({
			responseString: JSON.stringify(response),
			loading: false
		});
		console.log('Success:', JSON.stringify(response));
	})
	};

	render() {
		return(
			<SafeAreaView style={styles.containerView}>
				<View style={styles.viewStyle}>
				<TextInput
					style={styles.textInput}
					onChangeText={text => this.handleChangeName(text)}
					value={this.state.name}
					clearButtonMode={'while-editing'}
					placeholder={"Input you name"}
				/>
				<TextInput
					style={styles.textInput}
					onChangeText={text => this.handleChangeEmail(text)}
					value={this.state.email}
					clearButtonMode={'while-editing'}
					placeholder={"Input you Email"}
				/>
				<Button title={"Call Api"} disabled={this.state.loading} onPress={() => this.handleSubmit()}/>
			</View>
				<Text style={styles.responseStyle}>Response String</Text>
				<View style={styles.responseViewStyle}>
					<ActivityIndicator animating={this.state.loading} size="large" color="#0000ff"/>
					<Text style={styles.responseStyle}>{this.state.responseString}</Text>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		alignContent: 'center',
	},
	viewStyle: {
		borderColor: 'red',
		borderWidth: 1,
	},
	textInput: {
		borderColor: 'gray',
		borderWidth: 1,
		marginHorizontal: 15,
		height: 60,
		fontSize: 20,
	},
	responseStyle: {
		fontSize: 20,
	},
	responseViewStyle: {
		borderColor: 'gray',
		borderWidth: 1,
		height: 100,
		marginTop: 20,
	}
});
