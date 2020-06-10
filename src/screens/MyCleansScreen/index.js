import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal} from 'react-native'
import AddCleanerModal from '../../modal/AddCleanerModal'
 
class MyCleansScreen extends Component {
    static navigationOptions = {
        header:null
      }
    constructor(props){
        super(props)

        this.state = {             
            isModalVisible:false,
            bgColor:'white',


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
                bgColor:'white',
            })
            
        }
        this.setState({ isModalVisible: bool });
    }
   render() {
       return (
           <View style={[styles.container, {backgroundColor:this.state.bgColor}]}>

            <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <Image
                            style={{height:24, width:33, marginTop:15, marginLeft:20}}
                            source={require('../../images/Arrow.png')}
                        />
                    </TouchableOpacity>

                    <Text style={{fontSize:18, alignSelf:'center', marginLeft:20, marginTop:10,}}>
                        My Cleans
                    </Text>
               </View>
               <View style={{
                        height:2,
                        width:'80%', 
                        alignSelf:'center',
                        backgroundColor:'#C4C4C4', 
                        marginTop:20,
                    }}></View>
               


               <View style={{height:70, width:'70%', marginTop:60, borderTopWidth:1,borderBottomWidth:1, borderColor:'gray', flexDirection:'row', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:15, flex:1}}>
                            1993 Ingwe Street
                        </Text>
                        <Text style={{fontSize:12, marginBottom:3}}>
                            Jan 20,2020 9:30
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#40A557', marginBottom:3, fontSize:12}}>
                                COMPLETED
                            </Text>
                            <TouchableOpacity
                            onPress={() => this.changeModalVisibility(true)}
                            >
                                <Text style={{color:'#F90505', marginBottom:3, fontSize:12, marginLeft:5,}}>
                                    ADD CLEANER
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        style={{marginLeft:'30%'}}
                        source={require('../../images/chevron1.png')}
                    />
                </View>
                <View style={{height:70, width:'70%', marginTop:10, borderBottomWidth:1, borderColor:'gray', flexDirection:'row', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:15, flex:1}}>
                            1993 Ingwe Street
                        </Text>
                        <Text style={{fontSize:12, marginBottom:3}}>
                            Jan 20,2020 9:30
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#40A557', marginBottom:3, fontSize:12}}>
                                COMPLETED
                            </Text>
                            <TouchableOpacity
                            onPress={() => this.changeModalVisibility(true)}
                            >
                                <Text style={{color:'#F90505', marginBottom:3, fontSize:12, marginLeft:5,}}>
                                    ADD CLEANER
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        style={{marginLeft:'30%'}}
                        source={require('../../images/chevron1.png')}
                    />
                </View>
                <View style={{height:70, width:'70%', marginTop:10, borderBottomWidth:1, borderColor:'gray', flexDirection:'row', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:15, flex:1}}>
                            1993 Ingwe Street
                        </Text>
                        <Text style={{fontSize:12, marginBottom:3}}>
                            Jan 20,2020 9:30
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#40A557', marginBottom:3, fontSize:12}}>
                                COMPLETED
                            </Text>
                            <TouchableOpacity
                            onPress={() => this.changeModalVisibility(true)}
                            >
                                <Text style={{color:'#F90505', marginBottom:3, fontSize:12, marginLeft:5,}}>
                                    ADD CLEANER
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        style={{marginLeft:'30%'}}
                        source={require('../../images/chevron1.png')}
                    />
                </View>
                <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
            animationType='fade'>
                <AddCleanerModal changeModalVisibility={this.changeModalVisibility } />
            </Modal>
           </View>
        )
    }
}

export default MyCleansScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})