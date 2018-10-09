import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,Route, Link} from 'react-router-dom';
import {cyan500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import PersonalCenter from '../personal-center/PersonalCenter';

class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        };
        this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
    }

    handleOpenDrawer(flag) {
        this.setState({isDrawerOpen: flag});
    }

    render() {
        const {chatRoomsNameList} = this.props;
        const {isDrawerOpen} = this.state;
        return <div className="hall">
            <AppBar title="大厅"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={()=>{this.handleOpenDrawer(true)}}/>
            <section>
                <Link to="/chatRoom/1">
                <i className="play fa fa-play-circle"
                   style={{color: cyan500}}
                   aria-hidden="true"
                />
                </Link>
                {
                    chatRoomsNameList.map((ele, index) => {
                        return <div key={index}
                                    className={"circle" + " circle" + (index + 1)}
                                    style={{background: ele.bgColor}}>
                            {ele.name}
                        </div>
                    })
                }
            </section>
            <PersonalCenter isOpen={isDrawerOpen}
                            handleOpenDrawer={this.handleOpenDrawer}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default connect(mapStateToProps)(Hall);
