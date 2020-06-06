import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    Image
 } from 'react-native'
 import CleanerIcon from '../../images/cleanerIcon.png'
 import CrossIcon from '../../images/crossIcon.png'

class ConnectingModal extends Component {
    

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
               
             
              <Text style={{fontWeight:'bold', fontSize:18, alignSelf:'center', marginTop:30,}}>
                Connecting you to cleaner
              </Text>

              <Image
                style={{height:70, width:70, alignSelf:'center', marginTop:40,}}
                source={CleanerIcon}
              />

              <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
                <View style={{height:3, width:70, backgroundColor:'#C4C4C4'}}></View>
                <View style={{height:3, width:70, backgroundColor:'#F90505'}}></View>
                <View style={{height:3, width:30, backgroundColor:'#C4C4C4'}}></View>
              </View>

                    <TouchableOpacity onPress={() => this.closeModal()}>
                            <Image

                style={{height:40, width:40, alignSelf:'center', marginTop:50,}}
                source={CrossIcon}


                />
                </TouchableOpacity>

                  </View>

                 


          
              
           </View>
        )
    }
}

export default ConnectingModal

const styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
        // justifyContent:'center',
        marginTop:108,
    },
    childContainer:{
        height:350,  
        width:'90%',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
    },

})