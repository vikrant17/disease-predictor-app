import React from 'react';
import {View, Text, AsyncStorage, Button} from 'react-native';

export default class Header extends React.Component {

    state = {
        wow: 'init'
    }

    handleButtonPress = () => {
        AsyncStorage.getItem('wow').then((value) => {
            this.setState({wow: value});
        })
    }

    render() {
        return (
            <View>
                <Text>{this.state.wow}</Text>
                <Button onPress={this.handleButtonPress} title="hello">Hi</Button>
            </View>
        )
    }
}