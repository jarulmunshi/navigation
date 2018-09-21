import React,{Component} from 'react';
import {Text,View} from 'react-native';


class User extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Student</Text>
            </View>
        )
    }
}
const styles={
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        justifyContent:'center',
    },
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'lightgray'
    }
}
export default User;