import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    TouchableWithoutFeedback ,
    ActivityIndicator,
    BackHandler,
    FlatList
} from 'react-native'
import MenuIcon from '../../images/menuIcon.png'
import ButtonText from '../../images/BOOK_A_CLEANING.png' 
import MenuDrawer from 'react-native-side-drawer'
import SwipeGesture from '../../../swipe-gesture'
import {NavigationEvents} from 'react-navigation';

import {Fonts} from '../../utils/Fonts.js'
import Loader from '../../components/Loader';
import CalenderIcon from '../../images/calendar.png'
import PaymentIcon from '../../images/paymentIcon.png'
import MyCleansIcon from '../../images/myCleansIcon.png'
import PromotionIcon from '../../images/promotionIcon.png'
import PinIcon from '../../images/pinIcon.png'
import AboutIcon from '../../images/aboutIcon.png'
import LogoutIcon from '../../images/logoutIcon.png'

import Laundry from '../../images/Laundry.png'
import Ironing from '../../images/Ironing.png'
import Windows from '../../images/Windows.png'
import Shoe_wash from '../../images/Shoe_wash.png'  
import Fridge from '../../images/Fridge.png'
import Stove from '../../images/Stove.png'

import {CreateBookingPayload} from '../../networking/payloads';
import {PostRequestWithAuthentication} from '../../networking/postRequest';
import {CreateBookingAPI} from '../../networking/api';

import Helper from '../../utils/Helper'

import BookingData from '../../utils/BookingData'

