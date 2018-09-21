import React from 'react';
import Home from './HomeDemo';
import Settings from './SettingsDemo';
import {createDrawerNavigator} from 'react-navigation';

const Drawer = createDrawerNavigator({
    Home:{
        screen:Home
    },
    Settings:{
        screen:Settings
    }
});

export default Drawer;