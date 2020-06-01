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
    Image 
 } from 'react-native';
import {Fonts} from '../../utils/Fonts.js'


const EnterName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
  return (
      <View style={{flex:1, backgroundColor:'white'}}>
           <Image
                    style={{height:24, width:33, marginTop:15, marginLeft:20}}
                    source={require('../../images/Arrow.png')}
                />
                <Text style={{
                    marginHorizontal:60, 
                    fontFamily:Fonts.Arimo,
                    marginTop:50,
                    fontSize:17
                  }}>
                    Enter your names
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
                                width:'40%',
                            }}
                            placeholder="First"
                            value={firstName}
                            onChangeText={(value) => setFirstName(value)}
                        />
                        <TextInput
                            style={{
                                marginTop:5,
                                fontSize:17, 
                                fontFamily:Fonts.Arimo,
                                borderBottomWidth:1,
                                borderColor:'red',
                                width:'40%',
                                marginLeft:20
                            }}
                            placeholder="Last"
                            value={lastName}
                            onChangeText={(value) => setLastName(value)}
                        />
                </View> 

          <View style={styles.btnContainer}>
            <TouchableOpacity style={{
                        width:'80%', 
                        height:45, 
                        backgroundColor: firstName == '' ? 'rgba(249,5,5,0.48)' : 'rgba(249,5,5,1)',
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

export default EnterName;
