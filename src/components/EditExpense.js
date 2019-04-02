import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import InputField from './InputField';


export default class EditExpense extends React.Component {

    state={
        title: "",
        amount:"",
        date:""
    }

    componentDidMount() {
        this.setState({title: this.props.title,
        amount: this.props.amount,
        date: this.props.date})
    }

    saveEditHandler = () => {
       this.props.saveEditHandler(this.props._key, this.state.title, this.state.amount, this.state.date);
      
    }

    deleteHandler = () => {
        this.props.deleteHandler(this.props._key);
    }

    render() {
        return (
                <View style={styles.containerStyle}>
                    
                    <View style={styles.innerContainerStyle}>
                    <Text style={styles.titleStyle}>Edit Expense</Text>
                    <InputField title="Title" value={this.state.title} 
                        onChangeText = {(text) => this.setState({title: text})}
                        />
                    <InputField title="Amount" value={this.state.amount} 
                        onChangeText = {(text) => this.setState({amount: text})}
                        />
                    <InputField title="Date" value={this.state.date} 
                        onChangeText = {(text) => this.setState({date: text})}
                        />
                    <Button title="save" color="purple"
                        onPress={this.saveEditHandler}
                    />
                    <Button title="delete" color="red"
                        onPress={this.deleteHandler}
                    />
                    </View>
                </View>
   
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