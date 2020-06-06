import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
 } from 'react-native'

class PromoCodeModal extends Component {
    

    constructor(props){
        super(props)
        this.state = {
           
            
        }
    }
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }
   render() {
    
    
       return (
           <View style={styles.container}>
              <View style={styles.childContainer}>
               
             
              <TextInput
                style={{fontSize:18, fontWeight:'bold', alignSelf:'center', marginTop:50, }}
                placeholder="Promo code"
              />
              <View style={{height:2, backgroundColor:'#F90505', width:150, alignSelf:'center'}}>

              </View>

              <Text style={{fontSize:12, color:'gray', alignSelf:'center', marginTop:10,}}>Enter the promo code that will apply to your</Text>
              
              <Text style={{fontSize:12, color:'gray', alignSelf:'center'}}>next clean</Text>

                      <TouchableOpacity 
                      onPress={() => this.closeModal()}
                      style={{height:45, width:'60%', backgroundColor:'#F90505', borderRadius:33, alignSelf:'center', marginTop:50, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>
                            APPLY 
                            </Text>
                      </TouchableOpacity>

                  </View>


          
              
           </View>
        )
    }
}

export default PromoCodeModal

const styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    childContainer:{
        height:300,  
        width:'90%',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
    },

})