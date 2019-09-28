import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import HomeScreen from '../Containers/HomeScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import ImageDetailScreen from '../Containers/ImageDetailScreen';
import RegisterScreen from '../Containers/RegisterScreen';
import LoginScreen from '../Containers/LoginScreen';
import RestPassWordScreen from '../Containers/RestPassWordScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    LaunchScreen: {screen: LaunchScreen},
    ProfileScreen: {screen: ProfileScreen},
    ImageDetailScreen: {screen: ImageDetailScreen},
    RegisterScreen: {screen: RegisterScreen},
    LoginScreen: {screen: LoginScreen},
    RestPassWordScreen: {screen: RestPassWordScreen},
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
