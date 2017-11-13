import React, {Component} from 'react';
import {connect} from 'react-redux';
import {grey300, cyan50} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import avatar_img from 'images/avatar.jpg';

class PersonalCenter extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {isOpen ,handleOpenDrawer} = this.props;
        return <div className="personalCenter">
            <Drawer
                docked={false}
                width={200}
                open={isOpen}
                containerStyle={{backgroundColor:'rgba(255,255,255,0.3)'}}
                onRequestChange={(open) => handleOpenDrawer(open)}>
                <div style={{textAlign:"center",padding:'30px 0 15px 0'}}>
                    <Avatar src={avatar_img}
                        size={100}
                    />
                </div>
                <MenuItem style={{color:cyan50}}>
                    <i className="fa fa-user-o"
                             aria-hidden="true"
                             />我的账户
                    <i className="fa fa-angle-right" aria-hidden="true"/></MenuItem>
                <MenuItem style={{color:cyan50}}><i className="fa fa-envelope-o"
                             aria-hidden="true"
                             />我的消息
                    <i className="fa fa-angle-right" aria-hidden="true"/></MenuItem>
                <MenuItem style={{color:cyan50,position:"absolute",bottom:0,left:0,right:0}}>
                    <div><i className="fa fa-cog" aria-hidden="true"/>设置</div>
                    <div><i className="fa fa-sign-out" aria-hidden="true"/>退出</div>
                </MenuItem>
            </Drawer>
        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default connect(mapStateToProps)(PersonalCenter);
