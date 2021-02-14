// import React from 'react'
// import {View, Text, Image, TextInput } from 'react-native'
// import {Fonts} from '../../utils/Fonts.js'

// export default class EnterName extends React.Component{
//     render(){
//         return(
//             <View style={{backgroundColor:'#ffffff', flex:1,}}>
//                 <Image
//                     style={{height:24, width:33, marginTop:15, marginLeft:20}}
//                     source={require('../../images/Arrow.png')}
//                 />

//                <Text
//                 style={{
//                     fontSize:16,
//                     marginTop:30,
//                     width:"75%",
//                     alignSelf:'center',
//                 }}
//                >
//                    Enter your names
//                </Text>

//                 <View
//                     style={{
//                         flexDirection:'row',
//                         justifyContent:'center'
//                     }}

//                 >

// <TextInput
//                     style={{
//                         width:'35%',
//                         alignSelf:'center',
//                         fontSize:16,
//                         borderBottomWidth:1,
//                         borderColor:'#F90505',
//                         marginTop:30,
//                     }}
//                     placeholder="First"
//                />

//                 <TextInput
//                     style={{
//                         marginLeft:15,
//                         width:'35%',
//                         alignSelf:'center',
//                         fontSize:16,
//                         borderBottomWidth:1,
//                         borderColor:'#F90505',
//                         marginTop:30,
//                     }}
//                     placeholder="Last"
//                />

//                 </View>

//                     <View style={{
//                         width:'80%',
//                         height:40,
//                         backgroundColor:'#F90505',
//                         marginTop:345,
//                         alignSelf:'center',
//                         borderRadius:50,
//                         alignItems:'center',
//                         justifyContent:'center'

//                     }}>
//                     <Text
//                         style={{
//                             color:'white',
//                             fontFamily:Fonts.ArimoBold
//                         }}
//                     >CONTINUE</Text>
//                 </View>

//             </View>
//         );
//     }
// }

import React, {useState} from 'react';
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
import {Fonts} from '../../utils/Fonts.js';
import Loader from '../../components/Loader';
import {RegisterNameAPI} from '../../networking/api';
import {RegisterNamePayloads} from '../../networking/payloads';
import {PostRequest} from '../../networking/postRequest';
import Toast from 'react-native-simple-toast';

async function onAddName(
  firstName,
  lastName,
  setIsLoading,
  // setFirstName,
  // setLastName,
  navigation,
) {
  if (firstName == '' || lastName == '') {
    Toast.show('Fileds cannot be empty!');
  } else {
    var payload = RegisterNamePayloads(firstName, lastName);
    console.log(payload);
    setIsLoading(true);
    var responce = await PostRequest(
      payload,
      RegisterNameAPI(navigation.getParam('draftUserId')),
      true,
    );
    setIsLoading(false);
    console.log(responce);
    if (responce.status == 'success') {
      navigation.navigate('Terms');
    }
  }
}

const EnterName = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {isLoading ? <Loader text={'Please Wait !'} /> : null}
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
        Enter your names
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
                  width: '40%',
                }}
                placeholder="First"
                value={firstName}
                onChangeText={value => setFirstName(value)}
              />
              <TextInput
                style={{
                  marginTop: 5,
                  fontSize: 17,
                  fontFamily: Fonts.Arimo,
                  borderBottomWidth: 1,
                  borderColor: 'red',
                  width: '40%',
                  marginLeft: 20,
                }}
                placeholder="Last"
                value={lastName}
                onChangeText={value => setLastName(value)}
              />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate('Terms')
                  onAddName(
                    firstName,
                    lastName,
                    setIsLoading,
                    props.navigation,
                  );
                }}
                style={{
                  width: '80%',
                  height: 45,
                  backgroundColor:
                    firstName == '' ? 'rgba(249,5,5,0.48)' : 'rgba(249,5,5,1)',
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

export default EnterName;

EnterName.navigationOptions = {
  header: null,
};
