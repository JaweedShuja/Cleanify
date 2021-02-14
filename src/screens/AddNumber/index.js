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
import CountryCodeModal from './CountryCodeModal';
import {Fonts} from '../../utils/Fonts.js';
import Toast from 'react-native-simple-toast';
import Loader from '../../components/Loader';

import {RegisterNumberAPI} from '../../networking/api';
import {RegisterNumberPayloads} from '../../networking/payloads';
import {PostRequest} from '../../networking/postRequest';

async function onAddNumber(number, setIsLoading, countryCode, navigation) {
  var msg = '';
  var error = false;
  if (number == '') {
    msg = 'Please Enter Number';
    error = true;
  } else if (countryCode == '') {
    msg = 'Please Select Country Code';
    error = true;
  }

  if (error) {
    Toast.show(msg);
  } else {
    setIsLoading(true);
    var payload = RegisterNumberPayloads(number);
    var responce = await PostRequest(payload, RegisterNumberAPI, true);
    setIsLoading(false);
    console.log(responce);
    if (responce.status == 'success') {
      navigation.navigate('EnterCode', {
        draftUserId: responce.draftUserId,
        number: number,
      });
    } else {
      Toast.show('Number already Registered');
    }
  }
}

const KeyboardAvoidingComponent = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('00');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    return function cleanup() {
      Keyboard.dismiss;
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <CountryCodeModal
          onSelect={setCountryCode}
          setModalVisible={visible => setModalVisible(visible)}
        />
      </Modal>

      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          style={{height: 24, width: 33, marginTop: 15, marginLeft: 20}}
          source={require('../../images/Arrow.png')}
        />
      </TouchableOpacity>
      {isLoading ? <Loader text={'Please Wait!'} /> : null}
      <Text
        style={{
          marginHorizontal: 100,
          fontFamily: Fonts.Arimo,
          marginTop: 50,
          fontSize: 17,
        }}>
        You’ll get an SMS to confirm your number
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
              <Image
                source={require('../../images/flag.png')}
                style={{height: 25, width: 25, marginTop: 10}}
              />
              <Image
                source={require('../../images/downtic.png')}
                style={{height: 13, width: 13, marginLeft: 4, marginTop: 8}}
              />
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{marginTop: 15}}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 2,
                  }}>{`+${countryCode}`}</Text>
                <View
                  style={{
                    width: '100%',
                    marginTop: 13,
                    marginLeft: 7,
                    height: 1,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                  }}></View>
              </TouchableOpacity>

              <View style={{marginLeft: 20}}>
                <TextInput
                  style={{
                    marginTop: 5,
                    fontSize: 18,
                    fontFamily: Fonts.Arimo,
                  }}
                  placeholder="Phone number"
                  value={number}
                  keyboardType={'numeric'}
                  onChangeText={value => setNumber(value)}
                />
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                  }}></View>
              </View>
            </View>

            {/* <TextInput placeholder="Username" style={styles.textInput} /> */}
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() =>
                  onAddNumber(
                    number,
                    setIsLoading,
                    countryCode,
                    props.navigation,
                  )
                }
                style={{
                  width: '80%',
                  height: 45,
                  // backgroundColor:'#F90505',
                  backgroundColor:
                    number == '' ? 'rgba(249,5,5,0.48)' : 'rgba(249,5,5,1)',
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

export default KeyboardAvoidingComponent;

KeyboardAvoidingComponent.navigationOptions = {
  headerShown: false,
};
