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


const KeyboardAvoidingComponent = (props) => {
    const [number, setNumber] = useState('');
    useEffect(() => {
      return function cleanup(){
        Keyboard.dismiss
      }
    })
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
                    marginHorizontal:100, 
                    fontFamily:Fonts.Arimo,
                    marginTop:50,
                    fontSize:17
                  }}>
                    You’ll get an SMS to confirm your number
                </Text>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

         
                <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center' }}>
                    <Image
                        source={require('../../images/flag.png')}
                        style={{height:25, width:25, marginTop:10}}
                    /> 
                    <Image
                        source={require('../../images/downtic.png')}
                        style={{height:13, width:13, marginLeft:4, marginTop:8}}
                    />
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:18, marginLeft:2}}>
                            +27
                        </Text>
                        <View style={{width:'100%', marginTop:13,marginLeft:7, height:1, backgroundColor:'red', alignSelf:'center'}}>

                        </View>
                    </View>

                    <View style={{marginLeft:20}}>
                        <TextInput
                            style={{
                                marginTop:5,
                                fontSize:18, 
                                fontFamily:Fonts.Arimo
                            }}
                            placeholder="Phone number"
                            value={number}
                            keyboardType={"numeric"}
                            onChangeText={(value) => setNumber(value)}
                        />
                            <View style={{
                                width:'100%', 
                                height:1, 
                                backgroundColor:'red', 
                                alignSelf:'center',
                                }}>

                        </View>
                    </View>  
                </View> 

          {/* <TextInput placeholder="Username" style={styles.textInput} /> */}
          <View style={styles.btnContainer}>
            <TouchableOpacity 
            onPress={() => props.navigation.navigate('EnterCode')}
            style={{
                        width:'80%', 
                        height:45, 
                        // backgroundColor:'#F90505', 
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

export default KeyboardAvoidingComponent;

KeyboardAvoidingComponent.navigationOptions = {
  header:null
}