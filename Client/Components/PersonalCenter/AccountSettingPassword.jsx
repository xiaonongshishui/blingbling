import React, {Component} from 'react';
import {connect} from 'react-redux';
import {grey500, cyan50} from 'material-ui/styles/colors';
import {withRouter,Route, Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';



class AccountSettingPassword extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { history } = this.props;
        return <div className="account_nickname">
            <AppBar title="设置密码"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonTouchTap={()=>{history.goBack()}}
                    iconElementRight={<FlatButton label="保存"/>}/>
            <div className="input">
                <TextField hintText="请输入原密码"
                           hintStyle={{color:grey500}}
                           inputStyle={{color:"#fff"}}/>
                <TextField hintText="请输入新密码"
                           hintStyle={{color:grey500}}
                           inputStyle={{color:"#fff"}}/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default withRouter(connect(mapStateToProps)(AccountSettingPassword));
