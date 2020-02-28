import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import PollScreen from './src/screens/PollScreen';
import FetchApiScreen from "./src/screens/FetchApiScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Poll: PollScreen,
    Api: FetchApiScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Demo Project'
    }
  }
);

export default createAppContainer(navigator);
