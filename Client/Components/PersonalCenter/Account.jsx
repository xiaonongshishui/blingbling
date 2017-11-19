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

const GenderList = ["男生","女生","不告诉你"];
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGenderMenuOpen:false,
            gender:'未设置'
        };
        this.handleOpenGenderMenu = this.handleOpenGenderMenu.bind(this);
    }

    handleOpenGenderMenu(flag){
        this.setState({isGenderMenuOpen:flag});
    }

    setGender(value){
        this.setState({gender:value,isGenderMenuOpen:false});
    }

    render() {
        const { history } = this.props;
        const { isGenderMenuOpen ,gender} = this.state;
        return <div className="account">
            <AppBar title="我的账户"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonTouchTap={()=>{history.push('/hall')}}/>
            <div style={{textAlign:"center",padding:"50px 0 20px 0"}}>
                <Avatar src={avatar_img}
                        size={100}
                />
            </div>
            <List>
                <ListItem primaryText="BB号"
                          leftIcon={<i className="fa fa-comment-o"
                                       aria-hidden="true"
                                       style={{lineHeight:"20px"}}/>}
                          innerDivStyle={{paddingLeft:"40px"}}
                          style={{color:"#fff"}}>
                    <div className="right">123456</div>
                </ListItem>
                <Link to="/account/nickname/1">
                <ListItem primaryText="昵称"
                          leftIcon={<i className="fa fa-heart"
                                       aria-hidden="true"
                                       style={{lineHeight:"24px"}}/>}
                          rightIcon={<i className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                        style={{lineHeight:"24px"}}/>}
                          innerDivStyle={{paddingLeft:"40px"}}
                          style={{color:"#fff"}}>
                    <div className="right">小葱跑蛋</div>
                </ListItem>
                </Link>
                <ListItem primaryText="性别"
                          leftIcon={<i className="fa fa-flag-o"
                                       aria-hidden="true"
                                       style={{lineHeight:"24px"}}/>}
                          rightIcon={<i className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                        style={{lineHeight:"24px"}}/>}
                          innerDivStyle={{paddingLeft:"40px"}}
                          style={{color:"#fff"}}
                          >
                    <div className="right" onClick={(event)=>{event.preventDefault();this.handleOpenGenderMenu(true);this.setState({anchorEl: event.currentTarget})}}>
                        {gender}</div>
                    <Popover open={isGenderMenuOpen}
                             anchorEl={this.state.anchorEl}
                             anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                             targetOrigin={{horizontal: 'left', vertical: 'top'}}
                             onRequestClose={()=>{this.handleOpenGenderMenu(false)}} >
                        <Menu>
                            {
                                GenderList.map((ele,i)=>{
                                    return <MenuItem primaryText={ele}
                                                     key={i}
                                    onClick={()=>this.setGender(ele)}/>
                                })
                            }
                        </Menu>
                    </Popover>
                </ListItem>
                <ListItem primaryText="密码"
                          leftIcon={<i className="fa fa-unlock-alt"
                                       aria-hidden="true"
                                       style={{lineHeight:"24px"}}/>}
                          rightIcon={<i className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                        style={{lineHeight:"24px"}}/>}
                          innerDivStyle={{paddingLeft:"40px"}}
                          style={{color:"#fff"}}>
                    <div className="right">去修改</div>
                </ListItem>
            </List>

        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default withRouter(connect(mapStateToProps)(Account));
