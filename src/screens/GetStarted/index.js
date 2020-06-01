import React from 'react'
import {View, Text, ImageBackground, Image, TextInput, ScrollView} from 'react-native'
import {Fonts} from '../../utils/Fonts.js'

export default class GetStarted extends React.Component{
    render(){
        return(
            <View>
                <ScrollView>
                <ImageBackground 
                    source={require('../../images/Rectangle.png')}
                    style={{height:'85%', width:'100%', alignSelf:'center'}}>
                        <Image 
                            source={require('../../images/logo.png')}
                            style={{height:45, width:180, marginLeft:150, marginTop:100}}
                        />
                        <Text style={{marginLeft:155, fontSize:15, color:'white', fontFamily:Fonts.Arimo}}>Easiest way to get a</Text>
                        <Text style={{marginLeft:155, fontSize:15, color:'white', fontFamily:Fonts.Arimo}}>Clean</Text>
                        
                        <Text style={{marginTop:180, marginLeft:40, fontFamily:Fonts.ArimoBold}}>Get Started</Text>
                        <View style={{flexDirection:'row', marginLeft:20, marginTop:10, alignItems:'center', }}>
                            <Image
                                source={require('../../images/flag.png')}
                                style={{height:25, width:25, marginTop:10}}
                            /> 
                            <Image
                                source={require('../../images/downtic.png')}
                                style={{height:13, width:13, marginLeft:4, marginTop:8}}
                            />
                            <View style={{marginTop:15}}>
                                <Text style={{fontSize:18, marginLeft:2}}>
                                    +27
                                </Text>
                                <View style={{width:'100%', marginTop:13,marginLeft:7, height:1, backgroundColor:'#969FAA', alignSelf:'center'}}>

                                </View>
                            </View>

                           <View style={{marginLeft:20}}>
                                <TextInput
                                    style={{
                                        marginTop:5,
                                        fontSize:18, 
                                        fontFamily:Fonts.Arimo
                                    }}
                                    placeholder="Phone number"
                                />
                                 <View style={{
                                        width:'100%', 
                                        height:1, 
                                        backgroundColor:'#969FAA', 
                                        alignSelf:'center',
                                     }}>

                                </View>
                           </View>
                            
                        </View>  

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}}>
                            <View style={{height:1, width:'22%', backgroundColor:'black'}}>

                            </View>
                            <Text style={{
                                // marginTop:15,
                                marginLeft:10,
                                fontFamily:Fonts.Arimo,
                                fontSize:12,
                            }}>
                                or connect with social
                            </Text>
                            <View style={{height:1, width:'22%', backgroundColor:'black', marginLeft:10,}}>

                            </View>
                        </View>    

                        <View style={{flexDirection:'row', marginLeft:30, marginTop:20, alignItems:'center'}}>
                            <Image
                                style={{height:30, width:30}}
                                source={require('../../images/facebook.png')}
                            />
                            <Text style={{marginLeft:10, fontFamily:Fonts.Arimo}}>
                                Facebook
                            </Text>
                        </View>

                        <View style={{flexDirection:'row', marginLeft:25, marginTop:20, alignItems:'center'}}>
                            <Image
                                style={{height:35, width:35}}
                                source={require('../../images/google.png')}
                            />
                            <Text style={{marginLeft:11, fontFamily:Fonts.Arimo}}>
                                Google
                            </Text>
                        </View>

                    </ImageBackground>
                    
                    </ScrollView>
            </View>
        );
    }
}