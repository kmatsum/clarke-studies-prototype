import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

// ScreenRoutines.navigationOptions = (navigationData) => {
//     return {

//     }
// }

export default function ScreenRoutines(props) {
    return (
        <View style={styles.screen}>
            <Text>Routines Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: '2.5%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});