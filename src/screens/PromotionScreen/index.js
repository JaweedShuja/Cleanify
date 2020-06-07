import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import PromotionIcon from '../../images/promotionIconWhite.png'
 
class PromotionScreen extends Component {
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
                        Promotions
                    </Text>
               </View>
               <View style={{
                        height:2,
                        width:'80%', 
                        alignSelf:'center',
                        backgroundColor:'#C4C4C4', 
                        marginTop:20,
                    }}></View>

                    <TouchableOpacity style={{height:60, width:'75%', alignSelf:'center', backgroundColor:'#0975F5', borderRadius:33, marginTop:30, alignItems:'center', justifyContent:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                source={PromotionIcon}
                                style={{height:35, width:35}}
                            />
                            <Text style={{fontSize:18, color:'white' , marginTop:5, marginLeft:20}}>
                                - 35% promo

                            </Text>

                        </View>

                    </TouchableOpacity>

                    <View style={{
                        height:3,
                        width:'80%', 
                        alignSelf:'center',
                        backgroundColor:'#C4C4C4', 
                        marginTop:50,
                    }}></View>

                    <TextInput
                        style={{fontSize:18, color:'#C4C4C4', marginTop:30}}
                        placeholder="Promo code"
                        textAlign={'center'}

                    />

                    <View style={{
                        height:3,
                        width:'80%', 
                        alignSelf:'center',
                        backgroundColor:'#F90505', 
                        marginTop:10,
                    }}></View>
                    
                    <TouchableOpacity style={{height:50, width:220, backgroundColor:'#F90505', borderRadius:33, alignItems:'center', justifyContent:'center', alignSelf:'center', marginTop:50}}>
                        <Text style={{fontSize:24, color:'white'}}>
                            APPLY

                        </Text>

                    </TouchableOpacity>
           </View>
        )
    }
}

export default PromotionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})