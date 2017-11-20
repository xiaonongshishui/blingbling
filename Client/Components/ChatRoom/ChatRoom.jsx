import React, {Component} from 'react';
import {connect} from 'react-redux';
import {grey300, cyan50} from 'material-ui/styles/colors';
import {withRouter,Route, Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import avatar_img from 'images/avatar.jpg';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const { history } = this.props;
        const { } = this.state;
        return <div className="chatRoom">
            <AppBar title="红烧肉"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={<FlatButton><i className="fa fa-address-book"
                                                     aria-hidden="true"
                                                     style={{fontSize:"24px",lineHeight:"36px"}}/></FlatButton>}
                    onLeftIconButtonTouchTap={()=>{history.push('/hall')}}
                    onRightIconButtonTouchTap={()=>{history.push('/userList/1')}}/>
           <section className="dashBoard">
               <ul>
                   <li className="other">
                       <Avatar src={avatar_img} />
                       <div className="bubble">
                           哈哈哈
                       </div>
                   </li>
                   <li className="me">
                       <Avatar src={avatar_img} />
                       <div className="bubble">
                           哈哈哈你好你好我很好！！！！
                       </div>

                   </li>
                   <li className="other">
                       <Avatar src={avatar_img} />
                       <div className="bubble">
                           哈哈哈
                       </div>
                   </li>
                   <li className="me">
                       <Avatar src={avatar_img} />
                       <div className="bubble">
                           哈哈哈你好你好我很好！！！！
                       </div>

                   </li>
                   <li className="me">
                       <Avatar src={avatar_img} />
                       <div className="bubble">
                           哈哈哈你好你好我很好！！！！
                       </div>

                   </li>
               </ul>
           </section>
            <section className="inputBoard">
                <textarea type="text" rows="5"/>
                <i className="fa fa-paper-plane" aria-hidden="true"/>
            </section>


        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default withRouter(connect(mapStateToProps)(ChatRoom));
