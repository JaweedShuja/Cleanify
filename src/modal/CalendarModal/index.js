import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
 
class CalendarModal extends Component {
    

    constructor(props){
        super(props)
        this.state = {
            jun: [
                [ -1, 1, 2,  3,  4,  5,  6],
                [  7, 8, 9, 10, 11, 12, 13],
                [  14, 15, 16, 17, 18, 19, 20],
                [  21, 22, 23, 24, 25, 26, 27],
                [  28, 29, 30, -1, -1, -1, -1],
                [  -1, -1, -1, -1, -1, -1, -1],
            ],
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            selectedDay:0,
            textColor:''
            
        }
    }
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }
   render() {
    
    const calendar = [];
    var bgColor = "";
    calendar.push(
        <View style={{flexDirection:'row'}}>
            {this.state.days.map((value, index) => {
            
            return <View style={{
                height:34, 
                width:40, 
                alignItems:'center', 
                justifyContent:'center', 
                backgroundColor: 'white'}}>

                        <Text style={{color:'#FF2455'}}>{value}</Text> 
                    </View>
        })}
        </View>
    );
    for (let index = 0; index < 6; index++) {
        calendar.push(
        <View style={{flexDirection:'row'}}>
    
        {this.state.jun[index].map((value, index) => {
            if(value == -1){
                bgColor = '#FF2455'
                // this.setState{}
            }else if(index == 5 || index == 6){
                bgColor = '#ffc4d1'
            }else if(value == this.state.selectedDay){
                bgColor = '#FF2455'
            }else{
                bgColor = 'white'
            }
            return <TouchableOpacity 
            key={index} 
            onPress={() => {
                if(value != -1){
                    this.setState({
                        selectedDay :value
                    })
                }
            }}
            style={{
                height:34, 
                width:40, 
                borderWidth:1, 
                borderColor:'black', 
                alignItems:'center', 
                justifyContent:'center', 
                backgroundColor: bgColor}}>

                        { value == -1 ? null : <Text>{value}</Text> }
                    </TouchableOpacity>
        })}
        </View>
        );
    }
       return (
           <View style={styles.container}>
              <View style={styles.childContainer}>
                <View style={styles.topMonthContainer}>
                <Text style={styles.monthText}>May</Text>

                <View style={styles.currentMonthContainer}>
                    <Text style={styles.currentMonthText}>
                        Jun, 2020
                    </Text>
                </View>

                <Text style={styles.monthText}>July</Text>
                </View>

                    <View style={{alignSelf:'center', marginTop:10}}>
                {calendar}
                </View>

                {/* <TouchableOpacity
                onPress={() => this.closeModal()} 
                style={{backgroundColor:'red', height:50, width:50}}>
                    <Text>CLOSE</Text>
                </TouchableOpacity> */}
              </View>
           </View>
        )
    }
}

export default CalendarModal

const styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    childContainer:{
        height:326,  
        width:'100%',
        backgroundColor:'#FFFFFF',
    },
    topMonthContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:10,
        width:'80%',
        alignSelf:'center',
    },
    monthText:{
        fontSize:18,
        fontWeight:'bold',
    },
    currentMonthContainer:{
        height:40,
        width:130,
        backgroundColor:'#F90505',
        borderRadius:33,
        alignItems:'center',
        justifyContent:'center',
    },
    currentMonthText:{
        fontSize:18,
        color:'white',
    }

})