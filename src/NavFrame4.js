import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
class NavFrame4 extends Component{
    static navigationOptions = {
        title: 'NavFrame4',
    };
    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.reset()}>
                <Text style={styles.textStyle}>FRAME4</Text>
            </TouchableOpacity>
        /*<TouchableOpacity onPress={()=>this.props.navigation.pop()}>*/
        )
    }
}

const styles={
    textStyle:{
        fontSize:20,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'red'
    }
}

export default NavFrame4;