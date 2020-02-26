import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PollScreen from 'src/screens/PollScreen';

const navigator = createStackNavigator(
  {
    Poll: PollScreen
  },
  {
    initialRouteName: 'Poll',
    defaultNavigationOptions: {
      title: 'Poll Demo'
    }
  }
);

export default createAppContainer(navigator);
