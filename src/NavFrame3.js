import React,{Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
class NavFrame3 extends Component{
    static navigationOptions = {
        title: 'NavFrame3',
    };
    render() {
        const {navigation} = this.props;
        const ItemId = navigation.getParam('itemId','123');
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Frame4')}>
                <Text style={styles.textStyle}>FRAME3</Text>
                <Text>ItemId:{JSON.stringify(ItemId)}</Text>
            </TouchableOpacity>
        )
    }
}

const styles={
    textStyle:{
        fontSize:20,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'yellow'
    }
}

export default NavFrame3;