class EstimateScreen extends Component {
    static navigationOptions = {
        headerShown:false,
      }
    constructor(props){
        super(props)
        this.state = {
            open: false,
            bgColor:'white',
            totalBedrooma:1,
            isLoading:false,
            totalBathrooms:1,

            extras:[],
            extrasImages:[
                Laundry,
                Ironing,
                Windows,
                Shoe_wash,
                Fridge,
                Stove,
            ],
            services:[],
            extraPrice:0,
            bedRoomPrice:0,
            bathRoomPrice:0,
            name:'',
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }
    async componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          this.backAction,
        );
        await this.getExtra()
        await this.getUser()
        await Helper.clearBookingData()
      }
      async getUser(){
        let User = await Helper.getUser();
        this.setState({
            name: User.first_name + " " + User.last_name
        })
      }
      async getExtra(){
        let ExtraData = await Helper.getExtraData();
        this.setState({
            bedRoomPrice:ExtraData.bedRoomPrice,
            bathRoomPrice:ExtraData.bathRoomPrice,
            extras:ExtraData.extras
        })
      }
      toggleService(id, price){
        if(this.serviceAlreadyPresent(id)){
            this.removeService(id, price)
        }
        else{
            this.addService(id, price)
        }
      }
      serviceAlreadyPresent(id){
        for(let i = 0; i < BookingData.services.length; i++){
            if(BookingData.services[i] == id){
                return true
            }
        }
        return false
    }
    addService(id, price){
        BookingData.services.push(id)
        console.log(BookingData)
        this.setState({
            services:BookingData.services,
            extraPrice:this.state.extraPrice + price
        })
    }
    removeService(id, price){
        var filteredServices = BookingData.services.filter(el => {return el != id})
        BookingData.services = filteredServices
        this.setState({
            services:BookingData.services,
            extraPrice:this.state.extraPrice - price
        })
    }
    
      componentWillUnmount() {
        this.backHandler.remove();
      }
      backAction = () => {
        BackHandler.exitApp();
        return true;
      };

    async handleSubmit() {
        var bathroom = this.state.totalBathrooms;
        var badroom = this.state.totalBedrooma;
        var services = this.state.services;

        BookingData.total_rooms = badroom
        BookingData.total_bathrooms = bathroom

        this.setState({isLoading: true});
        const payload = CreateBookingPayload(bathroom, badroom, services);
        // console.log(payload)
        var responce = await PostRequestWithAuthentication(payload, CreateBookingAPI, true);
        console.log(JSON.stringify(responce));
        this.setState({isLoading: false});
        if (responce.status == 'success') {
            BookingData.bookingDraftId = responce.bookingId
            Helper.showToast('Booking Created!');
            this.props.navigation.navigate('EnterAddressScreen');
        }
        else{
            Helper.showToast('There is unknown error!')
        }
        
    }
        
      
    onSwipePerformed = (action) => {
    
        switch(action){
          case 'left':{
            this.toggleOpen()
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
            break;
          }
           default : {
           console.log('Undeteceted action');
           }
        }
      }
      toggleOpen = () => {
        this.setState({ open: !this.state.open });
        if(this.state.bgColor == 'white'){
            this.setState({ 
                bgColor:'gray'
            })
        }
        else if(this.state.bgColor == 'gray'){
            this.setState({ 
                bgColor:'white'
            })
        }
      }; 
      drawerContent = () => {
        return (
            <SwipeGesture gestureStyle={{ width:'100%', backgroundColor:'white', flex:1, height:'100%', marginTop:-5}} 
                onSwipePerformed={this.onSwipePerformed}>
                <View style={{flexDirection:'row', height:150,  alignItems:'center', marginLeft:50,}}>
                    <View style={{
                        height:50, 
                        width:50, 
                        backgroundColor:'#F90505', 
                        alignItems:'center', 
                        justifyContent:'center',
                        borderRadius:70,
                        
                    }}>

                    <Image
                        style={{height:25, width:25}}
                        source={require('../../images/userIcon.png')}
                    />
                </View>
    
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold', fontSize:18,}}>
                        {this.state.name}
    
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <Text style={{fontSize:12, color:'#6A7980'}}>
                            View profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height:2, width:'85%', backgroundColor:'#C4C4C4', alignSelf:'center'}}>

            </View>

            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('BookingScreen')}
            style={{flexDirection:'row', height:45, alignItems:'center', marginTop:20,}}>
                <Image
                    source={CalenderIcon}
                    style={{height:20, width:20, marginLeft:20,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    Bookings
                </Text> 

            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('AfterOtherPaymentOptionsScreen')}
            style={{flexDirection:'row',height:45, alignItems:'center'}}>
                <Image
                    source={PaymentIcon}
                    style={{height:20, width:20, marginLeft:20,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    Payments
                </Text> 

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyCleansScreen')}
             style={{flexDirection:'row',height:45, alignItems:'center'}}>
                <Image
                    source={MyCleansIcon}
                    style={{height:20, width:20, marginLeft:20,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    My Cleans
                </Text> 

            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('PromotionScreen')} 
            style={{flexDirection:'row', height:45, alignItems:'center'}}>
                <Image
                    source={PromotionIcon}
                    style={{height:20, width:20, marginLeft:20,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    Promotions
                </Text> 

            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('LocationsScreen')}
            style={{flexDirection:'row', height:45, alignItems:'center'}}>
                <Image
                    source={PinIcon}
                    style={{height:20, width:20, marginLeft:20,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    Locations
                </Text> 

            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('AboutScreen')}
            style={{flexDirection:'row', height:45, alignItems:'center'}}>
                <Image
                    source={AboutIcon}
                    style={{height:18, width:18, marginLeft:22,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    About
                </Text> 

            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => {
                this.props.navigation.navigate('SignIn')
                Helper.setIsLogined('false')
            }}
            style={{flexDirection:'row', height:45, alignItems:'center'}}>
                <Image
                    source={LogoutIcon}
                    style={{height:18.8, width:16.4, marginLeft:22}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    Logout
                </Text> 

            </TouchableOpacity>
            
                    
                    {/* <View style={{height:'100%', }}> */}
                        <TouchableOpacity style={{
                        height:45, 
                        width:200, 
                        backgroundColor:'#F90505', 
                        borderRadius:33, 
                        alignItems:'center', 
                        justifyContent:'center',
                        alignSelf:'center',
                        marginTop:50,
                    }}>
                        <Text style={{color:'white', fontSize:12, fontWeight:'bold'}}>
                            SIGN UP AS A CLEANER

                        </Text>

                    </TouchableOpacity>

                    {/* </View> */}
            
                
            </SwipeGesture>
    
        );
      };
    
   render() {
       return (
        <TouchableWithoutFeedback
        onPress={() => this.setState({
            open:false,
            bgColor:'white',
        })}
        >
            {/* <SwipeGesture gestureStyle={{ width:'100%', flex:1, height:'100%', marginTop:-5}} 
                onSwipePerformed={this.onSwipePerformed}> */}
           <View style={[styles.container, {backgroundColor:this.state.bgColor}]}>

           <MenuDrawer
            
            open={this.state.open} 
            drawerContent={this.drawerContent()}
            drawerPercentage={80}
            animationTime={250}
            overlay={true}
            opacity={0.3}
            
          >
               {/* {this.state.isLoading ? (
          <Loader text={'Please wait...'} />
        ) : null} */}
               <TouchableOpacity
               onPress={this.toggleOpen}
               >
                    <Image
                        source={MenuIcon}
                        style={styles.menuIcon}
                    />
               </TouchableOpacity>

                <Text style={styles.mainText}>
                    Get an estimate 
                </Text>
                    <View style={styles.estimateBox}>
                        <View style={styles.range}>
                            <Text style={styles.roomText} >Bedrooms</Text>
                            
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity style={{
                                    height:45,
                                    width:45, 
                                    borderRadius:5, 
                                    backgroundColor:'#F90505',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    color:'white'
                                    }}
                                    onPress={() => {
                                        if(this.state.totalBedrooma != 1){
                                            this.setState({
                                                totalBedrooma:this.state.totalBedrooma - 1
    
                                            })
                                        }
                                        
                                    }}
                                    >
                                        <Text style={{color:'white', fontFamily:Fonts.Arimo, fontSize:30}}>-</Text>

                                </TouchableOpacity>
                                <Text
                                    style={{fontSize:20, fontFamily:Fonts.Arimo, marginHorizontal:10}}
                                >
                                    {this.state.totalBedrooma}

                                </Text>

                                <TouchableOpacity style={{
                                    height:45,
                                    width:45, 
                                    borderRadius:5, 
                                    backgroundColor:'#F90505',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    color:'white'
                                    }}
                                    onPress={() => {
                                        this.setState({
                                            totalBedrooma:this.state.totalBedrooma + 1

                                        })
                                    }}
                                    >
                                        <Text style={{color:'white', fontFamily:Fonts.Arimo, fontSize:30}}>+</Text>

                                </TouchableOpacity>


                            </View>
                        </View>

                        <View style={styles.range}>
                            <Text style={styles.roomText}>Bathrooms</Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity style={{
                                    height:45,
                                    width:45, 
                                    borderRadius:5, 
                                    backgroundColor:'#F90505',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    color:'white'
                                    }}
                                    onPress={() => {
                                        if(this.state.totalBathrooms != 1){
                                            this.setState({
                                                totalBathrooms:this.state.totalBathrooms - 1
    
                                            })
                                        }
                                        
                                    }}
                                    >
                                        <Text style={{color:'white', fontFamily:Fonts.Arimo, fontSize:30}}>-</Text>

                                </TouchableOpacity>
                                <Text
                                    style={{fontSize:20, fontFamily:Fonts.Arimo, marginHorizontal:10}}
                                >
                                    {this.state.totalBathrooms}

                                </Text>

                                <TouchableOpacity style={{
                                    height:45,
                                    width:45, 
                                    borderRadius:5, 
                                    backgroundColor:'#F90505',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    
                                    color:'white'
                                    }}
                                    onPress={() => {
                                        this.setState({
                                            totalBathrooms:this.state.totalBathrooms + 1

                                        })
                                    }}
                                    >
                                        <Text style={{color:'white', fontFamily:Fonts.Arimo, fontSize:30}}>+</Text>

                                </TouchableOpacity>
                                </View>
                            {/* <Image
                                style={styles.rangeImage2}
                                source={RangeBar2}
                            /> */}
                        </View>
                    </View>
                {/* </View> */}

                <Text style={styles.costText}>
                    Total Cost
                </Text>
                <Text style={styles.costAmountText}>
                    {"R"+
                        ((this.state.totalBedrooma * this.state.bedRoomPrice) + (this.state.totalBathrooms * this.state.bathRoomPrice) + parseInt(this.state.extraPrice))
                    }
                </Text>

                <View>
                    <Text style={{
                        marginTop:5,
                        fontFamily:Fonts.Arimo,
                        alignSelf:'center',
                    }}>Extras</Text>
                  
                    <View style={{
                        marginHorizontal:30
                    }}>
                    <FlatList 
                        data={this.state.extras}
                        numColumns={4}
                        renderItem={({item, index}) => {
                            return(
                                <View style={{
                                    width:'25%',
                                    alignItems:'center',
                                }}>
                                <TouchableOpacity 
                                onPress={() => this.toggleService(item.id, parseInt(item.service_price))}
                                style={{
                                    height:50,
                                    width:50,
                                    borderRadius:50,
                                    backgroundColor:'red',
                                    margin:5,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderColor:'black',
                                    borderWidth: this.serviceAlreadyPresent(item.id) ? 5 : 0
                                }}>
                                    <Image
                                        style={{height:25,
                                            width:25}}
                                        source={this.state.extrasImages[index]}
                                    />

                                </TouchableOpacity>

                                <Text style={{
                                    fontFamily:Fonts.Arimo,
                                    fontSize:13,
                                }}>{item.service_name}</Text>
                                </View>
                            )
                        }}  
                    />
                    </View>
                    {/* </View> */}
                    <View style={styles.bottomLine}>

                    </View>
                </View>



                <TouchableOpacity
                disabled={this.state.isLoading}
                onPress={() => {
                    this.handleSubmit()
                }}
                // onPress={async () => {
                //         var data = await Helper.getExtraData()
                //         console.log(data)
                // }}
                style={[styles.bookButton, {opacity: this.state.isLoading ? 0.5 : 1}]}>
                    {
                    this.state.isLoading ?

                    <ActivityIndicator
                    size="small"
                    color='white'
                    />
                    :
                    <Image
                        style={styles.buttonText}
                        source={ButtonText}
                    />}
                </TouchableOpacity>


                </MenuDrawer>
                <NavigationEvents
          onDidBlur={() => this.backHandler.remove()}
          onDidFocus={() => {
            this.backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              this.backAction,
            );
          }}
        />
           </View>
           {/* </SwipeGesture> */}
           
        </TouchableWithoutFeedback>

        )
    }
}

export default EstimateScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    menuIcon:{
        height:30,
        width:30,
        marginTop:10,
        marginLeft:15,
    },
    roomText:{
        fontSize:18, 
        fontFamily:Fonts.Arimo,
    },
    mainText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:10,
        marginLeft:25,
    },
    estimateBox:{
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:'white',
        height:150,  
        width:'90%',
        justifyContent:'space-around',
        marginTop:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

    },
    costText:{
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:15,
    },
    costAmountText:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#F90505',
        paddingHorizontal:30,
        paddingBottom:10,
    },
    bookButton:{
        height:45,
        marginTop:20,
        width:'80%',
        alignSelf:'center',
        borderRadius:33,
        backgroundColor:'#F90505',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        height:12,
        width:128,
    },
    range:{ 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',

    },
    rangeImage:{ 
        height:48.96,
        width:168,
        marginLeft:10,
    },
    rangeImage2:{ 
        height:48.8,
        width:160,
        marginLeft:15,
    },
})