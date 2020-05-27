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
import { STUDIES, EXERCISES } from '../data/values/clarkeData';

// ScreenStudies.navigationOptions = (navigationData) => {
//     return {

//     }
// }

export default function ScreenStudies(props) {
    return (
        <View style={styles.screen}>
            <FlatList
                data={STUDIES}
                keyExtractor={(item, index) => item.studyNum}
                renderItem={renderStudyItems}
            />
        </View>
    );



    //FUNCTION TO RENDER EACH STUDY COMPONENT
    function renderStudyItems(itemData) {
        return (
            <LargeImageButton
                title={itemData.item.studyNum + 'st Study'}
                image={itemData.item.titleImage}
                onClick={() => {
                    props.navigation.navigate({
                        routeName: 'Exercises',
                        params: {
                            studyNum: itemData.item.studyNum
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