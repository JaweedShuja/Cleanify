import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  StatusBar,
  BackHandler,
  KeyboardAvoidingView
} from 'react-native';
import styles from './style';
import CleanifyLogo from '../../images/logo.png';
import Toast from 'react-native-simple-toast';
import Loader from '../../components/Loader';

import {LoginPayloads} from '../../networking/payloads';
import {PostRequest} from '../../networking/postRequest';
import {LoginAPI} from '../../networking/api';
import {NavigationEvents} from 'react-navigation';
import Helper from '../../utils/Helper';
Math.round();
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      email: '',
      pass: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  static navigationOptions = {
    headerShown: false,
  };
  async handleSubmit() {
    var message;
    var error = false;

    var email = this.state.email;
    var password = this.state.pass;

    if (email.trim() == '') {
      message = 'Please enter email!';
      error = true;
    } else if (password.trim() == '') {
      message = 'Please enter password';
      error = true;
    } else {
      error = false;
      message = 'success';
    }

    if (error) {
      Toast.show(message);
    } else {
      Keyboard.dismiss();
      this.setState({isLoading: true});
      const payload = LoginPayloads(email, password);
      var responce = await PostRequest(payload, LoginAPI, false);
      this.setState({isLoading: false});
      Toast.show(responce.message);

      //edhar
      if (responce.status == 'success') {
        await Helper.saveUser(responce.user);
        await Helper.saveToken(responce.access_token);
        await Helper.setIsLogined('true');
        await Helper.saveExtraData();
        this.props.navigation.navigate('EstimateScreen');
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        {this.state.isLoading ? <Loader text={'Authenticating...'} /> : null}
        <Image style={styles.logo} source={CleanifyLogo} />
        
        <View style={styles.inputForm}>
          
            <TextInput
              value={this.state.email}
              onChangeText={value => this.setState({email: value})}
              placeholder={'Email'}
              style={styles.input}
              keyboardType="email-address"
              onSubmitEditing={() => this.pass.focus()}
              
            />
          
            <TextInput
              value={this.state.pass}
              onChangeText={value => this.setState({pass: value})}
              placeholder={'Password'}
              style={styles.input}
              secureTextEntry={true}
              ref={pass => {
                this.pass = pass;
              }}
            />
          </View>
        
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.signInButtonContainer}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
       

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('GetStarted')}
          style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>SIGN UP NOW</Text>
        </TouchableOpacity>
        <NavigationEvents
          onDidBlur={() => this.backHandler.remove()}
          onDidFocus={() => {
            this.backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              this.backAction,
            );
          }}
        />
      </View>
    );
  }
}
