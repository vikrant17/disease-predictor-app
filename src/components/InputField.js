import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const InputField = (props) => (
    <View style={styles.inputFieldStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
        <TextInput 
            {...props}
            onChangeText={props.onChangeText}
        value={props.value} style={styles.inputStyle}/>
    </View>
)

const styles = StyleSheet.create({
    inputFieldStyle: {
        flexDirection: "row",
        borderWidth: 1,
        alignItems: "center",
        marginBottom: 10

    },
    textStyle: {
        height: "100%",
        padding: 10,
        fontSize: 16,
        color: "black",
        backgroundColor: "#bbb",
        textAlignVertical: "center"
    },
    inputStyle: {
        borderLeftWidth: 1,
        borderColor: "#666",
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: "#222"
    }

})

export default InputField;