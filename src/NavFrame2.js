import React,{Component} from 'react';
import {Text,TouchableOpacity,Button,View} from 'react-native';
class NavFrame2 extends Component{
    static navigationOptions =({navigation}) =>{
        return{
            title: navigation.getParam('Name','NavFrame2'),
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                />
            )
        }

    };
    render() {
        const {navigation} = this.props;
        const ItemId = navigation.getParam('itemId','123');
        const Name= navigation.getParam('name','abc');
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Frame3')}>
                    <Text style={styles.textStyle}>FRAME2</Text>
                </TouchableOpacity>
                <Text>itemId:{JSON.stringify(ItemId)}</Text>
                <Text>name:{JSON.stringify(Name)}</Text>
                {/*<Button title="Present" onPress={()=>Navigator.present('Frame2',{source:NavFrame2})}></Button>*/}
                <Button title="Go" onPress={()=>this.props.navigation.push('Frame3',{itemId:ItemId})}></Button>
                {/*<Button title="update title" onPress={()=>this.props.navigation.setParams({Name:'Update'})}></Button>*/}
            </View>

        )
    }
}

const styles={
    textStyle:{
        fontSize:20,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'skyblue'
    }
}

export default NavFrame2;