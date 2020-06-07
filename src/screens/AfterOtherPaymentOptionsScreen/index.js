import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import PromoCodeModal from '../../modal/PromoCodeModal'
import CheckIcon from '../../images/checkIcon.png'

class AfterOtherPaymentOptionsScreen extends Component {
    static navigationOptions = {
        header:null
      } 
    constructor(props){
        super(props)

        this.state = {
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
       return (
           <View style={[styles.container, {backgroundColor:this.state.bgColor}]}>

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
                        Payment options
                    </Text>
               </View>

               <Text style={{
                   fontSize:16,
                   marginTop:30,
                   marginLeft:30,
               }}>
                    Payment method
               </Text>

               <View style={{flexDirection:'row', marginHorizontal:30, marginTop:20}}>
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
                    }}>***  8506</Text>
               </View>
               <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:30, marginTop:10}}></View>

               <View style={{flexDirection:'row', marginHorizontal:30, marginTop:10}}>
                    <Image
                        style={{height:30, width:30, marginLeft:5,}}
                        source={require('../../images/addIcon.png')}
                    />
                    <Text style={{
                        fontSize:16,
                        marginLeft:22,
                        marginTop:5
                    }}>Add a card payment </Text>
               </View>
               <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:30, marginTop:10}}></View>

               <Text style={{marginLeft:30, marginTop:10,}}>Promotions</Text>

               <View style={{height:90, width:230, backgroundColor:'#0052B4', borderRadius:10, alignSelf:'center', marginTop:20, flexDirection:'row'}}>
                   
                        <View style={{flex:3,  justifyContent:'center', marginLeft:10,}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:12}}>-35% promo</Text>
                            <Text style={{color:'white', fontSize:12}}>Valid for 10 cleanings</Text>
                            <Text style={{color:'white', fontSize:12}}>Up to R50 off</Text>
                            <Text style={{color:'white', fontSize:12}}>Expires 22.02.2020</Text>
                        </View>
                        <View style={{flex:1,  alignItems:'center', justifyContent:'center'}}>
                            <Image
                                style={{height:20, width:20}}
                                source={CheckIcon}

                            />
                        </View>
               </View>

               <View style={{height:1, backgroundColor:'#C4C4C4', marginHorizontal:30, marginTop:20}}></View>


               <TouchableOpacity
               onPress={() => this.changeModalVisibility(true)}
                style={{flexDirection:'row', marginHorizontal:30, marginTop:20}}>
                    <Image
                        style={{height:25, width:25}}
                        source={require('../../images/promotionIcon.png')}
                    />
                    <Text style={{
                        fontSize:12,
                        marginLeft:22,
                        marginTop:2,
                        color:'gray'
                    }}>Enter promo code</Text>
                    
               </TouchableOpacity>
               <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
            animationType='fade'>
                <PromoCodeModal changeModalVisibility={this.changeModalVisibility } />
            </Modal>
           </View>
        )
    }
}

export default AfterOtherPaymentOptionsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})