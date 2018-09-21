import React from 'react';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import User from './User';
import Student from './Student';
export default TabNavigator(
    {
    User:{screen:User},
    Student:{screen:Student}
    },
    {
        navigationOptions:({navigation})=>
            ({tabBarIcon:({focused,tintColor})=>{
            const {routeName} = navigation.state;
            let iconName;
            if(routeName === 'User'){
                iconName=`ios-person${focused?'':'-outline'}`;
            }
            else if(routeName==='Student'){
                iconName=`ios-people${focused?'':'-outline'}`;
            }
            return <Icon name={iconName} size={25} color={tintColor}/>
        }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: true,
    }

);