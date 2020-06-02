import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    ScrollView,
    Modal,

 } from 'react-native'
import AddHome from '../../images/addHome.png' 
import RangeBar1 from '../../images/rangeBar1.png'
import RangeBar2 from '../../images/rangeBar2.png'

import Laundry from '../../images/Laundry.png'
import Ironing from '../../images/Ironing.png'
import Fridge from '../../images/Fridge.png'
import Windows from '../../images/Windows.png'
import Shoe_wash from '../../images/Shoe_wash.png'
import Stove from '../../images/Stove.png'
import Microwave from '../../images/Microwave.png'
import Cabinets from '../../images/Cabinets.png'

import Down from '../../images/down.png'
import Top from '../../images/top.png'

import Calendar from '../../images/calendar.png'

import CalendarModal from '../../modal/CalendarModal'

class RequestScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            line2:false,
            isModalVisible:false,
            bgColor:'white'
        }
    }
    changeModalVisibility = (bool) => {
        if(bool == true){
            this.setState({
                bgColor:'lightgray'
            })
        }
        else{
            this.setState({
                bgColor:'white'
            })
        }
        this.setState({ isModalVisible: bool });
    }
   render() {
       return (
           <View style={[styles.container, {backgroundColor:this.state.bgColor}]}>
               {/* header */}
               <View style={{
                   backgroundColor:"white", 
                   height:55, 
                   flexDirection:'row', 
                   alignItems:'center',
                   shadowColor: '#000',
                   shadowOffset: { width: 1, height: 1 },
                   shadowOpacity:  0.3,
                   shadowRadius: 2.25,
                   elevation: 4,
                }}>
                    <TouchableOpacity>
                        <Image
                            style={{height:24, width:33, marginLeft:20}}
                            source={require('../../images/Arrow.png')}
                        />
                    </TouchableOpacity>
                    <View style={{
                        height:40, 
                        width:40, 
                        backgroundColor:'#F90505', 
                        borderRadius:70,
                        marginLeft:20,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Image
                            style={{height:20, width:20}}
                            source={AddHome}
                        />
                    </View>
                    <Text style={{marginLeft:20, color:'#6A7980'}}>1993 Mbalo Street, Midrand</Text>
                
                </View> 

                {/* ranges */}
                <View style={styles.range}>
                    <Text>Bedrooms</Text>
                    <Image
                        style={styles.rangeImage}
                        source={RangeBar1}
                    />
                </View>

                <View style={styles.range}>
                    <Text>Bathrooms</Text>
                    <Image
                        style={styles.rangeImage2}
                        source={RangeBar2}
                    />
                </View>
                
                {/* amount     */}

                <Text style={styles.totolCostText}>Total Cost</Text>

                <Text style={styles.costAmount}>R148.00</Text>

                <View style={styles.amountBar}></View>

                {/* Extras */}

                <View>
                    <Text style={styles.extraText}>Extras</Text>
                    {
                        this.state.line2 ?
                    <TouchableOpacity 
                            style={styles.downContainer}
                            onPress={() => this.setState({line2:false})}
                        >
                            <Image
                                style={styles.down}
                                source={Top}
                            />  
                        </TouchableOpacity> : null
                    }

                    {/* <ScrollView style={styles.scroller}> */}
                    { this.state.line2 ?
                        <View style={styles.scrollItems}>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Laundry}
                                    />
                                </View>
                                <Text>
                                    Laundry
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Ironing}
                                    />
                                </View>
                                <Text>
                                    Ironing
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Fridge}
                                    />
                                </View>
                                <Text>
                                    Fridge
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Windows}
                                    />
                                </View>
                                <Text>
                                    Windows
                                </Text>
                            </TouchableOpacity>
                        </View> :
                        <View style={styles.scrollItems}>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Shoe_wash}
                                    />
                                </View>
                                <Text>
                                    Shoe wash
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Stove}
                                    />
                                </View>
                                <Text>
                                    Stove
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Microwave}
                                    />
                                </View>
                                <Text>
                                    Microwave
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={Cabinets}
                                    />
                                </View>
                                <Text>
                                    Cabinets
                                </Text>
                            </TouchableOpacity>
                        </View> }
                        { this.state.line2 ? null :
                        <TouchableOpacity 
                            style={styles.downContainer}
                            onPress={() => this.setState({line2:true})}
                        >
                            <Image
                                style={styles.down}
                                source={Down}
                            />  
                        </TouchableOpacity>
                        }
                    {/* </ScrollView>     */}

                    <View style={styles.bottomLine}>

                    </View>
                </View>
                
                {/* time and date */}

                <View style={styles.timeDateContainer}>
                     <Image
                        source={Calendar}
                        style={styles.calenderImage}
                     />
                     <TouchableOpacity
                        onPress={() => this.changeModalVisibility(true)}
                     >
                         <Text style={styles.calenderText}>
                         Schedule time & Date
                         </Text>
                     </TouchableOpacity>
                </View>

                        {/* Button */}

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                     style={styles.Btn}>
                        <Text
                            style={styles.BtnText}
                        >BOOK A CLEANING</Text>
                    </TouchableOpacity>
                </View>
                <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
            animationType='fade'>
                <CalendarModal changeModalVisibility={this.changeModalVisibility } />
            </Modal>

           </View>
        )
    }
}

export default RequestScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    range:{ 
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:10,

    },
    rangeImage:{ 
        height:48.96,
        width:168,
        marginLeft:10,
    },
    rangeImage2:{ 
        height:48.8,
        width:160,
        marginLeft:15,
    },
    totolCostText:{
        marginTop:20,
        alignSelf:'center',
    },
    costAmount:{
        fontSize:18,
        marginTop:10,
        alignSelf:'center',
    },
    amountBar:{
        height:1, 
        width:150,
        backgroundColor:'#F90505',
        alignSelf:'center',
        marginTop:10,
    },
    extraText:{
        marginTop:10,
        alignSelf:'center',
    },
    scroller:{
        height:90, 
        marginTop:10,
    },
    scrollItems:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'90%',
        alignSelf:'center',
    },
    ItemContainer:{
        alignItems:'center',
    },
    Item:{
        height:60,
        width:60,
        borderRadius:70,
        backgroundColor:'#F90505',
        alignItems:'center',
        justifyContent:'center',
    },
    itemImage:{
        height:35,
        width:35,
    },
    downContainer:{
        height:30,
        width:30,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    down:{
        height:16.24,
        width:30,
    },
    bottomLine:{
        height:1, 
        width:200,
        alignSelf:'center',
        backgroundColor:'#969FAA',
        marginTop:10,
    },
    timeDateContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:10,
    },
    calenderImage:{
        height:30,
        width:30,
    },
    calenderText:{
        fontWeight:'bold',
        color:'#F90505',
        marginTop:5,
        marginLeft:5,
    },
    btnContainer:{
        flex:1,
    },
    Btn:{
        height:45, 
        width:'80%', 
        backgroundColor:'#F90505', 
        position:'absolute', 
        bottom:20, 
        alignSelf:'center', 
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    BtnText:{
        fontWeight:'bold',
        color:'white',
    }
})