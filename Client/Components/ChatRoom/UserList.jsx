import React, {Component} from 'react';
import {connect} from 'react-redux';
import {grey300, cyan50 , darkBlack} from 'material-ui/styles/colors';
import {withRouter,Route, Link} from 'react-router-dom';
import MobileTearSheet from '../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import avatar_img from 'images/cherry.jpg';
import ReactPullToRefresh from 'react-pull-to-refresh';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class UserList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {history} = this.props;
        return <div className="messages">
            <AppBar title="成员列表"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonTouchTap={()=>{history.goBack()}}/>
            <ReactPullToRefresh onRefresh={(resolve,reject)=>{resolve()}}
                                icon={<i className="fa fa-hand-o-right" aria-hidden="true"/>}>
            <MobileTearSheet>
            <List>
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />
                <ListItem leftAvatar={<Avatar src={avatar_img} />}
                          primaryText="樱桃小丸子"
                          rightIcon={<CommunicationChatBubble />} />

            </List>
            </MobileTearSheet>
            </ReactPullToRefresh>

        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default withRouter(connect(mapStateToProps)(UserList));
