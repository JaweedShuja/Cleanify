import React from 'react'
import {
    View, 
    Text, 
    Image, 
    TextInput, 
    StyleSheet,
}
     from 'react-native'
import {Fonts} from '../../utils/Fonts.js'

export default class AddNumber extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'#ffffff', flex:1,}}>
                <Image
                    style={{height:24, width:33, marginTop:15, marginLeft:20}}
                    source={require('../../images/Arrow.png')}
                />

                <Text style={{
                    marginHorizontal:100, 
                    fontFamily:Fonts.Arimo,
                    marginTop:20,
                    fontSize:17
                  }}>
                    You’ll get an SMS to confirm your number
                </Text>

                <View style={{flexDirection:'row', marginTop:30, alignItems:'center', alignSelf:'center' }}>
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

                 <View style={{
                        width:'80%', 
                        height:40, 
                        backgroundColor:'#F90505', 
                        marginTop:350, 
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
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      paddingHorizontal: 20,
    },
    input: {
      marginBottom: 20,
      borderBottomWidth: 2,
      borderColor: '#dbdbdb',
      padding: 10,
    },
  });
