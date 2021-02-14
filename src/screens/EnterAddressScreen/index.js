// import React, { Component } from 'react'
// import {
//     View,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Image,
//     TextInput,
//     ImageBackground,
//     Keyboard,
//     TouchableWithoutFeedback,
//     Animated,
//     Dimensions,
//     Modal,
//     ActivityIndicator
//  } from 'react-native'
// import BackArrow from '../../images/Arrow.png'
// import MapImage from '../../images/MapImage.png'
// // import MapView from 'react-native-maps';
// import AddWork from '../../images/addWork.png'
// import AddHome from '../../images/addHome.png'
// import AddOther from '../../images/addOther.png'
// import SwipeGesture from '../../../swipe-gesture'
// import Helper from '../../utils/Helper'
// import BookingData from '../../utils/BookingData'
// import {AddBookingAddressPayload} from '../../networking/payloads';
// import {PostRequestWithAuthentication} from '../../networking/postRequest';
// import {AddBookingAddressAPI} from '../../networking/api';

// class EnterAddressScreen extends Component {
//   static navigationOptions = {
//     headerShown:false
//   }
//     constructor(props)
//     {
//         super(props)

//         this.state = {
//             animation: new Animated.Value(0),
//             isHomeSelect:false,
//             address:'',
//             isLoading:false
//         }
//     }
//     async handleSubmit(){
//       if(this.state.address == ''){
//         Helper.showToast('Please Choose Location!')
//       }else{
//         BookingData.address = this.state.address
//         BookingData.actual_address = this.state.address
//         BookingData.lat = '45.1932024'
//         BookingData.lng = '67.1554619'

//         this.setState({isLoading: true});
//         const payload = AddBookingAddressPayload(this.state.address, '13.4', '13.4', this.state.address);
//         var responce = await PostRequestWithAuthentication(payload, AddBookingAddressAPI(BookingData.bookingDraftId), true);
//         this.setState({isLoading: false});
//         if (responce.status == 'success') {
//             Helper.showToast('Address Added Successfully');
//             this.props.navigation.navigate('RequestScreen');
//         }
//         else{
//             Helper.showToast('There is unknown error!')
//         }
        
//       } 
//     }
//     handleOpen = () => {
//         Animated.timing(this.state.animation, {
//           toValue: 1,
//           duration: 300,
//           useNativeDriver: true,
//         }).start();
//       };
//       handleClose = () => {
//         Animated.timing(this.state.animation, {
//           toValue: 0,
//           duration: 200,
//           useNativeDriver: true,
//         }).start();
//       };
//       onSwipePerformed = (action) => {

//         switch(action){
//           case 'left':{
//             console.log('left Swipe performed');
//             break;
//           }
//            case 'right':{
//             console.log('right Swipe performed');
//             break;
//           }
//            case 'up':{
//             console.log('up Swipe performed');
//             break;
//           }
//            case 'down':{
//             console.log('down Swipe performed');
//             this.handleClose()
//             break;
//           }
//            default : {
//            console.log('Undeteceted action');
//            }
//         }
//       }

//    render() {
//     const screenHeight = Dimensions.get("window").height;
//     const backdrop = {
//         transform: [
//           {
//             translateY: this.state.animation.interpolate({
//               inputRange: [0, 0.01],
//               outputRange: [screenHeight, 0],
//               extrapolate: "clamp",
//             }),
//           },
//         ],
//         opacity: this.state.animation.interpolate({
//           inputRange: [0.01, 0.5],
//           outputRange: [0, 1],
//           extrapolate: "clamp",
//         }),
//       };
//       const slideUp = {
//         transform: [
//           {
//             translateY: this.state.animation.interpolate({
//               inputRange: [0.01, 1],
//               outputRange: [0, -1 * screenHeight],
//               extrapolate: "clamp",
//             }),
//           },
//         ],
//       };
//        return (
         
//            <ImageBackground

