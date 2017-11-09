import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from 'reducers/index';


import Login from 'components/Login/Login';
import Hall from 'components/Hall/Hall';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MuiThemeProvider>
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/hall" component={Hall}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </Router>
            </Provider>
        </MuiThemeProvider>
    }
}
