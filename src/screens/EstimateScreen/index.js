import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MenuIcon from '../../images/menuIcon.png'
import ButtonText from '../../images/BOOK_A_CLEANING.png' 

class EstimateScreen extends Component {
   render() {
       return (
           <View style={styles.container}>
               <TouchableOpacity>
                    <Image
                        source={MenuIcon}
                        style={styles.menuIcon}
                    />
               </TouchableOpacity>

                <Text style={styles.mainText}>
                    Get an estimate 
                </Text>
                <View style={styles.estimateBox}>

                </View>
                <Text style={styles.costText}>
                    Total Cost
                </Text>
                <Text style={styles.costAmountText}>
                    R148.00
                </Text>
                <TouchableOpacity style={styles.bookButton}>
                    <Image
                        style={styles.buttonText}
                        source={ButtonText}
                    />
                </TouchableOpacity>
           </View>
        )
    }
}

export default EstimateScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    menuIcon:{
        height:30,
        width:30,
        marginTop:10,
        marginLeft:15,
    },
    mainText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:25,
    },
    estimateBox:{
        height:191,
        width:311,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        //shadow//
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    costText:{
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:20,
    },
    costAmountText:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#F90505',
        paddingHorizontal:30,
        paddingBottom:10,
    },
    bookButton:{
        height:45,
        marginTop:100,
        width:'80%',
        alignSelf:'center',
        borderRadius:33,
        backgroundColor:'#F90505',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        height:12,
        width:128,
    }
})