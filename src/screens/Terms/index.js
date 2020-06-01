import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import {Fonts} from '../../utils/Fonts.js'

export default class Terms extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'#ffffff', flex:1,}}>
                <Image
                    style={{height:24, width:33, marginTop:15, marginLeft:20}}
                    source={require('../../images/Arrow.png')}
                />

                 <Image
                    style={{height:80, width:80, marginTop:15, alignSelf:'center'}}
                    source={require('../../images/terms.png')}
                />

                <Text style={{marginHorizontal:50, marginTop:20, fontFamily:Fonts.Arimo}}>
                    By tapping  the continue button below, you agree to Cleanify’s Terms of Use and acknowledge that you have read the Privacy Policy.
                </Text>
                <Text style={{marginHorizontal:50, marginTop:20, fontFamily:Fonts.Arimo}}>
                    <Text>See our</Text>
                    <Text style={{color:'#F90505'}}> Terms & Conditions</Text>
                    <Text> and</Text>
                    <Text style={{color:'#F90505'}}> Privacy Policy</Text>
                </Text>    
               

                    <TouchableOpacity style={{
                        width:'80%', 
                        height:40, 
                        backgroundColor:'#F90505', 
                        marginTop:247, 
                        alignSelf:'center', 
                        borderRadius:50,
                        alignItems:'center',
                        justifyContent:'center'
                        
                    }}>
                    <Text
                        style={{
                            color:'white',
                            fontFamily:Fonts.ArimoBold
                        }}
                    >CONTINUE</Text>
                </TouchableOpacity>
              

            </View>
        );
    }
}