//                 style={{height:'100%', width:'100%'}}
//                 source={MapImage}
//            >
//            <TouchableWithoutFeedback
//             onPress={
//                 Keyboard.dismiss
//             }
//            >
//            <View style={styles.container}>
//               { this.state.isHomeSelect ?
//               <View style={{backgroundColor:"white", height:55, flexDirection:'row', alignItems:'center'}}>
//               <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
//                   <Image
//                       style={{height:24, width:33, marginLeft:20}}
//                       source={require('../../images/Arrow.png')}
//                   />
//               </TouchableOpacity>
//               <View style={{
//                             height:40,
//                             width:40,
//                             backgroundColor:'#F90505',
//                             borderRadius:70,
//                             marginLeft:20,
//                             alignItems:'center',
//                             justifyContent:'center',
//                             }}>
//                                 <Image
//                                     style={{height:20, width:20}}
//                                     source={AddHome}
//                                 />
//                         </View>
//                         <Text style={{marginLeft:20, color:'#6A7980'}}>{this.state.address}</Text>

//     </View>
//                  : <View style={styles.addressBarView}>
//                     <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
//                         <Image
//                             style={{height:24, width:33, marginTop:15, marginLeft:20}}
//                             source={require('../../images/Arrow.png')}
//                         />
//                     </TouchableOpacity>
//                     <TextInput
//                         value={this.state.address}
//                         onChangeText={(value) => this.setState({address:value})}
//                         onFocus={() => this.handleOpen()}
//                         style={styles.textInput}
//                         placeholder="Street Address"

//                     />
//                     <TextInput
//                         onFocus={() => this.handleOpen()}
//                         style={[styles.textInput,{marginTop:75,}]}
//                         placeholder="Unit & Apartment name"
//                     />
//                     <View style={{width:12, position:'absolute', marginLeft:60, marginTop:35,}}>
//                         <View style={{height:12, width:12, backgroundColor:'#0052B4'}}>

//                         </View>
//                         <View style={{width:2, height:40, backgroundColor:'#6A7980', alignSelf:'center' }}>

//                         </View>
//                         <View style={{height:12, width:12, backgroundColor:'#F90505'}}>

//                         </View>
//                     </View>
//           </View> }
//                <View style={{flex:1,}}>
//                     <TouchableOpacity
//                     disabled={this.state.isLoading}
//                     onPress={() => {
                      
//                       this.handleSubmit()
//                     }
//                     }
//                      style={{
//                         height:45,
//                         width:'80%',
//                         backgroundColor:'#F90505',
//                         position:'absolute',
//                         bottom:20,
//                         alignSelf:'center',
//                         borderRadius:30,
//                         alignItems:'center',
//                         justifyContent:'center',
//                         opacity:this.state.isLoading ? 0.5 : 1
//                     }}>
//                        {
//                          this.state.isLoading ? 

//                          <ActivityIndicator size={'small'} color="white" />
//                          :
//                          <Text
//                             style={{
//                                 fontWeight:'bold',
//                                 color:'white',
//                             }}
//                         >USE LOCATION</Text>
//                         }
//                     </TouchableOpacity>
//                 </View>

//            </View>
//            </TouchableWithoutFeedback>

//            <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
//           <View style={[styles.sheet]}>
//             <Animated.View style={[styles.popup, slideUp]}>
//                 <SwipeGesture
//             gestureStyle={{ width:'100%'}}
//            onSwipePerformed={this.onSwipePerformed}
//            >
//               <TouchableOpacity
//               style={{height:30,}}
//              onPress={this.handleClose}
//               >
//                 <View style={{width:113, height:3, backgroundColor:'#D8DADD', marginTop:10, alignSelf:'center'}}>

//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity
//               onPress={() => {
//                   this.setState({
//                     isHomeSelect:true,
//                     address:'1993 Mbalo Street, Midrand'
//                   })
//                   this.handleClose()

//                 }}
//               style={{
//                         width:'100%',
//                         height:55,
//                         marginTop:20,
//                         backgroundColor:'white',
//                         alignSelf:'center',
//                         flexDirection:'row',
//                         borderBottomWidth:1,
//                         borderColor:'#DBDFE4',
//                         alignItems:'center'

