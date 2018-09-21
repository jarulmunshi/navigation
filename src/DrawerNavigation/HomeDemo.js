import React,{Component} from 'react';
import {Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class HomeDemo extends Component{
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon:({tintColor})=>(
            <Icon name="ios-home" size={25} color={tintColor}/>
        ),
    };
    render() {
        return (
            <Button onPress={()=>{this.props.navigation.openDrawer();
                this.props.navigation.navigate('Settings');}} title="Settings"></Button>
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

export default HomeDemo;