import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal
 } from 'react-native'

import DownArrow from '../../images/downArrow.png'
import Marker from '../../images/marker.png'
import PropertyIcon from '../../images/property.png'
import DogIcon from '../../images/dogIcon.png'
import Laundry from '../../images/Laundry.png'
import Ironing from '../../images/Ironing.png'
import CashIcon from '../../images/cashIcon.png'
import CashDownTicIcon from '../../images/cashDownTicIcon.png'
import ConnectingModal from '../../modal/ConnectingModal'

class ConfirmBookingScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            jun: [
                [ -1, 1, 2,  3,  4,  5,  6],
                [  7, 8, 9, 10, 11, 12, 13],
                [  14, 15, 16, 17, 18, 19, 20],
                [  21, 22, 23, 24, 25, 26, 27],
                [  28, 29, 30, -1, -1, -1, -1],
                [  -1, -1, -1, -1, -1, -1, -1],
            ],
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            selectedDay:17,
            isModalVisible:false,
            bgColor:'white',
        }
    }
    changeModalVisibility = (bool) => {
        if(bool == true){
            this.setState({
                bgColor:'lightgray'
            })
        }
        else{
            this.setState({
                bgColor:'white',
            })
            
        }
        this.setState({ isModalVisible: bool });
    }
   render() {
    const calendar = [];
    calendar.push(
        <View style={{flexDirection:'row'}}>
            {this.state.days.map((value, index) => {
            
            return <View style={{
                height:34, 
                width:40, 
                alignItems:'center', 
                justifyContent:'center', 
                backgroundColor: 'white',
                marginTop:10,
            }}>

                        <Text style={{color:'#FF2455'}}>{value}</Text> 
                    </View>
        })}
        </View>
    );
    calendar.push(
        <View style={{flexDirection:'row'}}>
    
        {this.state.jun[2].map((value, index) => {
            
            return <TouchableOpacity 
            key={index} 
            onPress={() => {
                if(value != -1){
                    this.setState({
                        selectedDay :value,
                    })
                }
            }}
            style={{
                height:34, 
                width:40, 
                borderWidth:1, 
                borderColor:'black', 
                alignItems:'center', 
                justifyContent:'center', 
                backgroundColor: this.state.selectedDay == value ? '#F90505' : 'white'}}>

                        { value == -1 ? null : <Text style={{color:this.state.selectedDay == value ? 'white' : 'black'}}>{value}</Text> }
                    </TouchableOpacity>
        })}
        </View>
        );
       return (
           <View style={[styles.container, {backgroundColor:this.state.bgColor}]}>
               <TouchableOpacity>
                    <Image
                        style={{height:24, width:33, marginTop:15, marginLeft:20}}
                        source={require('../../images/Arrow.png')}
                    />
                </TouchableOpacity>

                <View style={styles.topMonthContainer}>
                <Text style={styles.monthText}>May</Text>

                <View style={styles.currentMonthContainer}>
                    <Text style={styles.currentMonthText}>
                        Jun, 2020
                    </Text>
                </View>

                <Text style={styles.monthText}>July</Text>
                </View>

                <View style={{alignSelf:'center'}}>
                    {calendar}
                </View>

                <Image
                    style={{height:30, width:30, alignSelf:'center', marginTop:10,}}
                    source={DownArrow}
                />
                <View style={styles.addressContainer}>
                    <Image
                        style={{height:35, width:35, }}
                        source={Marker}
                    />

                    <Text style={{color:'gray', marginLeft:5,}}>
                        1993 Mbalo Street, Midrand
                    </Text>
                </View>
                <View style={styles.bottomLine}>

                </View>
                
                <View style={{width:'75%', alignSelf:'center'}}>
                    <View style={{height:50, flexDirection:'row'}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image
                                style={{height:35, width:35, alignSelf:'center'}}
                                source={PropertyIcon}
                            />
                        </View>
                        <View style={{flex:3, justifyContent:'center'}}>
                            <Text style={{color:'gray'}}>
                                1 Bedroom & 1 Bathrooms
                            </Text>
                        </View>
                    </View>
                    <View style={{height:30, flexDirection:'row'}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Image
                                style={{height:20, width:20, alignSelf:'center'}}
                                source={DogIcon}
                            />
                        </View>
                        <View style={{flex:3, justifyContent:'center'}}>
                            <Text style={{color:'gray'}}>
                                Pets: 2 Dogs
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{width:'70%', height:60, alignSelf:'center', flexDirection:'row'}}>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <View style={{height:30, width:30, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center'}}>
                            <Image
                                source={Laundry}
                                style={{height:20, width:20}}
                            />
                        </View>
                        <Text style={{fontSize:10, }}>Laundry</Text>
                        
                    </View>

                    <View style={{alignItems:'center', justifyContent:'center', marginLeft:10,}}>
                        <View style={{height:30, width:30, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center'}}>
                            <Image
                                source={Ironing}
                                style={{height:20, width:20}}
                            />
                        </View>
                        <Text style={{fontSize:10, }}>Ironing</Text>
                        
                    </View>

                    <View style={{height:50,width:100,position:'absolute', right:10, marginTop:5,}}>
                            <Text style={{fontSize:12, color:'gray', position:'absolute', right:0 }}>3 hours Cleaning</Text>
                            <Text style={{fontSize:12, color:'gray' , position:'absolute', right:0, marginTop:14, }}>R 96.20</Text>
                            <Text style={{fontSize:12, color:'gray', position:'absolute', right:0, marginTop:26,  }}>140</Text>
                    </View> 
                    
                </View>
                <View style={styles.bottomLine}>

                </View>
                <View style={{flexDirection:'row', width:'70%', alignSelf:'center', height:30,marginTop:20,}}>
                    <Image
                        style={{height:25, width:25}}
                        source={CashIcon}
                    />
                    <TouchableOpacity style={{flexDirection:'row', marginLeft:10,}}>
                        <Text>
                            Cash
                        </Text>
                        <Image
                            style={{height:15, width:15, marginTop:3,}}
                            source={CashDownTicIcon}

                        />

                        
                    </TouchableOpacity>
                    <View style={{height:20, width:100, backgroundColor:'#0975F5', borderRadius:33, alignItems:'center', justifyContent:'center', position:'absolute', right:5}}>

                            <Text style={{color:'white'}}>
                                -35% promo
                            </Text>
                            </View>
                </View>   

                <TouchableOpacity 
                onPress={() => this.changeModalVisibility(true)}
                style={{height:45, width:'75%', alignSelf:'center', justifyContent:'center', alignItems:'center', backgroundColor:'#F90505', alignSelf:'center', marginTop:10, borderRadius:33}}>
                    <Text style={{fontWeight:'bold', color:'white'}}>
                    CONFIRM BOOKING

                    </Text>
                    </TouchableOpacity>  

                    <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
            animationType='fade'>
                <ConnectingModal changeModalVisibility={this.changeModalVisibility } />
            </Modal>
           </View>
        )
    }
}

export default ConfirmBookingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topMonthContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
        width:'80%',
        alignSelf:'center',
    },
    monthText:{
        fontSize:18,
        fontWeight:'bold',
    },
    currentMonthContainer:{
        height:40,
        width:130,
        backgroundColor:'#F90505',
        borderRadius:33,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
    },
    currentMonthText:{
        fontSize:18,
        color:'white',
    },
    addressContainer:{
        flexDirection:'row',  
        alignItems:'center',
        alignSelf:'center',  
        marginTop:10,
    },
    bottomLine:{
        height:1, 
        width:240, 
        backgroundColor:'#C4C4C4', 
        alignSelf:'center', 
        marginTop:10,
    },
    detailsContainer:{
        marginTop:10,
    }
})