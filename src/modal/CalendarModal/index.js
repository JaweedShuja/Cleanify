import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    FlatList, 
    Image,
 } from 'react-native'
import RightArrow from '../../images/rightArrow.png'

import CatIcon from '../../images/catIcon.png'
import DogIcon from '../../images/dogIcon.png'
import OtherIcon from '../../images/otherIcon.png'
import { thisExpression } from '@babel/types'

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
            textColor:'',
            nextButtonVisible:false,
            petOption:false,
            optionDoYouHave:false,
            optionWhatkind:false,
            optionHowMany:false,

            optionYesNo:false,
            optionKind:false,
            optionSelectHowMany:false,

            selectedPet:'',
            selectedImage:'../../images/otherIcon.png',

            petOneSelected:false,
            petTwoSelected:false,
            petThreeSelected:false,
            petFourSelected:false,
            petFiveSelected:false,

            timeOption:false,
            
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
            }
            // else if(value == this.state.selectedDay){
            //     bgColor = '#FF2455'
            // }
            else{
                bgColor = 'white'
            }
            return <TouchableOpacity 
            key={index} 
            onPress={() => {
                if(value != -1){
                    this.setState({
                        selectedDay :value,
                        nextButtonVisible:true,
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
                backgroundColor: this.state.selectedDay == value ? '#FF2455' : bgColor}}>

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
              { this.state.nextButtonVisible ? <TouchableOpacity 
              onPress={() => {
                  this.setState({
                    nextButtonVisible:false,
                    petOption:true,
                    optionDoYouHave:true,
                    optionYesNo:true,
                  })
              }}
                style={{
                    height:40, 
                    width:120, 
                    backgroundColor:'#F90505', 
                    borderRadius:33, 
                    position:'absolute',
                    justifyContent:'center',
                    flexDirection:'row',
                    shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                }}>

                <Image
                        style={{height:20, width:20, position:'absolute', right:10, alignSelf:'center'}}
                        source={RightArrow}
                    />
                    <Text style={{fontSize:13, color:'white', alignSelf:'center'}}>
                        NEXT
                    </Text>

            </TouchableOpacity> : null }
              
             { this.state.petOption ?  <View style={{
                  height:200,
                  width:300,
                  position:'absolute',
                  borderRadius:5,


              }}>

                  <View style={{
                      height:120, 
                      width:220, 
                      backgroundColor:'white',
                      alignSelf:'center',
                      borderRadius:5,
                      marginTop:30,
                      shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                    }}>
                        {this.state.optionDoYouHave ?<Text
                            style={{color:'gray', alignSelf:'center', marginTop:15,}}
                        >
                            Do you have Pets?
                        </Text> : null}
                        { this.state.optionWhatkind ?<Text
                            style={{color:'gray', alignSelf:'center', marginTop:15,}}
                        >
                            What kind of pets?
                        </Text> : null}
                         { this.state.optionHowMany ?<Text
                            style={{color:'gray', alignSelf:'center', marginTop:15,}}
                        >
                            How Many?
                         </Text> : null}

                            { this.state.optionYesNo ?
                        <View style={{flexDirection:'row', alignSelf:'center', marginTop:20,}}>
                            <TouchableOpacity 
                            onPress={() => this.setState({
                                optionDoYouHave:false,
                                optionYesNo:false,
                                optionWhatkind:true,
                                optionKind:true,
                            })}
                            style={{
                                height:25, 
                                width:44, 
                                backgroundColor:'#F90505', 
                                borderRadius:33, 
                                alignItems:'center', 
                                justifyContent:'center', 
                                shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                            }}>
                                <Text style={{color:'white', fontSize:13}}>YES</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height:25, 
                                width:44, 
                                backgroundColor:'#0B72FB', 
                                borderRadius:33, 
                                alignItems:'center', 
                                justifyContent:'center', 
                                marginLeft:10,
                                shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                                }}>
                                <Text style={{color:'white', fontSize:13}}>NO</Text>
                            </TouchableOpacity>

                        </View>
                            : null}

                        { this.state.optionKind ?
                        <View style={{flexDirection:'row', alignSelf:'center', marginTop:30,}}>
                            <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    selectedPet:'cat',
                                    optionWhatkind:false,
                                    optionKind:false,
                                    optionHowMany:true,
                                    optionSelectHowMany:true,
                                    selectedImage : require('../../images/catIcon.png')

                                })
                            }}
                             style={{
                                 height:25, 
                                 width:44, 
                                 borderRadius:33, 
                                 alignItems:'center', 
                                 justifyContent:'center',  
                                 
                                }}>
                                <Image
                                    style={{height:28, width:28}}
                                    source={CatIcon}
                                />
                                <Text style={{color:'gray', fontSize:13}}>Cat</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={() => {
                                this.setState({
                                    selectedPet:'dog',
                                    optionWhatkind:false,
                                    optionKind:false,
                                    optionHowMany:true,
                                    optionSelectHowMany:true,
                                    selectedImage : require('../../images/dogIcon.png')

                                })
                            }}
                            style={{height:25, width:44, borderRadius:33, alignItems:'center', justifyContent:'center', marginLeft:10,}}>
                                <Image
                                    style={{height:28, width:28}}
                                    source={DogIcon}
                                />
                                <Text style={{color:'gray', fontSize:13}}>Dog</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    selectedPet:'othher',
                                    optionWhatkind:false,
                                    optionKind:false,
                                    optionHowMany:true,
                                    optionSelectHowMany:true,
                                    selectedImage : require('../../images/otherIcon.png')

                                })
                            }}
                             style={{height:25, width:44, borderRadius:33, alignItems:'center', justifyContent:'center', marginLeft:10,}}>
                                <Image
                                    style={{height:28, width:28}}
                                    source={OtherIcon}
                                />
                                <Text style={{color:'gray', fontSize:13}}>Other</Text>
                            </TouchableOpacity>

                        </View>
                            : null}

