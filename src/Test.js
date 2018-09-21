import React from 'react';
import {createStackNavigator} from 'react-navigation';
import NavFrame1 from './NavFrame1';
import NavFrame2 from './NavFrame2';
import NavFrame3 from './NavFrame3';
const Test = createStackNavigator(
    {
        Frame1:{
            screen:NavFrame1
        },
        Frame2:{
            screen:NavFrame2
        },
        Frame3:{
            screen:NavFrame3
        }
    },
    {
        initialRouteName: 'Frame1'
    }
)
export default Test