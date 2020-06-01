import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, Animated, Dimensions, StyleSheet, Keyboard } from 'react-native'
import {Fonts} from '../../utils/Fonts.js'
import Scroller from "./scroller";
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

export default class EnterCode extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter:5,
            message: 'Resend code in',
            animation: new Animated.Value(0),
            resendCode:false,
            margin:250,
            code:''
        }
        var t = setInterval(() => {
            this.setState({
                counter : this.state.counter - 1
            })
            if(this.state.counter == 0){
                clearInterval(t);
            }
        },1000)
    }
    handleOpen = () => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      };
      handleClose = () => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      };
      _checkCode = () => {
        
      }
    render(){
        const screenHeight = Dimensions.get("window").height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };
        return(
            <View style={{backgroundColor:'#ffffff', flex:1,}}>
                <Image
                    style={{height:24, width:33, marginTop:15, marginLeft:20}}
                    source={require('../../images/Arrow.png')}
                />

               <Text
                style={{
                    fontFamily:Fonts.ArimoBold,
                    fontSize:18,
                    marginLeft:22,
                    marginTop:20,
                }}
               >
                   Enter code
               </Text>
               <Text
                style={{
                    fontFamily:Fonts.Arimo,
                    marginLeft:22,
                    marginTop:3
                }}
               >
                   A code was sent to
               </Text>
               <Text
                style={{
                    fontFamily:Fonts.ArimoBold,
                    fontSize:18,
                    marginLeft:22,
                    marginTop:3,
                }}
               >
                   +27 744796691
               </Text>

               <Text
                style={{
                    fontFamily:Fonts.Arimo,
                    marginLeft:22,
                    marginTop:3,
                    color:'#F90505'
                }}
               >
                   Edit phone number
               </Text>

               {/* <View style={{flexDirection:'row', alignSelf:'center', marginTop:20,}}>
                    <View 
                        style={{
                            height:50, 
                            width:50, 
                            backgroundColor:'#E6E9ED', 
                            borderWidth:1, 
                            borderColor:'#F90505', 
                            borderRadius:5,
                            margin:7,
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <TextInput
                                style={{fontSize:25}}
                                keyboardType="number-pad"
                            />

                    </View>
                    <View 
                        style={{
                            height:50, 
                            width:50, 
                            backgroundColor:'#E6E9ED', 
                            borderRadius:5,
                            margin:7,
                        }}>

                    </View>
                    <View 
                        style={{
                            height:50, 
                            width:50, 
                            backgroundColor:'#E6E9ED', 
                            borderRadius:5,
                            margin:7,
                        }}>

                    </View>
                    <View 
                        style={{
                            height:50, 
                            width:50, 
                            backgroundColor:'#E6E9ED', 
                            borderRadius:5,
                            margin:7,
                        }}>

                    </View>
               </View>    */}
               <View style={{alignItems:'center', marginTop:30}}>
               <SmoothPinCodeInput
                    
                    cellSize={55}
                    cellSpacing={20}
                    ref={this.pinInput}
                    value={this.state.code}
                    onTextChange={code => this.setState({ code:code })}
                    onFulfill={Keyboard.dismiss}
                    onBackspace={this._focusePrevInput}
                    cellStyle={{
                        backgroundColor:'#E6E9ED',
                        borderRadius:3,
                    }}
                    // cellStyleFocused={{
                    //     borderColor: '#F90505',
                    //   }}
                    cellStyleFocused={{
                        borderWidth:1,
                        borderColor: '#F90505',
                      }}
                />
                </View>



            <View  style={{marginTop:this.state.margin}}>
               {this.state.resendCode == true ? <View style={{
                   width:226, 
                   height:64, 
                   borderRadius:5, 
                   backgroundColor:'#F90505', 
                   alignItems:'center', 
                   justifyContent:'center',
                   alignSelf:'center',
                   }}>
                        <Text style={{color:'white', fontSize:14, fontFamily:Fonts.Arimo}}>
                            Code has been sent 
                        </Text>

               </View> : null}
                {this.state.counter == 0 ? <TouchableOpacity onPress={this.handleOpen}>
                    <Text style={{fontSize:12, marginLeft:22, marginTop:50, color:'#F90505', fontFamily:Fonts.Arimo}}>
                    Didn’t receive Code
               </Text> 
                </TouchableOpacity> : <Text style={{fontSize:12, marginLeft:22, marginTop:50, fontFamily:Fonts.Arimo}}>
                    {this.state.message} {this.state.counter}
               </Text> }     
               </View> 

<Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <TouchableOpacity onPress={this.handleClose}>
                {/* <Text>Close</Text> */}
                <View style={{width:113, height:3, backgroundColor:'#D8DADD', marginTop:10,}}>

                </View>
              </TouchableOpacity>
              {/* <Scroller /> */}
              <TouchableOpacity 
              onPress={() => {
                  this.setState({resendCode:true, margin:200})
                  this.handleClose()
                  
                }}
              style={{
                        width:'80%', 
                        height:45, 
                        backgroundColor:'rgba(249,5,5,1)',
                        alignSelf:'center', 
                        borderRadius:50,
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:50,
                        
                    }}>
                    <Text
                        style={{
                            color:'white',
                            fontFamily:Fonts.ArimoBold
                        }}
                    >RESEND CODE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.handleClose}
                 style={{
                        width:'80%', 
                        height:45, 
                        backgroundColor:'rgba(249,5,5,1)',
                        alignSelf:'center', 
                        borderRadius:50,
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:40,
                        marginBottom:50,
                        
                    }}>
                    <Text
                        style={{
                            color:'white',
                            fontFamily:Fonts.ArimoBold
                        }}
                    >CANCEL</Text>
                </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    cover: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    sheet: {
      position: "absolute",
      top: Dimensions.get("window").height,
      left: 0,
      right: 0,
      height: "100%",
      justifyContent: "flex-end",
    },
    popup: {
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 80,
    },
  });