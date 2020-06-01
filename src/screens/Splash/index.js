import React from 'react'
import {View , Text, StyleSheet, Image} from 'react-native'

export default class Splash extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={{height:62, width:270}}
                    source={require('../../images/logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f90505'
    },
    TextStyle:{
        fontSize:70,
        fontWeight:'bold',
        color:'white',
        fontStyle:'italic'
    }
})