//                     }}>
//                         <View style={{
//                             height:40,
//                             width:40,
//                             backgroundColor:'#F90505',
//                             borderRadius:70,
//                             marginLeft:30,
//                             alignItems:'center',
//                             justifyContent:'center',
//                             }}>
//                                 <Image
//                                     style={{height:20, width:20}}
//                                     source={AddHome}
//                                 />
//                         </View>
//                         <Text style={{marginLeft:20,}}>1993 Mbalo Street</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//               onPress={() => {
//                   this.handleClose()

//                 }}
//               style={{
//                         width:'100%',
//                         height:55,
//                         backgroundColor:'white',
//                         alignSelf:'center',
//                         flexDirection:'row',
//                         borderBottomWidth:1,
//                         borderColor:'#DBDFE4',
//                         alignItems:'center',

//                     }}>
//                         <View style={{
//                             height:40,
//                             width:40,
//                             backgroundColor:'#F90505',
//                             borderRadius:70,
//                             marginLeft:30,
//                             alignItems:'center',
//                             justifyContent:'center',
//                             }}>
//                                 <Image
//                                     style={{height:20, width:20}}
//                                     source={AddWork}
//                                 />
//                         </View>
//                         <Text style={{marginLeft:20,}}>Add Work</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//               onPress={() => {
//                   this.handleClose()

//                 }}
//               style={{
//                         width:'100%',
//                         height:55,
//                         backgroundColor:'white',
//                         alignSelf:'center',
//                         flexDirection:'row',
//                         borderBottomWidth:1,
//                         borderColor:'#DBDFE4',
//                         alignItems:'center'

//                     }}>
//                         <View style={{
//                             height:40,
//                             width:40,
//                             backgroundColor:'#F90505',
//                             borderRadius:70,
//                             marginLeft:30,
//                             alignItems:'center',
//                             justifyContent:'center',
//                             }}>
//                                 <Image
//                                     style={{height:20, width:20}}
//                                     source={AddOther}
//                                 />
//                         </View>
//                         <Text style={{marginLeft:20,}}>Add Other</Text>
//                 </TouchableOpacity>
//         </SwipeGesture>

//             </Animated.View>
//           </View>
//         </Animated.View>
//            </ImageBackground>
//         )
//     }
// }

// export default EnterAddressScreen

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     },
//     addressBarView:{
//         height:130,
//         backgroundColor:'white'
//     },
//     textInput:{
//         height:33,
//         width:237,
//         marginLeft:80,
//         marginTop:25,
//         backgroundColor:'#ECEFF0',
//         position:'absolute',
//         padding:5,
//     },
//     cover: {
//         backgroundColor: "rgba(0,0,0,0)",
//       },
//       sheet: {
//         position: "absolute",
//         top: Dimensions.get("window").height,
//         left: 0,
//         right: 0,
//         height: "100%",
//         justifyContent: "flex-end",
//       },
//       popup: {
//         backgroundColor: "#FFF",
//         borderTopLeftRadius: 15,
//         borderTopRightRadius: 15,
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: 80,
//       },
// })

import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ActivityIndicator, 
  Button,
  PermissionsAndroid,
  ToastAndroid, 
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
import MapView from "react-native-maps";
import styles from "./style";
import AddWork from '../../images/addWork.png'
import AddHome from '../../images/addHome.png'
import AddOther from '../../images/addOther.png'
import Geolocation from 'react-native-geolocation-service';
import {Fonts} from '../../utils/Fonts'
import {Colors} from '../../utils/Colors'
import SwipeGesture from '../../../swipe-gesture'
import {AddBookingAddressPayload} from '../../networking/payloads';
import {PostRequestWithAuthentication} from '../../networking/postRequest';
import {AddBookingAddressAPI} from '../../networking/api';
import Helper from '../../utils/Helper'
import BookingData from '../../utils/BookingData'

