import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
class NavFrame1 extends Component{
    static navigationOptions = {
        title: 'NavFrame1',
    };
    render() {
        return (

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Frame2',{itemId:1,name:'Watch'})}>
                <Text style={styles.textStyle}>FRAME1</Text>
            </TouchableOpacity>

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

export default NavFrame1;