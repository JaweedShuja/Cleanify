import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    Image
 } from 'react-native'

class AddCleanerModal extends Component {
    

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
               
             
             

              <Text style={{fontWeight:'bold', alignSelf:'center', marginTop:10,}}>Add user for continues cleaning</Text>
              
            

                      <TouchableOpacity 
                      onPress={() => this.closeModal()}
                      style={{height:45, width:'80%', backgroundColor:'#F90505', borderRadius:33, alignSelf:'center', marginTop:20, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                         
                            <Text style={{fontSize:18, color:'white'}}>
                               +    Add cleaner 
                            </Text>
                      </TouchableOpacity>

                  </View>


          
              
           </View>
        )
    }
}

export default AddCleanerModal

const styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
        marginTop:100,
    },
    childContainer:{
        height:150,  
        width:'80%',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
    },

})