import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    TouchableWithoutFeedback 
} from 'react-native'
import MenuIcon from '../../images/menuIcon.png'
import ButtonText from '../../images/BOOK_A_CLEANING.png' 
import MenuDrawer from 'react-native-side-drawer'
import SwipeGesture from '../../../swipe-gesture'

import CalenderIcon from '../../images/calendar.png'
import PaymentIcon from '../../images/paymentIcon.png'
import MyCleansIcon from '../../images/myCleansIcon.png'
import PromotionIcon from '../../images/promotionIcon.png'
import PinIcon from '../../images/pinIcon.png'
import AboutIcon from '../../images/aboutIcon.png'
import RangeBar1 from '../../images/rangeBar1.png'
import RangeBar2 from '../../images/rangeBar2.png'

class EstimateScreen extends Component {
    static navigationOptions = {
        header:null
      }
    constructor(props){
        super(props)
        this.state = {
            open: false,
            bgColor:'white'
        }
        this.toggleOpen = this.toggleOpen.bind(this)
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
                        Trotric
    
                    </Text>
                    <Text style={{fontSize:10, color:'#6A7980'}}>
                        View profile
                    </Text>
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
                    style={{height:20, width:20, marginLeft:20,}}

                />

                <Text style={{fontSize:15, marginLeft:15}}>
                    About
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
                        <Text>Bedrooms</Text>
                        <Image
                            style={styles.rangeImage}
                            source={RangeBar1}
                        />
                    </View>

                    <View style={styles.range}>
                        <Text>Bathrooms</Text>
                        <Image
                            style={styles.rangeImage2}
                            source={RangeBar2}
                        />
                    </View>
                </View>
                <Text style={styles.costText}>
                    Total Cost
                </Text>
                <Text style={styles.costAmountText}>
                    R148.00
                </Text>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EnterAddressScreen')}
                style={styles.bookButton}>
                    <Image
                        style={styles.buttonText}
                        source={ButtonText}
                    />
                </TouchableOpacity>


                </MenuDrawer>
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
    mainText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:25,
    },
    estimateBox:{
        height:191,
        width:311,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        //shadow//
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    costText:{
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:20,
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
        marginTop:100,
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
        alignSelf:'center',
        marginTop:20,

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