// Disable yellow box warning messages
console.disableYellowBox = true;

export default class App extends Component {
  static navigationOptions = {
    headerShown:false,
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      },
      isMapReady: false,
      marginTop: 1,
      userLocation: "",
      userAddress:'',
      regionChangeProgress: false,

      currentLat:'10',
      currentLon:'10',

      animation: new Animated.Value(0),
      isLoadingButton:false
    };
    
  }
  async handleSubmit(){
    
    console.log(this.state.currentLat)
    console.log(this.state.currentLon)

    if(this.state.userAddress == ''){
      Helper.showToast('Please write Unit or apartment name!')
    }else{
      BookingData.address = this.state.userLocation
      BookingData.actual_address = this.state.userAddress
      BookingData.lat = this.state.currentLat
      BookingData.lng = this.state.currentLon

      this.setState({isLoadingButton: true});
      const payload = AddBookingAddressPayload(
        this.state.userLocation, 
        this.state.currentLat, 
        this.state.currentLon, 
        this.state.userAddress
        );
      var responce = await PostRequestWithAuthentication(payload, AddBookingAddressAPI(BookingData.bookingDraftId), true);
      this.setState({isLoadingButton: false});
      if (responce.status == 'success') {
          Helper.showToast('Address Added Successfully');
          this.props.navigation.navigate('RequestScreen');
      }
      else{
          Helper.showToast('There is unknown error!')
      }
    } 
  }

  async getLocation(){
    if (this.hasLocationPermission()) {
      await Geolocation.getCurrentPosition(
          (position) => {
          const region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001
            };
            this.setState({
              region: region,
              loading: false,
              error: null,
              currentLat: position.coords.latitude,
              currentLon: position.coords.longitude,
              
            });
          },
          (error) => {
            alert(error);
            this.setState({
              error: error.message,
              loading: false
            })
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  async componentDidMount() {
    await this.getLocation()
    
  }
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

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await this.hasLocationPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  onMapReady = () => {
    this.setState({ isMapReady: true, marginTop: 0 });
  }

  // Fetch location details as a JOSN from google map API
  fetchAddress = () => {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.region.latitude + "," + this.state.region.longitude + "&key=" + "AIzaSyAWXcC4fpvDCMaOuffxDDJPPBTDSngHMAc")
      .then((response) => response.json())
      .then((responseJson) => {
        const userLocation = responseJson.results[0].formatted_address;
        this.setState({
          userLocation: userLocation,
          regionChangeProgress: false
        });
      });
  }

  // Update state on region change
  onRegionChange = region => {
    this.setState({
      region,
      regionChangeProgress: true
    }, () => this.fetchAddress());
  }

  // Action to be taken after select location button click
  onLocationSelect = () => {
      alert(this.state.userLocation)
    };
    

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
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <TouchableWithoutFeedback style={{flex:1,}} onPress={() => {
          Keyboard.dismiss()
          this.handleClose()
      }}>
        <View style={styles.container}>
          <View style={{ flex: 2 }}>
            {!!this.state.region.latitude && !!this.state.region.longitude &&
              <MapView
              customMapStyle={require('../../../map_styles.json')}
                style={{ ...styles.map, marginTop: this.state.marginTop }}
                initialRegion={this.state.region}
                showsUserLocation={true}
                onMapReady={this.onMapReady}
                onRegionChangeComplete={this.onRegionChange}
                
              >
              </MapView>
            }
            <View style={{
              height:130,
              width:'100%',
              backgroundColor:'white',
              position:'absolute',
              flexDirection:'row',
              top:0
            }}>
              <View style={{
                width:50
              }}>
                <TouchableOpacity 
                onPress={() => this.props.navigation.goBack()}
                style={{
                height:50,
                width:50,
                alignItems:'center',
                justifyContent:"center",
              }}>
                <Image
                    style={{height:24, width:33}}
                    source={require('../../images/Arrow.png')}
                />

              </TouchableOpacity>
              </View>
              <View style={{flex:1,
                  flexDirection:'row',
                  }}>
                    <View style={{
                      width:30,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                      <View style={{
                        height:10,
                        width:10,
                        backgroundColor:'blue'
                      }}>

                      </View>
                      <View style={{
                        height:45,
                        width:1,
                        backgroundColor:'black'
                      }}>

                      </View>
                      <View style={{
                        height:10,
                        width:10,
                        backgroundColor:'red'
                      }}>

                      </View>

                    </View>
                    <View style={{
                      flex:1,
                    }}>

                      <TextInput 
                        style={{
                          backgroundColor:'white',
                          backgroundColor:'#ECEFF0',
                          marginLeft:10,
                          marginVertical:10,
                          marginRight:30,
                          paddingHorizontal:10,
                          height:40,
                          fontFamily:Fonts.Arimo
                        }}
                        placeholder="Street Address"
                        value={!this.state.regionChangeProgress ? this.state.userLocation : "Identifying Location..."}
                      />
                      <TextInput 
                        style={{
                          backgroundColor:'white',
                          backgroundColor:'#ECEFF0',
                          marginLeft:10,
                          marginVertical:10,
                          marginRight:30,
                          paddingHorizontal:10,
                          height:40,
                          fontFamily:Fonts.Arimo
                          
                        }}
                        placeholder="Unit & Apartment name"
                        value={this.state.userAddress}
                        onChangeText={(value) => this.setState({userAddress:value})}
                      />

                    </View>



              </View>
              
              
            </View>
                      <View style={{
                        flexDirection:'row',
                        height:45,
                        width:'90%',
                        alignSelf:'center',
                        position:'absolute',
                        bottom:100,
                        alignItems:'center',
                        justifyContent:'space-around',
                      }}>
                         <TouchableOpacity 
                         disabled={this.state.isLoadingButton}
                         onPress={() => {
                           this.handleSubmit()
                         }}
                         style={{
              height:45,
              width:200,
              backgroundColor:Colors.themeRed,
              borderRadius:30,
              alignItems:'center',
              justifyContent:'center',
              opacity:this.state.isLoadingButton ? 0.8 : 1
            }}>
             {
               this.state.isLoadingButton

               ?
               <ActivityIndicator 
                size={'small'}
                color={'white'}
              />
               
              :
              <Text style={{
                color:'white',
                fontSize:16,
                fontFamily:Fonts.Arimo
              }}>
                USE LOCATION
              </Text>
              
             }


            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => this.handleOpen()}
            style={{
              height:45,
              width:45,
              backgroundColor:Colors.themeRed,
              borderRadius:45,
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image 
                style={{
                  height:30,
                  width:30,
                  tintColor:'white'
                }}
                source={require('../../images/pin.png')}
              />


            </TouchableOpacity>

                      </View>
           

            <View style={styles.mapMarkerContainer}>
              {/* <Text style={{ fontFamily: 'fontawesome', fontSize: 42, color: "#ad1f1f" }}>&#xf041;</Text> */}
              <View style={{
                  height:25,
                  width:25,
              }}>
                <Image
                  style={{
                    height:25,
                    width:25
                  }} 
                  source={require('../../images/marker.png')}
                />


              </View>
            </View>
          </View>
          {/* <View style={styles.deatilSection}>
            <Text style={{ fontSize: 16, fontWeight: "bold", fontFamily: "roboto", marginBottom: 20 }}>Move map for location</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>LOCATION</Text>
            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}>
              {!this.state.regionChangeProgress ? this.state.userLocation : "Identifying Location..."}</Text>
            <View style={styles.btnContainer}>
              <Button
                title="PICK THIS LOCATION"
                disabled={this.state.regionChangeProgress}
                onPress={this.onLocationSelect}
              >
              </Button>
            </View>
          </View> */}
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
                    isHomeSelect:true,
                    address:'1993 Mbalo Street, Midrand'
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
        </View>
        </TouchableWithoutFeedback>
      );
    }
  }
}