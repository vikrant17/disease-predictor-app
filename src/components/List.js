import React from 'react';
import {FlatList, View, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ListItem from './ListItem';
import AddButton from './AddButton';
import AddExpense from './AddExpense';

export default class List extends React.Component{
    state = {
        expenses: [],
        modalVisible: false
    }

    componentDidMount() {
        AsyncStorage.getItem('expenses').then((expenses) => {
            if (expenses)
                this.setState({expenses: JSON.parse(expenses)})
        })

        
    }

    addExpense = (title, amount, date) => {
        this.setState((prevState) => {

            return ({expenses : prevState.expenses.concat({
            key: Math.random().toString(),
            title,
            amount,
            date
        })})
    
    }, () => {
        AsyncStorage.setItem('expenses', JSON.stringify(this.state.expenses))
    })
    }

    saveEdit = (key, title, amount, date) => {
        this.setState((prevState) => {
            expensesCopy = prevState.expenses.slice();

            index = expensesCopy.findIndex((expense) => expense.key === key )

            expensesCopy[index].title = title,
            expensesCopy[index].amount = amount,
            expensesCopy[index].date = date

            return {expenses: expensesCopy}

        },  () => {
            Actions.list()
            AsyncStorage.setItem('expenses', JSON.stringify(this.state.expenses));
        })
    }

    deleteItem = (key) => {
        this.setState((prevState) => {
            console.log(prevState.expenses)
            newExpenses = prevState.expenses.filter((expense) => expense.key !== key )
            console.log(newExpenses)

            return {expenses: newExpenses}

        },  () => {
            Actions.list()
            AsyncStorage.setItem('expenses', JSON.stringify(this.state.expenses));
        })
    }
    
    render () {

        return (
            <View style={{flex: 1}}>
        <FlatList 
            data={this.state.expenses} 
            renderItem={(expense) => <ListItem deleteHandler={this.deleteItem} saveEditHandler={this.saveEdit} _key={expense.item.key} title={expense.item.title} amount={expense.item.amount} date={expense.item.date}
            />}
        />
        <AddButton onPress={() => this.setState({modalVisible: true})}/>
        <AddExpense visible={this.state.modalVisible}
            onRequestClose={() => this.setState({modalVisible: false})}
            addExpense={this.addExpense}
        />
        </View>
        );
    }
}