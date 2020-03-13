import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import PollScreen from './src/screens/PollScreen';
import FetchApiScreen from "./src/screens/FetchApiScreen";
import TabbarScreen from "./src/screens/TabbarScreen";
import Tabbar from "./src/components/Tabbar";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Poll: PollScreen,
    FetchApi: FetchApiScreen,
    Tab: TabbarScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Demo Project'
    }
  }
);

export default createAppContainer(navigator);

// export default Tabbar;