{/* javed */}
                    { this.state.optionHowMany ?
                        <View style={{flexDirection:'row', alignSelf:'center', marginTop:30,}}>
                            <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    petOneSelected:true,
                                })
                            }}
                             style={{height:30, width:30, alignItems:'center', justifyContent:'center',  marginLeft:5,}}>
                                
                                
                                <Image
                                    style={{height:28, width:28, opacity:this.state.petOneSelected ? 1 : 0.2}}
                                    source={this.state.selectedImage}
                                />
                                
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={() => {
                                this.setState({
                                    petOneSelected:true,
                                    petTwoSelected:true,
                                })
                            }}
                            style={{height:30, width:30, alignItems:'center', justifyContent:'center',  marginLeft:5,}}>
                                <Image
                                    style={{height:28, width:28, opacity:this.state.petTwoSelected ? 1 : 0.2}}
                                    source={this.state.selectedImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    petOneSelected:true,
                                    petTwoSelected:true,
                                    petThreeSelected:true,
                                })
                            }}
                             style={{height:30, width:30,  alignItems:'center', justifyContent:'center',  marginLeft:5, }}>
                                <Image
                                    style={{height:28, width:28, opacity:this.state.petThreeSelected ? 1 : 0.2}}
                                    source={this.state.selectedImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    petOneSelected:true,
                                    petTwoSelected:true,
                                    petThreeSelected:true,
                                    petFourSelected:true,
                                })
                            }}
                             style={{height:30, width:30, alignItems:'center', justifyContent:'center',  marginLeft:5,}}>
                                <Image
                                    style={{height:28, width:28, opacity:this.state.petFourSelected ? 1 : 0.2}}
                                    source={this.state.selectedImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    petOneSelected:true,
                                    petTwoSelected:true,
                                    petThreeSelected:true,
                                    petFourSelected:true,
                                    petFiveSelected:true,
                                })
                            }}
                             style={{height:30, width:30,  alignItems:'center', justifyContent:'center', marginLeft:5,}}>
                                <Image
                                    style={{height:28, width:28, opacity:this.state.petFiveSelected ? 1 : 0.2}}
                                    source={this.state.selectedImage}
                                />
                            </TouchableOpacity>

                        </View>
                            : null}

                  </View>


            <TouchableOpacity 
            onPress={() => {
                this.setState({
                    petOption:false,
                    optionDoYouHave:false,
                    optionWhatkind:false,
                    optionHowMany:false,

                    optionYesNo:false,
                    optionKind:false,
                    optionSelectHowMany:false,

                    timeOption:true,
                })
            }}
                style={{
                    height:40, 
                    width:130, 
                    backgroundColor:'#F90505', 
                    borderRadius:33, 
                    flexDirection:'row',
                    justifyContent:'center',
                    alignSelf:'center',
                    marginTop:10,
                    shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                }}>
                    <Image
                        style={{height:20, width:20, position:'absolute', right:10, alignSelf:'center'}}
                        source={RightArrow}
                    />
                    <Text style={{fontSize:13, color:'white', alignSelf:'center'}}>
                        NEXT
                    </Text>


              </TouchableOpacity>
                  
            </View> : null}

            {this.state.timeOption ? <View style={{
                height:200,
                width:200,
                position:'absolute',
            }}>

                <View style={{
                    height:40,
                    width:150, 
                    backgroundColor:'white',
                    borderRadius:33,
                    alignSelf:'center',
                    flexDirection:'row',
                    marginTop:40,
                    shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                }}>

                    <TouchableOpacity style={{
                        borderColor:'gray', 
                        borderRightWidth:1,
                        width:75,
                        justifyContent:'center'
                    }}>
                            <Text style={{fontWeight:'bold', fontSize:18, alignSelf:'center'}}>
                                10
                            </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderColor:'gray', 
                        borderLeftWidth:1,
                        width:75,
                        justifyContent:'center'
                    }}>
                        <Text style={{fontWeight:'bold', fontSize:18, alignSelf:'center'}}>
                                15
                            </Text>

                    </TouchableOpacity>


                </View>
                <TouchableOpacity 
            onPress={() => {
                this.closeModal()
            }}
                style={{
                    height:40, 
                    width:140, 
                    backgroundColor:'#F90505', 
                    borderRadius:33, 
                    flexDirection:'row',
                    justifyContent:'center',
                    alignSelf:'center',
                    marginTop:10,
                    shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                }}>
                    <Image
                        style={{height:20, width:20, position:'absolute', right:10, alignSelf:'center'}}
                        source={RightArrow}
                    />
                    <Text style={{fontSize:13, color:'white', alignSelf:'center'}}>
                        SCHEDULE
                    </Text>


              </TouchableOpacity>
                  


            </View> : null}
              
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
        height:350,  
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
        shadowColor: "#000",
                shadowOffset: {
                    width: 10, height: 10
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
    },
    currentMonthText:{
        fontSize:18,
        color:'white',
    }

})