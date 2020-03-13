import React from "react";
import { SafeAreaView, Button, Text, StyleSheet, Alert } from "react-native";

const HomeScreen = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.containerView}>
			<Button title={"Poll demo"} onPress={() => navigation.navigate('Poll')}/>
			<Button title={"Fetch Api Demo"} onPress={() => navigation.navigate('FetchApi')}/>
			<Button title={"Tabbar"} onPress={() => navigation.navigate('Tab')}/>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	containerView: {
		alignContent: 'center',
	},
});

export default HomeScreen;
