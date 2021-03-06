import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import PollScreen from '../screens/PollScreen';
import FetchApiScreen from "../screens/FetchApiScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';

const IconWithBadge = ({ name, badgeCount, color, size }) => {
	return (
		<View style={{ width: 24, height: 24, margin: 5 }}>
			<Ionicons name={name} size={size} color={color} />
			{badgeCount > 0 && (
				<View
					style={{
						// On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
						position: 'absolute',
						right: -6,
						top: -3,
						backgroundColor: 'tomato',
						borderRadius: 6,
						width: 12,
						height: 12,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
						{badgeCount}
					</Text>
				</View>
			)}
		</View>
	);
}

const HomeIconWithBadge = (props) => {
	// You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
	return <IconWithBadge {...props} badgeCount={3} />;
}

const PollIconWithBadge = (props) => {
	// You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
	return <IconWithBadge {...props} badgeCount={1} />;
}

const FetchApiIconWithBadge = (props) => {
	// You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
	return <IconWithBadge {...props} badgeCount={5} />;
}




const Tab = createBottomTabNavigator();
const Tabbar = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === 'Home') {
							return (
								<HomeIconWithBadge
									name={
										focused
											? 'ios-information-circle'
											: 'ios-information-circle-outline'
									}
									size={size}
									color={color}
								/>
							);
						} else if (route.name === 'Poll') {
							return (
								<PollIconWithBadge
									name={focused ? 'ios-list-box' : 'ios-list'}
									size={size}
									color={color}
								/>
							);
						} else if (route.name === 'FetchApi') {
							return (
								<FetchApiIconWithBadge
									name={focused ? 'md-search' : 'ios-search'}
									size={size}
									color={color}
								/>
							);
						}
					},
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
				Options={{

				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Poll" component={PollScreen} />
				<Tab.Screen name="FetchApi" component={FetchApiScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Tabbar;
