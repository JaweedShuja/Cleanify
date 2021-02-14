import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './src/screens/Splash/index';
import GetStarted from './src/screens/GetStarted';
import AddNumber from './src/screens/AddNumber';
import EnterCode from './src/screens/EnterCode';
import EnterEmail from './src/screens/EnterEmail';
import EnterPassword from './src/screens/EnterPassword';
import EnterName from './src/screens/EnterName';
import Terms from './src/screens/Terms';
import Payment from './src/screens/Payment';
import EstimateScreen from './src/screens/EstimateScreen';
import EnterAddressScreen from './src/screens/EnterAddressScreen';
import RequestScreen from './src/screens/RequestScreen';
import ConfirmBookingScreen from './src/screens/ConfirmBookingScreen';
import AfterOtherPaymentOptionsScreen from './src/screens/AfterOtherPaymentOptionsScreen';
import CleanerProgressScreen from './src/screens/CleanerProgressScreen';
import CleanerOnTheWayScreen from './src/screens/CleanerOnTheWayScreen';
import CleanerArrivedScreen from './src/screens/CleanerArrivedScreen';
import CleaningInProgressScreen from './src/screens/CleaningInProgressScreen';
import BookingScreen from './src/screens/BookingScreen';
import MyCleansScreen from './src/screens/MyCleansScreen';
import PromotionScreen from './src/screens/PromotionScreen';
import AboutScreen from './src/screens/AboutScreen';
import LocationsScreen from './src/screens/LocationsScreen';
import EnterEmailAddress from './src/screens/EnterEmailAddress';
import SignIn from './src/screens/SignIn';
import Profile from './src/screens/Profile'
import Drawer from './src/components/NavigationDrawer';

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    GetStarted: {
      screen: GetStarted,
    },
    AddNumber: {
      screen: AddNumber,
    },
    EnterCode: {
      screen: EnterCode,
    },
    EnterEmail: {
      screen: EnterEmail,
    },
    EnterPassword: {
      screen: EnterPassword,
    },
    EnterName: {
      screen: EnterName,
    },
    Terms: {
      screen: Terms,
    },
    Payment: {
      screen: Payment,
    },
    EstimateScreen: {
      screen: EstimateScreen,
    },
    EnterAddressScreen: {
      screen: EnterAddressScreen,
    },
    RequestScreen: {
      screen: RequestScreen,
    },
    ConfirmBookingScreen: {
      screen: ConfirmBookingScreen,
    },
    AfterOtherPaymentOptionsScreen: {
      screen: AfterOtherPaymentOptionsScreen,
    },
    CleanerProgressScreen: {
      screen: CleanerProgressScreen,
    },
    CleanerOnTheWayScreen: {
      screen: CleanerOnTheWayScreen,
    },
    CleanerArrivedScreen: {
      screen: CleanerArrivedScreen,
    },
    CleaningInProgressScreen: {
      screen: CleaningInProgressScreen,
    },
    BookingScreen: {
      screen: BookingScreen,
    },
    MyCleansScreen: {
      screen: MyCleansScreen,
    },
    PromotionScreen: {
      screen: PromotionScreen,
    },
    AboutScreen: {
      screen: AboutScreen,
    },
    LocationsScreen: {
      screen: LocationsScreen,
    },
    EnterEmailAddress: {
      screen: EnterEmailAddress,
    },
    SignIn: {
      screen: SignIn,
    },
    Profile:{
      screen:Profile
    }
  },

  {
    initialRouteName: 'Splash',
  },
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);
