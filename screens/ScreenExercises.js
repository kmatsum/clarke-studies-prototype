import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
//Custom React Components
import LargeImageButton from '../components/LargeImageButton';
//Data Imports
import { EXERCISES } from '../data/values/clarkeData';

ScreenExercises.navigationOptions = (navigationData) => {
    const currentStudyNum = navigationData.navigation.getParam('studyNum');

    return {
        headerTitle: ('Study #' + currentStudyNum)
    }
}

export default function ScreenExercises(props) {
    const selectedStudy = props.navigation.getParam('studyNum');
    const exercisesInThisStudy = EXERCISES.filter((exercise) => exercise.studyNum == selectedStudy);

    return (
        <View style={styles.screen}>
            <FlatList
                data={exercisesInThisStudy}
                keyExtractor={(item, index) => item.exerciseNum}
                renderItem={renderExercisesItems}
            />
        </View>
    );

    //FUNCTION TO RENDER EACH STUDY COMPONENT
    function renderExercisesItems(itemData) {
        return (
            <LargeImageButton
                title={'Exercise #' + itemData.item.exerciseNum}
                image={itemData.item.exerciseImage}
                style={{height: 100}}
                onClick={() => {
                    props.navigation.navigate({
                        routeName: 'ExerciseDetails',
                        params: {
                            exerciseObject: itemData.item
                        }
                    });
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: '2.5%'
    }
});