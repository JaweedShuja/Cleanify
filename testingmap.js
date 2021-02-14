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
import styles from "./styles";
import AddWork from './src/images/addWork.png'
import AddHome from './src/images/addHome.png'
import AddOther from './src/images/addOther.png'
import Geolocation from 'react-native-geolocation-service';
import {Fonts} from './src/utils/Fonts'
import {Colors} from './src/utils/Colors'
import SwipeGesture from './swipe-gesture'
import {AddBookingAddressPayload} from './src/networking/payloads';
import {PostRequestWithAuthentication} from './src/networking/postRequest';
import {AddBookingAddressAPI} from './src/networking/api';
import Helper from './src/utils/Helper'
import BookingData from './src/utils/BookingData'

// Disable yellow box warning messages
console.disableYellowBox = true;

export default class App extends Component {
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

    // if(this.state.address == ''){
    //   Helper.showToast('Please Choose Location!')
    // }else{
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
    // } 
  }

  async componentDidMount() {
    
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
                <TouchableOpacity style={{
                height:50,
                width:50,
                alignItems:'center',
                justifyContent:"center",
              }}>
                <Image
                    style={{height:24, width:33}}
                    source={require('./src/images/Arrow.png')}
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
                source={require('./src/images/pin.png')}
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
                  source={require('./src/images/marker.png')}
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