import React, { Component } from 'react'
import { 
    View, 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    Image, 
    TextInput,
    ImageBackground,
    Keyboard,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
    Modal
 } from 'react-native'
import BackArrow from '../../images/Arrow.png'
import MapImage from '../../images/MapImage.png'
// import MapView from 'react-native-maps'; 
import AddWork from '../../images/addWork.png'
import AddHome from '../../images/addHome.png'
import AddOther from '../../images/addOther.png'
import SwipeGesture from '../../../swipe-gesture'

class EnterAddressScreen extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            animation: new Animated.Value(0),
            isHomeSelect:false,
            
        }
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
      onSwipePerformed = (action) => {
    
        switch(action){
          case 'left':{
            console.log('left Swipe performed');
            break;
          }
           case 'right':{
            console.log('right Swipe performed');
            break;
          }
           case 'up':{
            console.log('up Swipe performed');
            break;
          }
           case 'down':{
            console.log('down Swipe performed');
            this.handleClose()
            break;
          }
           default : {
           console.log('Undeteceted action');
           }
        }
      }
      
   render() {
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
       return (
           <ImageBackground
                
                style={{height:'100%', width:'100%'}}
                source={MapImage}
           >
           <TouchableWithoutFeedback
            onPress={
                Keyboard.dismiss
            }
           >    
           <View style={styles.container}>
              { this.state.isHomeSelect ? 
              <View style={{backgroundColor:"white", height:55, flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity>
                  <Image
                      style={{height:24, width:33, marginLeft:20}}
                      source={require('../../images/Arrow.png')}
                  />
              </TouchableOpacity>
              <View style={{
                            height:40, 
                            width:40, 
                            backgroundColor:'#F90505', 
                            borderRadius:70,
                            marginLeft:20,
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={AddHome}
                                />
                        </View>
                        <Text style={{marginLeft:20, color:'#6A7980'}}>1993 Mbalo Street, Midrand</Text>
              
    </View>
                 : <View style={styles.addressBarView}>
                    <TouchableOpacity>
                        <Image
                            style={{height:24, width:33, marginTop:15, marginLeft:20}}
                            source={require('../../images/Arrow.png')}
                        />
                    </TouchableOpacity>
                    <TextInput
                        onFocus={() => this.handleOpen()}
                        style={styles.textInput}
                        placeholder="Street Address"
                        
                    />
                    <TextInput
                        onFocus={() => this.handleOpen()}
                        style={[styles.textInput,{marginTop:75,}]}
                        placeholder="Unit & Apartment name"
                    />
                    <View style={{width:12, position:'absolute', marginLeft:60, marginTop:35,}}>
                        <View style={{height:12, width:12, backgroundColor:'#0052B4'}}>

                        </View>
                        <View style={{width:2, height:40, backgroundColor:'#6A7980', alignSelf:'center' }}>

                        </View>
                        <View style={{height:12, width:12, backgroundColor:'#F90505'}}>

                        </View>
                    </View>
          </View> }
               <View style={{flex:1,}}>
                    <TouchableOpacity
                    onPress={() => this.handleOpen()}
                     style={{
                        height:45, 
                        width:'80%', 
                        backgroundColor:'#F90505', 
                        position:'absolute', 
                        bottom:20, 
                        alignSelf:'center', 
                        borderRadius:30,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text
                            style={{
                                fontWeight:'bold',
                                color:'white',
                            }}
                        >USE LOCATION</Text>
                    </TouchableOpacity>
                </View>
                
           </View>
           </TouchableWithoutFeedback>
           
           <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
                <SwipeGesture 
            gestureStyle={{ width:'100%'}}
           onSwipePerformed={this.onSwipePerformed}
           >
              <TouchableOpacity 
              style={{height:30,}}
             onPress={this.handleClose}
              >
                <View style={{width:113, height:3, backgroundColor:'#D8DADD', marginTop:10, alignSelf:'center'}}>

                </View>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => {
                  this.setState({
                    isHomeSelect:true
                  })
                  this.handleClose()
                  
                }}
              style={{
                        width:'100%', 
                        height:55, 
                        marginTop:20,
                        backgroundColor:'white',
                        alignSelf:'center', 
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#DBDFE4',
                        alignItems:'center'
                        
                    }}>
                        <View style={{
                            height:40, 
                            width:40, 
                            backgroundColor:'#F90505', 
                            borderRadius:70,
                            marginLeft:30,
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={AddHome}
                                />
                        </View>
                        <Text style={{marginLeft:20,}}>1993 Mbalo Street</Text>
                </TouchableOpacity>
                <TouchableOpacity 
              onPress={() => {
                  this.handleClose()
                  
                }}
              style={{
                        width:'100%', 
                        height:55, 
                        backgroundColor:'white',
                        alignSelf:'center', 
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#DBDFE4',
                        alignItems:'center',
                        
                    }}>
                        <View style={{
                            height:40, 
                            width:40, 
                            backgroundColor:'#F90505', 
                            borderRadius:70,
                            marginLeft:30,
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={AddWork}
                                />
                        </View>
                        <Text style={{marginLeft:20,}}>Add Work</Text>
                </TouchableOpacity>
                <TouchableOpacity 
              onPress={() => {
                  this.handleClose()
                  
                }}
              style={{
                        width:'100%', 
                        height:55, 
                        backgroundColor:'white',
                        alignSelf:'center', 
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderColor:'#DBDFE4',
                        alignItems:'center'
                        
                    }}>
                        <View style={{
                            height:40, 
                            width:40, 
                            backgroundColor:'#F90505', 
                            borderRadius:70,
                            marginLeft:30,
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={AddOther}
                                />
                        </View>
                        <Text style={{marginLeft:20,}}>Add Other</Text>
                </TouchableOpacity>
        </SwipeGesture> 
                
            </Animated.View>
          </View>
        </Animated.View>
           </ImageBackground>
        )
    }
}

export default EnterAddressScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    addressBarView:{
        height:130,
        backgroundColor:'white'
    },
    textInput:{
        height:33,
        width:237,
        marginLeft:80,
        marginTop:25,
        backgroundColor:'#ECEFF0',
        position:'absolute',
        padding:5,
    },
    cover: {
        backgroundColor: "rgba(0,0,0,0)",
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
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 80,
      },
})
 