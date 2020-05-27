import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
//Expo Imports
import { Ionicons } from '@expo/vector-icons';

ScreenExerciseDetails.navigationOptions = (navigationData) => {
    const currentExercise = navigationData.navigation.getParam('exerciseObject');

    return {
        headerTitle: ('Study #' + currentExercise.studyNum + ': Exercise #' + currentExercise.exerciseNum)
    }
}

export default function ScreenExerciseDetails(props) {
    const currentExercise = props.navigation.getParam('exerciseObject');
    const [currentTempo, setCurrentTempo] = useState(120);

    //Input handling method (Called from 'onTextChanged' prop of the TextInput)
    function numberInputHandler(inputText) {
        const newTempo = parseInt(inputText.replace(/[^0-9]/g, ''));

        if (parseInt(newTempo) < 1) {
            console.log('Less than 1');
            setCurrentTempo(1);
            return;
        }
        //Validate the input text
        setCurrentTempo(newTempo);
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <View style={styles.controlContainer}>
                    <View style={styles.tempoControlContainer}>
                        <Text style={{textAlign: 'center'}}>Tempo:</Text>
                        <Ionicons
                            name='ios-arrow-dropup'
                            size={50}
                            style={styles.icons}
                            onPress={() => {
                                numberInputHandler((currentTempo + 1).toString());
                            }}
                        />
                        <TextInput
                            style={styles.tempoInput}
                            keyboardType='number-pad'
                            maxLength={3}
                            onChangeText={numberInputHandler}
                            value={currentTempo.toString()}
                        />
                        <Ionicons
                            name='ios-arrow-dropdown'
                            size={50}
                            style={styles.icons}
                            onPress={() => {
                                numberInputHandler((currentTempo - 1).toString());
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons
                            name='ios-play'
                            size={50}
                            style={styles.icons}
                        />
                        <Ionicons
                            name='ios-square'
                            size={50}
                            style={styles.icons}
                        />
                    </View>
                    <View style={{justifyContent:'center', alignItems: 'center'}}>
                        <Text>PUT CLICK TRACK SWITCH HERE</Text>
                    </View>
                </View>
                <View>
                    <Image
                        source={currentExercise.exerciseImage}
                        style={styles.image}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: '2.5%'
    },
    image: {
        width: '100%',
        position: 'absolute',
        resizeMode: 'contain',
        left: 0
    },
    controlContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    tempoControlContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempoInput: {
        height: 30,
        width: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    icons: {
        marginHorizontal: 15,
    }
});