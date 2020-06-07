import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PlusLocation from '../../images/plusLocation.png'
 
class LocationsScreen extends Component {
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
                        Locations
                    </Text>
                    <TouchableOpacity style={{position:'absolute', right:40, marginTop:15, padding:5}}>
                        <Image
                            style={{height:20, width:20}}
                            source={PlusLocation}
                        />
                    </TouchableOpacity>
               </View>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4', 
                   marginTop:20,
               }}></View>

               <View style={{
                   width:'80%', alignSelf:'center',
               }}>
                    <Text style={{fontSize:18, marginTop:30}}>
                        No saved locations
                    </Text>
                    

               </View>
               <View style={{
                   height:2,
                   width:'80%', 
                   alignSelf:'center',
                   backgroundColor:'#C4C4C4', 
                   marginTop:30,
               }}></View>
           </View>
        )
    }
}

export default LocationsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})