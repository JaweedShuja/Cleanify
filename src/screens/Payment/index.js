import React from 'react'
import {View, Text, Image, TextInput } from 'react-native'
import {Fonts} from '../../utils/Fonts.js'

export default class EnterName extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'#ffffff', flex:1,}}>
               <Text 
                    style={{
                        alignSelf:'flex-end',
                        marginTop:10,
                        marginRight:20,
                        fontSize:17,
                        color:'#F90505'
                    }}
               >SKIP</Text>

               <Text style={{
                   fontSize:16,
                   fontFamily:Fonts.Arimo,
                   alignSelf:'center',
                   marginTop:10,
               }}>
                    Select your payment method
               </Text>

               <View style={{flexDirection:'row', marginHorizontal:30, marginTop:50}}>
                    <Image
                        style={{height:40, width:40}}
                        source={require('../../images/cash.png')}
                    />
                    <Text style={{
                        fontSize:16,
                        marginLeft:15,
                        marginTop:8
                    }}>Cash</Text>
               </View>
               <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:30, marginTop:10}}></View>

               <View style={{flexDirection:'row', marginHorizontal:30, marginTop:10}}>
                    <Image
                        style={{height:40, width:40}}
                        source={require('../../images/card.png')}
                    />
                    <Text style={{
                        fontSize:16,
                        marginLeft:15,
                        marginTop:8
                    }}>Credit or Debit Card</Text>
               </View>
               <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:30, marginTop:10}}></View>

               <View style={{flexDirection:'row', marginHorizontal:30, marginTop:10}}>
                    <Image
                        style={{height:40, width:40}}
                        source={require('../../images/paypal.png')}
                    />
                    <Text style={{
                        fontSize:16,
                        marginLeft:15,
                        marginTop:8
                    }}>PayPal</Text>
               </View>
               <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:30, marginTop:10}}></View>
            </View>
        );
    }
}