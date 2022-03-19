import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";  
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthPovider} from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';


const switchNavigator = createSwitchNavigator({
    Loading: LoadingScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator ({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <LocationProvider>
      <AuthPovider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthPovider>
    </LocationProvider>
  )
}