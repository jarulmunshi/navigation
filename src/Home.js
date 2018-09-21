import React from 'react';
import {createStackNavigator} from 'react-navigation';
import NavFrame4 from './NavFrame4';
import Test from './Test';
const Home = createStackNavigator(
    {
        FrameDemo:{
            screen:Test
        },
        Frame4:{
            screen:NavFrame4
        }
    },
    {
        mode: 'modal',
        headerMode:'none'
    }
)


export default Home;
