import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Cleaner from '../../images/cleaner.png'
import RedDot from '../../images/redDot.png'
import PropertyIcon from '../../images/property.png'
import CalenderIcon from '../../images/calendar.png' 
import UserIcon from '../../images/userIcon.png'
import StarIcon from '../../images/star.png'
import MarkerIcon from '../../images/marker.png'
import RightIcon from '../../images/rightIcon.png'

import CallIcon from '../../images/callIcon.png'
import ChatIcon from '../../images/chatIcon.png'
import ShareIcon from '../../images/shareIcon.png'
import CancelIcon from '../../images/cancelIcon.png'

class CleanerOnTheWayScreen extends Component {
    static navigationOptions = {
        header:null
      }
      constructor(props){
        super(props)
        
        var t = setInterval(() => {
            this.props.navigation.navigate('CleanerArrivedScreen')
            clearInterval(t)

        },3000)
    }
   render() {
       return (
           <View style={styles.container}>
             <View style={styles.topContainer}>
             <View style={{
                     height:200,
                     width:65,
                     borderRadius:33,
                     borderWidth:2,
                    borderColor:'rgba(105,105,105,0.05)',
                    marginLeft:20,
                    marginTop:10,
                 }}>
                <View style={styles.sideContainer}>
                    <Image
                        style={{height:30, width:30, alignSelf:'center', marginTop:50,}}
                        source={Cleaner}
                    />
                    <Image
                        style={{height:10, width:10, alignSelf:'center', marginTop:15,}}
                        source={RedDot}
                    />
                   
                    <Image
                        style={{height:10, width:10, alignSelf:'center', marginTop:3,}}
                        source={RedDot}
                    />
                    <Image
                        style={{height:10, width:10, alignSelf:'center', marginTop:3,}}
                        source={RedDot}
                    />
                     <Image
                        style={{height:30, width:30, alignSelf:'center', marginTop:10,}}
                        source={PropertyIcon}
                    />
                </View>
                </View>
                <View style={{
                     width:210,
                     height:50,
                     borderRadius:33,
                     borderWidth:2,
                    borderColor:'rgba(105,105,105,0.05)',
                    marginTop:55,
                        marginLeft:20,
                        
                 }}>
                    <View style={{
                        height:'100%', 
                        width:'100%', 
                        borderRadius:33, 
                        // shadowColor: "#000",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 1,
                        // },
                        // shadowOpacity: 0.20,
                        // shadowRadius: 1.41,
                        // elevation: 2, 
                        
                        alignItems:'center',
                        justifyContent:'center',
                        borderWidth:1.5,
                        borderColor:'rgba(105,105,105,0.12)'
                    }}>
                        <Text style={{fontSize:12, color:'gray'}}>Cleaner on the way arriving @11:15</Text>
                    </View>
                </View>
             </View>
             <TouchableOpacity style={{flexDirection:'row', alignSelf:'center', marginTop:10, paddingBottom:10,}}>
                <Image
                    style={{height:25, width:25,}}
                    source={CalenderIcon}
                
                />
                <Text style={{fontWeight:'bold', alignSelf:'center', marginLeft:10,}}>Re-schedule</Text>
             </TouchableOpacity>

             <View style={styles.bottomContainer}>
                    <View style={{height:3, width:100, backgroundColor:'#C4C4C4', alignSelf:'center', marginTop:10,}}>

                    </View>
                    <Text style={{color:'#6A7980', alignSelf:'center', marginTop:10,}}>
                        Your cleaner will arrive on the 
                    </Text>
                    <Text style={{color:'#6A7980', alignSelf:'center', marginTop:5,}}>
                        12 March 2020 @ 11:15 
                    </Text>
                    <View style={{height:1, width:300, backgroundColor:'#C4C4C4', alignSelf:'center', marginTop:10,}}>

                    </View>
                    <View style={{flexDirection:'row', width:300, alignSelf:'center'}}>
                        <View style={{flex:1,}}>
                            <Text style={{color:'#061D28', marginLeft:10, marginTop:10,}}>Your Cleaner</Text>
                            <Text style={{color:'#6A7980', marginLeft:10, marginTop:5,}}>Trotric</Text>
                            <Text style={{color:'#061D28', marginLeft:10, marginTop:5,}}>Personality</Text>
                            <Text style={{color:'#6A7980', marginLeft:10, marginTop:5,}}>Funny</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{width:70, position:'absolute', right:5, alignSelf:'center'}}>
                                <View style={{height:60, width:60, backgroundColor:'#F90505', borderRadius:33,justifyContent:'center', alignItems:'center', alignSelf:'center' }}>
                                    <Image
                                        style={{height:35, width:35}}
                                        source={UserIcon}

                                    />
                                   
                                </View>
                                <View style={{height:20, width:50, borderRadius:33, alignItems:'center', justifyContent:'center', backgroundColor:'#F90505', alignSelf:'center', marginTop:5, flexDirection:'row'}}>
                                    <Image
                                        style={{height:15, width:15,}}
                                        source={StarIcon}

                                    />
                                    <Text style={{color:'white', marginLeft:2,}}>4.9</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:1, width:300, backgroundColor:'#C4C4C4', alignSelf:'center', marginTop:10,}}>
                        
                    </View>
                    <TouchableOpacity style={{flexDirection:'row', width:300, alignSelf:'center', marginTop:10,}}>
                        <Image
                            source={MarkerIcon}
                            style={{height:40, width:40}}

                        />
                        <View style={{alignSelf:'center', marginLeft:5,}}>
                            <Text style={{fontSize:12}}>1993 Mbalo Street, Midrand</Text>
                            <Text style={{fontSize:12, marginTop:5,}}>Change address</Text>
                        </View>

                        <Image
                            source={RightIcon}
                            style={{width:11, height:19, alignSelf:'center', position:'absolute', right:5,}}
                        />
                    </TouchableOpacity>
                    <View style={{height:1, width:300, backgroundColor:'#C4C4C4', alignSelf:'center', marginTop:10,}}>
                        
                    </View>
                    <View style={{flexDirection:'row', width:300, alignSelf:'center', justifyContent:'space-around', marginTop:10,}}>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{height:45, width:45, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={CallIcon}

                                />
                            </TouchableOpacity>
                            <Text style={{fontSize:12, marginTop:5,}}>
                                Call
                            </Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{height:45, width:45, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={ChatIcon}

                                />
                            </TouchableOpacity>
                            <Text style={{fontSize:12, marginTop:5,}}>
                                Chat
                            </Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{height:45, width:45, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={ShareIcon}

                                />
                            </TouchableOpacity>
                            <Text style={{fontSize:12, marginTop:5,}}>
                                Share
                            </Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{height:45, width:45, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:20, width:20}}
                                    source={CancelIcon}

                                />
                            </TouchableOpacity>
                            <Text style={{fontSize:12, marginTop:5,}}>
                                Cancel
                            </Text>
                        </View>
                    </View>
             </View>
           </View>
        )
    }
}

export default CleanerOnTheWayScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E6E9ED',
    },
    topContainer:{
        flexDirection:'row',   
        backgroundColor:'white',
        paddingBottom:10,
    },
    sideContainer:{
        height:'100%', 
        width:'100%',
        borderRadius:33,
        
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 1.41,
        // elevation: 2,
        borderWidth:1.5,
        borderColor:'rgba(105,105,105,0.12)'
    },
    bottomContainer:{
        width:'100%', 
        height:'100%',
        backgroundColor:'white',
        borderTopRightRadius:15, 
        borderTopLeftRadius:15,
    }

})