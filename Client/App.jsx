import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiThemeable from 'material-ui/styles/muiThemeable';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from 'reducers/index';
import 'assets/css/main.less'

import Login from 'components/Login/Login';
import Hall from 'components/Hall/Hall';
import Account from 'components/PersonalCenter/Account';
import Messages from 'components/PersonalCenter/Messages';
import AccountSettingNickname from 'components/PersonalCenter/AccountSettingNickname';
import AccountSettingPassword from 'components/PersonalCenter/AccountSettingPassword';
import ChatRoom from 'components/ChatRoom/ChatRoom';
import UserList from 'components/ChatRoom/UserList';


const muiTheme = getMuiTheme({
    fontFamily: 'calibri, sans-serif'
});

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <Router>
                    <div style={{width: "100%", height: "100%"}}>
                        <Route path="/hall" component={Hall}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/account/:userId" exact component={Account}/>
                        <Route path="/messages/:userId" component={Messages}/>
                        <Route path="/account/nickname/:userId" exact component={AccountSettingNickname}/>
                        <Route path="/account/password/:userId"  component={AccountSettingPassword}/>
                        <Route path="/chatRoom/:roomId"  component={ChatRoom}/>
                        <Route path="/userList/:roomId"  component={UserList}/>
                    </div>
                </Router>
            </Provider>
        </MuiThemeProvider>
    }
}
