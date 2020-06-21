import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MarkerIcon from '../../images/marker.png'
import CalenderIcon from '../../images/calendar.png' 
import LoadingIcon from '../../images/loadingIcon.png'

class BookingScreen extends Component {
    static navigationOptions = {
        header:null
      }
   render() {
       return (     
           <View style={styles.container}>
               <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            style={{height:24, width:33, marginTop:15, marginLeft:20}}
                            source={require('../../images/Arrow.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{fontSize:18, alignSelf:'center', marginLeft:20, marginTop:10,}}>
                        Bookings
                    </Text>
               </View>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4', 
                   marginTop:20,
               }}></View>

               <View style={{
                   flexDirection:'row',
                   alignSelf:'center',
                   marginTop:50,
                   
               }}>
                   <TouchableOpacity style={{
                       height:40,
                       width:130,
                       borderRadius:30, 
                       backgroundColor:'#C4C4C4', 
                       alignItems:'center', 
                       justifyContent:'center',

                   }}>
                       <Text style={{fontSize:18, color:'white' }}>
                            Current

                       </Text>


                   </TouchableOpacity>

                   <TouchableOpacity style={{
                       height:40,
                       width:130,
                       borderRadius:30, 
                       backgroundColor:'#F90505', 
                       alignItems:'center', 
                       justifyContent:'center',
                       marginLeft:10,

                   }}>
                       <Text style={{fontSize:18, color:'white' }}>
                        History

                       </Text>


                   </TouchableOpacity>

               </View>

               <View style={{width:'80%', alignSelf:'center', marginTop:30,}}>
                   <View style={{flexDirection:'row'}}>

                       <Image
                            style={{height:15, width:15,}}
                            source={MarkerIcon}
                       />
                       <Text style={{marginLeft:5}}>
                        1993 Ingwe Street
                       </Text>

                   </View>
                   <View style={{flexDirection:'row'}}>

                       <Image
                            style={{height:15, width:15,}}
                            source={CalenderIcon}
                       />
                       <Text style={{fontSize:12, marginLeft:5,}}>
                            1 February @ 10 : 30
                       </Text>

                   </View>

                   <View style={{flexDirection:'row', marginTop:20,}}>

                       <Image
                            style={{height:15, width:15,}}
                            source={LoadingIcon}
                       />
                       <Text style={{fontSize:12, marginLeft:10,}}>
                            Completed
                       </Text>

                       <Image
                            style={{height:15, width:15, marginLeft:10,}}
                            source={CalenderIcon}
                       />
                       <Text style={{fontSize:12, marginLeft:10,}}>
                            Book again
                       </Text>

                   </View>
               </View>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4', 
                   marginTop:20,
               }}></View>
               <View style={{width:'80%', alignSelf:'center', marginTop:20,}}>
                   <View style={{flexDirection:'row'}}>

                       <Image
                            style={{height:15, width:15,}}
                            source={MarkerIcon}
                       />
                       <Text style={{marginLeft:5}}>
                        1993 Ingwe Street
                       </Text>

                   </View>
                   <View style={{flexDirection:'row'}}>

                       <Image
                            style={{height:15, width:15,}}
                            source={CalenderIcon}
                       />
                       <Text style={{fontSize:12, marginLeft:5,}}>
                            1 February @ 10 : 30
                       </Text>

                   </View>

                   <View style={{flexDirection:'row', marginTop:20,}}>

                       <Image
                            style={{height:15, width:15,}}
                            source={LoadingIcon}
                       />
                       <Text style={{fontSize:12, marginLeft:10,}}>
                            Completed
                       </Text>

                       <Image
                            style={{height:15, width:15, marginLeft:10,}}
                            source={CalenderIcon}
                       />
                       <Text style={{fontSize:12, marginLeft:10,}}>
                            Book again
                       </Text>

                   </View>
               </View>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4', 
                   marginTop:20,
               }}></View>
           </View>
        )
    }
}

export default BookingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})