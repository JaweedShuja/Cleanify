//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
// import all basic components

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens
import BookingScreen from '../../screens/BookingScreen'
import AfterOtherPaymentOptionsScreen from '../../screens/AfterOtherPaymentOptionsScreen'
import MyCleansScreen from '../../screens/MyCleansScreen'
import PromotionScreen from '../../screens/PromotionScreen'
import LocationsScreen from '../../screens/LocationsScreen'
import AboutScreen from '../../screens/AboutScreen'

//Import Custom Sidebar
import CustomSidebarMenu from '../../components/SidebarMenu';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../../images/menuIcon.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const BookingScreen_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: BookingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const AfterOtherPaymentOptionsScreen_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Second: {
      screen: AfterOtherPaymentOptionsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 2',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const MyCleansScreen_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Third: {
      screen: MyCleansScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 3',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const PromotionScreen_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Fourth: {
      screen: PromotionScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 4',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const LocationsScreen_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Fifth: {
      screen: LocationsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 5',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const AboutScreen_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Sixth: {
      screen: AboutScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 6',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  /////////////////////////////

//Stack Navigator for the Second Option of Navigation Drawer


//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: BookingScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    NavScreen2: {
      screen: AfterOtherPaymentOptionsScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    NavScreen3: {
      screen: MyCleansScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
    NavScreen3: {
      screen: PromotionScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
    NavScreen3: {
      screen: LocationsScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 5',
      },
    },
    NavScreen3: {
      screen: AboutScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 6',
      },
    },
      
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
export default createAppContainer(DrawerNavigatorExample);