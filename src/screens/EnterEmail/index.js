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
    Image 
 } from 'react-native';
import {Fonts} from '../../utils/Fonts.js'


const EnterEmail = (props) => {
    const [number, setNumber] = useState('');
    useEffect(() => {
      return () => {
          Keyboard.dismiss()
      }
  }, [])
  return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        >
           <Image
                    style={{height:24, width:33, marginTop:15, marginLeft:20}}
                    source={require('../../images/Arrow.png')}
                />
                </TouchableOpacity>
                <Text style={{
                    marginHorizontal:60, 
                    fontFamily:Fonts.Arimo,
                    marginTop:50,
                    fontSize:17
                  }}>
                    What's your email address?
                </Text>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

         
                <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center' }}>
                   

                        <TextInput
                            style={{
                                marginTop:5,
                                fontSize:17, 
                                fontFamily:Fonts.Arimo,
                                borderBottomWidth:1,
                                borderColor:'red',
                                width:'80%'
                            }}
                            placeholder="jhon@example.com"
                            value={number}
                            keyboardType={"visible-password"}
                            secureTextEntry={true}
                            onChangeText={(value) => setNumber(value)}
                        />
                </View> 

          <View style={styles.btnContainer}>
            <TouchableOpacity 
            onPress={() => {
              Keyboard.dismiss()
              props.navigation.navigate('EnterPassword')}
            }
            style={{
                        width:'80%', 
                        height:45, 
                        backgroundColor: number == '' ? 'rgba(249,5,5,0.48)' : 'rgba(249,5,5,1)',
                        alignSelf:'center', 
                        borderRadius:50,
                        alignItems:'center',
                        justifyContent:'center',
                        
                        
                    }}>
                    <Text
                        style={{
                            color:'white',
                            fontFamily:Fonts.ArimoBold
                        }}
                    >CONTINUE</Text>
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
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
    bottom:50,
  }
});

export default EnterEmail;

EnterEmail.navigationOptions = {
  header:null
}