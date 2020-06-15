import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CleaningIcon from '../../images/cleaningIcon.png'

class CleaningInProgressScreen extends Component {
    static navigationOptions = {
        header:null
      }
    constructor(props){
        super(props)

        this.state = {
            seconds :0,
            remaining:30
        }

        var t = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 3.3333,
                remaining: this.state.remaining - 1
            })
            if(this.state.seconds >= 99){
                clearInterval(t)
                this.props.navigation.navigate('EstimateScreen')
            }
        },1000)
    }
    closeModal = () => {
        this.props.changeModalVisibility(false);
    }
    start = () => {
        this.props.start();
    }
   static navigationOptions = {
       header:null
   }
   render() {
       return (
           <View style={styles.container}>
               <View style={styles.mainDiv}>
                   

                    <View style={styles.firstRound}>
                        <View style={styles.secontRound}>
                        <AnimatedCircularProgress
                            size={200}
                            width={10}
                            fill={this.state.seconds}
                            tintColor="#F90505"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="white" >
                            {() => (
                                <View>
                                    <View style={{alignItems:'center',justifyContent:'center', flexDirection:'row',}}>
                                        <Text style={{fontSize:15, color:'#38B6FF'}}>
                                            {this.state.remaining}
                                        </Text>
                                        <Text style={{fontSize:15, color:'#38B6FF', marginLeft:5}}>
                                            seconds
                                        </Text>
                                    </View> 
                                    <Image
                                        style={{height:60, width:60, marginTop:15,}}
                                        source={CleaningIcon}

                                    />
                                </View>
                            )}   
                        </AnimatedCircularProgress>
                    
                        </View>
                    </View>
                    <View style={{
                        height:130, 
                        width:274, 
                        alignSelf:'center', 
                        marginTop:40, 
                        borderRadius:15, 
                        borderWidth:2,
                        borderColor:'rgba(105,105,105,0.04)',
                        backgroundColor:'rgba(105,105,105,0.04)'


                    }}>

                    <View style={{
                        height:'100%',
                        width:'100%',
                        backgroundColor:'white',
                        
                        borderRadius:15, 
                        // shadowColor: "#000",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 1,
                        // },
                        // shadowOpacity: 0.20,
                        // shadowRadius: 1.41,
                        // elevation: 2, 
                        borderWidth:1.5,
                        borderColor:'rgba(105,105,105,0.09)'
                    }}>
                        <Text style={{fontSize:18, alignSelf:'center', marginTop:20,}}>Cleaning in Progress</Text>
                        <Text style={{fontSize:18, alignSelf:'center', marginTop:20,}}>Estimated finish time</Text> 
                        <Text style={{fontSize:18, alignSelf:'center', }}>14:30</Text>


                    </View>
                    </View>
                    

                   
                    
               </View>
         </View>
        )
    }
}

export default CleaningInProgressScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
    },
    mainDiv:{
        backgroundColor:'white', 
        alignSelf:'center',
        borderRadius:10,
        // position:'absolute',
        // bottom:10
    },
    text1:{
        fontSize:15,
        
        // alignSelf:'center',
        marginTop:10,
    },  
    text2:{
        // alignSelf:'center', 
        
    },
    firstRound:{
        height:260, 
        width:260, 
        alignSelf:'center',
        borderRadius:150,
        backgroundColor:'rgba(249,5,5,0.37)',
        justifyContent:'center',
    },
    secontRound:{
        height:180, 
        width:180, 
        alignSelf:'center',
        borderRadius:150,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center', 
    },
    textInsideRound:{
        color:"#38b6ff",
        fontSize:20,
        fontWeight:'bold',
    },
    textInsideRound2:{
        color:"#38b6ff",
        fontSize:18,
        fontWeight:'bold',
    },
    pinTextView:{
        flexDirection:'row',
        marginTop:10,
    },
    pinImage:{
        height:15,
        width:15
    },
    pinText:{
        fontSize:14,
        
        marginLeft:5
    },
    addressText:{
        alignSelf:'center',
        
    },
    btnView:{
        flexDirection:'row',
    },
    btnStyle:{
        height:40, 
        width:100, 
        alignSelf:'center', 
        borderRadius:30, 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:10
    },
    btnText:{
        fontSize:11,
        
        color:'white'
    }
})

