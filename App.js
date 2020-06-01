import React from 'react'
import {View, Text} from 'react-native'
import Splash from './src/screens/Splash/index'
import GetStarted from './src/screens/GetStarted'
import AddNumber from './src/screens/AddNumber'
import EnterCode from './src/screens/EnterCode'
import EnterEmail from './src/screens/EnterEmail'
import EnterPassword from './src/screens/EnterPassword'
import EnterName from './src/screens/EnterName'
import Terms from './src/screens/Terms'
import Payment from './src/screens/Payment'
import EstimateScreen from './src/screens/EstimateScreen'
import EnterAddressScreen from './src/screens/EnterAddressScreen'
import RequestScreen from './src/screens/RequestScreen'

export default class App extends React.Component{
  render(){
      return(
        
          <RequestScreen />
        
      );
    }
}