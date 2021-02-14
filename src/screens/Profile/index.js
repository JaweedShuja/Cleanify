import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native'
import Helper from '../../utils/Helper'

export default class  Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:{}
        }
    }
    componentDidMount(){
        this.getUser()   
    }
    static navigationOptions = {
        headerShown:false,
    }
    async getUser(){
        let user = await Helper.getUser();
        this.setState({
            user:user
        })
    }
    renderUserDetails(){
        var code = []
        for(var data in this.state.user){
            code.push(
                <View key={data} style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <Text>{data}</Text>
                    <Text>{this.state.user[data]}</Text>

                </View>
            )
        }
        return code
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#F90505'} barStyle={'light-content'} />
                <Text>this is profile screen</Text>
                {this.renderUserDetails()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white', 
        padding:10 
    }
})
