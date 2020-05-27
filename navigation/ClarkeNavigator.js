//React Imports
import React from 'react';
//React Native Imports
import { Platform, Text } from 'react-native';
//React Navigation Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//Expo Imports
import { Ionicons } from '@expo/vector-icons';
//Screen Imports
import ScreenStudies from '../screens/ScreenStudies';
import ScreenRoutines from '../screens/ScreenRoutines';
import ScreenExercises from '../screens/ScreenExercises';
import ScreenExerciseDetails from '../screens/ScreenExersiseDetails';

const defaultStackNavigatorOptions = {
    headerTitle: 'NOT CONFIGURED',
    headerTintColor: 'black',
    headerTitleStyle: {
    },
    headerBackTitleStyle: {
    },
    headerStyle: {
        backgroundColor: 'white',
    },
};

const MainClarkeStacknavigator = createStackNavigator(
    { //Navigations
        Studies: {
            screen: ScreenStudies,
            navigationOptions: {
                headerTitle: 'Clarke Studies'
            }
        },
        Exercises: ScreenExercises,
        ExerciseDetails: ScreenExerciseDetails
    },
    { //Navigation Options
        defaultNavigationOptions: defaultStackNavigatorOptions,
    }
);

const RoutinesStacknavigator = createStackNavigator(
    { //Navigations
        Routines: {
            screen: ScreenRoutines,
            navigationOptions: {
                headerTitle: 'Your Routines'
            }
        }
    },
    { //Navigation Options
        defaultNavigationOptions: defaultStackNavigatorOptions,
    }
);

const MainNavigator = createBottomTabNavigator(
    { //Navigations
        Book: {
            screen: MainClarkeStacknavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name='ios-book'
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
                tabBarColor: 'blue',
                tabBarLabel: 'Clarke Studies'
            }
        },
        Routines: {
            screen: RoutinesStacknavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name='ios-calendar'
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
                tabBarColor: 'blue',
                tabBarLabel: 'My Routines'
            }
        }
    },
    { //Navigation Options

    }
)

export default createAppContainer(MainNavigator);