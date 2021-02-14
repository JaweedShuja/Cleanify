import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {RegisterEmailAPI} from '../../networking/api';
import Toast from 'react-native-simple-toast';
import {RegisterEmailPayloads} from '../../networking/payloads';
import {PostRequest} from '../../networking/postRequest';
import Loader from '../../components/Loader';
import {Fonts} from '../../utils/Fonts.js';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function onAddEmail(email, navigation, setIsLoading, setEmail) {
  if (!validateEmail(email)) {
    Toast.show('Please Enter Valid Email Address!');
  } else {
    var payload = RegisterEmailPayloads(email);
    console.log(payload);
    setIsLoading(true);
    setEmail('');
    var responce = await PostRequest(
      payload,
      RegisterEmailAPI(navigation.getParam('draftUserId')),
      true,
    );
    setIsLoading(false);
    console.log(responce);
    if (responce.status == 'success') {
      navigation.navigate('EnterPassword', {
        draftUserId: navigation.getParam('draftUserId'),
      });
    } else {
      Toast.show('Email Already Taken!');
    }
  }
}

const EnterEmail = props => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    return () => {
      Keyboard.dismiss();
    };
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {isLoading ? <Loader text={'Please Wait!'} /> : null}

      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          style={{height: 24, width: 33, marginTop: 15, marginLeft: 20}}
          source={require('../../images/Arrow.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          marginHorizontal: 60,
          fontFamily: Fonts.Arimo,
          marginTop: 50,
          fontSize: 17,
        }}>
        What's your email address?
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <TextInput
                style={{
                  marginTop: 5,
                  fontSize: 17,
                  fontFamily: Fonts.Arimo,
                  borderBottomWidth: 1,
                  borderColor: 'red',
                  width: '80%',
                }}
                placeholder="jhon@example.com"
                value={email}
                keyboardType={'visible-password'}
                secureTextEntry={true}
                onChangeText={value => setEmail(value)}
              />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  onAddEmail(email, props.navigation, setIsLoading, setEmail);
                }}
                style={{
                  width: '80%',
                  height: 45,
                  backgroundColor:
                    email == '' ? 'rgba(249,5,5,0.48)' : 'rgba(249,5,5,1)',
                  alignSelf: 'center',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: Fonts.ArimoBold,
                  }}>
                  CONTINUE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
    bottom: 50,
  },
});

export default EnterEmail;

EnterEmail.navigationOptions = {
  header: null,
};
