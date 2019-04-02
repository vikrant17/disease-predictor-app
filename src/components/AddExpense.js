import React from 'react';
import {View, Modal, Text, TextInput, Button, StyleSheet, DatePickerAndroid} from 'react-native';
import InputField from './InputField';


export default class AddExpense extends React.Component {

    state={
        title: "",
        amount:"",
        date:""
    }

    saveHandler = () => {
        this.props.addExpense(this.state.title, this.state.amount, this.state.date)
        this.props.onRequestClose();
        this.setState({title: "", amount: "", date: ""})
    }

    render() {
        return (
            
            <Modal
                visible={this.props.visible}
                transparent
                onRequestClose={this.props.onRequestClose}
            >
                <View style={styles.containerStyle}>
                    
                    <View style={styles.innerContainerStyle}>
                    <Text style={styles.titleStyle}>Add Expense</Text>
                    <InputField title="Title" value={this.state.title} 
                        onChangeText = {(text) => this.setState({title: text})}
                        />
                    <InputField title="Amount" value={this.state.amount} 
                        onChangeText = {(text) => this.setState({amount: text})}
                        />
                    <InputField title="Date" value={this.state.date} onFocus={() => {
            
                        DatePickerAndroid.open({
                            date: new Date()
                        }).then((val) => {
                            if (val.day)
                            this.setState({date: `${val.day}/${val.month}/${val.year}`})
                        })
                    }}
                        
                        />
                    <Button title="save" color="purple"
                        onPress={this.saveHandler}
                    />
                    <Button title="close" 
                        onPress={this.props.onRequestClose}
                    />
                    </View>
                </View>
            </Modal>
   
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center"
        
    },
    innerContainerStyle: {
        backgroundColor: "white",
        justifyContent: "center",
        height: 300,
        width: "90%",
        padding: 10,
        borderRadius: 3
    },
    titleStyle: {
        textAlign: "center",
        fontSize: 20,
        color: "#333"
    }

})