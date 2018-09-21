import React,{Component} from 'react';
import {Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class SettingsDemo extends Component{
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon:({tintColor})=>(
            <Icon name="ios-settings" size={25} color={tintColor}/>
        ),
    };
    render() {
        return (
            <Button onPress={()=>{this.props.navigation.closeDrawer();
            this.props.navigation.navigate('Home')}} title="Home"></Button>
        )
    }
}

const styles={
    textStyle:{
        fontSize:20,
        justifyContent:'center',
        alignSelf:'center',
    }
}

export default SettingsDemo;