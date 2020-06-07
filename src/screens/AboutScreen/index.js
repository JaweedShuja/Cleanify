import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import HeartIcon from '../../images/heartIcon.png'
 
class AboutScreen extends Component {
    static navigationOptions = {
        header:null
      }
   render() {
       return (
           <View style={styles.container}>
               <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            style={{height:24, width:33, marginTop:15, marginLeft:20}}
                            source={require('../../images/Arrow.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{fontSize:18, alignSelf:'center', marginLeft:20, marginTop:10,}}>
                        About Cleanify
                    </Text>
               </View>

               <TouchableOpacity style={{flexDirection:'row', height:50, width:'80%', alignSelf:'center', marginTop:50,}}>
                    <Text style={{fontSize:18, marginTop:10,}}>
                        Rate our app
                    </Text>

                    <Image
                    style={{height:20, width:20, position:'absolute', right:10, alignSelf:'center'}}
                    source={HeartIcon}

                    />
               </TouchableOpacity>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4'
               }}>

               </View>
               <TouchableOpacity style={{flexDirection:'row', height:50, width:'80%', alignSelf:'center', marginTop:20,}}>
                    <Text style={{fontSize:18, marginTop:10,}}>
                        Cleanify for Business
                    </Text>

                  
               </TouchableOpacity>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4'
               }}></View>
               <TouchableOpacity style={{flexDirection:'row', height:50, width:'80%', alignSelf:'center', marginTop:20,}}>
                    <Text style={{fontSize:18, marginTop:10,}}>
                        Terms and Conditions
                    </Text>

                    
               </TouchableOpacity>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4'
               }}></View>
           </View>
        )
    }
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})