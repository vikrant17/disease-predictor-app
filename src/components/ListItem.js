import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

const ListItem = (props) => (
    <TouchableHighlight onPress={() => Actions.editExpense({
        title: props.title,
        date: props.date,
        amount: props.amount,
        saveEditHandler: props.saveEditHandler,
        deleteHandler: props.deleteHandler,
        _key: props._key
    })}>
    <View style={styles.listItemStyle}>
        <Text style={styles.dateStyle}>{props.date}</Text>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.amountStyle}>{props.amount}</Text>
    </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    listItemStyle: {
        flexDirection: "row",
        margin: 5,
        marginBottom: 5,
        padding: 5
    
    },
    dateStyle: {
        fontSize: 16,
        fontFamily: "Roboto",
        marginRight: 20
    },
    amountStyle: {
        fontSize: 16,
        fontFamily: "Roboto",
        marginLeft: 10,
        width: "25%",
        textAlign: "right",
    },
    titleStyle: {
        fontSize: 16,
        fontFamily: "Roboto",
        width: "50%",
    }
})

export default ListItem;