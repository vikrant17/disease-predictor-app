import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const AddButton = (props) => (
    <TouchableHighlight style = {styles.buttonStyle} onPress={props.onPress}>
        <Text style={styles.textStyle}>+</Text>
    </TouchableHighlight>
);

export default AddButton;

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 25,
        width: 50,
        height: 50,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 25,
        bottom: 25
    },
    textStyle: {
        fontSize: 30
    }
})