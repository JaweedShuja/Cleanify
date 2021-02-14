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
import Toast from 'react-native-simple-toast';
import {Fonts} from '../../utils/Fonts.js';
import {RegisterPasswordAPI} from '../../networking/api';
import {RegisterPasswordPayloads} from '../../networking/payloads';
import {PostRequest} from '../../networking/postRequest';
import Loader from '../../components/Loader';

async function onAddPassword(password, navigation, setIsLoading, setPassword) {
  if (password == '' || password.length < 6) {
    Toast.show('Password must be 6 characters long!');
  } else {
    var payload = RegisterPasswordPayloads(password);
    console.log(payload);
    setIsLoading(true);
    setPassword('');
    var responce = await PostRequest(
      payload,
      RegisterPasswordAPI(navigation.getParam('draftUserId')),
      true,
    );
    setIsLoading(false);
    console.log(responce);
    if (responce.status == 'success') {
      navigation.navigate('EnterName', {
        draftUserId: navigation.getParam('draftUserId'),
      });
    }
  }
}

const EnterPassword = props => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Keyboard.dismiss();
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
        Create your account password
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
                placeholder="Enter your password"
                value={password}
                secureTextEntry={true}
                onChangeText={value => setPassword(value)}
              />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                // onPress={() => props.navigation.navigate('EnterName')}
                onPress={() =>
                  onAddPassword(
                    password,
                    props.navigation,
                    setIsLoading,
                    setPassword,
                  )
                }
                style={{
                  width: '80%',
                  height: 45,
                  backgroundColor:
                    password == '' ? 'rgba(249,5,5,0.48)' : 'rgba(249,5,5,1)',
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

export default EnterPassword;

EnterPassword.navigationOptions = {
  header: null,
};
