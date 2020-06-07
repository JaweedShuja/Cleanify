import React from 'react'
import {View , Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class Splash extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)

        var t = setInterval(() => {
            this.props.navigation.navigate('GetStarted')
            clearInterval(t)
        },2000)

    }
    render(){
        return(
            <View 
            style={styles.container}>
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