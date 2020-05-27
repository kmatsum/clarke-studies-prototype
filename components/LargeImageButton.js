import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function LargeImageButton(props) {
    return (
        <View style={{...styles.container, ...props.style}}>
            <TouchableOpacity onPress={props.onClick}>
                <ImageBackground
                    source={props.image}
                    style={styles.bgImage}
                    imageStyle={{
                        position: 'absolute',
                        resizeMode: 'contain',
                        left: 0
                    }}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10,
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.45)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'right',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
});