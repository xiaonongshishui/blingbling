import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPassword: false
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateUserName() {

    }

    validatePassword() {

    }

    handleSubmit() {
        const { history } = this.props;
        history.push('/hall');
    }

    toggleShowPassword() {
        this.setState({isShowPassword: !this.state.isShowPassword});
    }

    render() {
        const {isShowPassword} = this.state;
        return <div className="login">
            <section className="logo">
            </section>
            <section className="form">
                <ul>
                    <li>
                        <i className="fa fa-user" aria-hidden="true"/>
                        <TextField
                            hintText="用户名"
                            hintStyle={{color: "#a6a6a6"}}
                            inputStyle={{color: "#fff"}}
                        />
                    </li>
                    <li>
                        <i className="fa fa-lock" aria-hidden="true"/>
                        <TextField
                            hintText="密码"
                            hintStyle={{color: "#a6a6a6"}}
                            inputStyle={{color: "#fff"}}
                            type={isShowPassword ? "text" : "password"}
                        />
                        <i className={"eye fa" + (isShowPassword ? " fa-eye" : " fa-eye-slash")}
                           onClick={this.toggleShowPassword}
                           aria-hidden="true"/>
                    </li>
                </ul>
                <RaisedButton label="开始聊天了"
                              fullWidth={true}
                              className="submit"
                              primary={true}
                              onClick={this.handleSubmit}/>
            </section>
            <section className="additional">
                <i className="fa fa-refresh" aria-hidden="true"/>
                <p>没有账号？点击自动生成</p>
                <p className="forgetPassword">忘记密码</p>
            </section>

        </div>
    }
}
export default withRouter(Login);
