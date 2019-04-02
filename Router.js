import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import List from './src/components/List';
import EditExpense from './src/components/EditExpense';

const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene key="list" component={List} title="Expenses" initial/>
            <Scene key="editExpense" component={EditExpense} title="Edit"/>
        </Scene>
    </Router>
);

export default RouterComponent;