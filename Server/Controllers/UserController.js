import _ from 'underscore';
import { UserModel } from '../Models';

//add new user
export const register = (ctx, next) => {
    console.log("ctx.request", ctx.request);
    console.log("ctx headers",ctx.headers);
    console.log("ctx.request.body", ctx.request.body);
    
    let form = ctx.request.body;
    let userName = form.userName;
    let psw = form.psw;

    //validate username
    const validateUserName = (userName)=>{ 
        return userName &&  !_.isNumber(userName);
    }
        
    //validate password
    const validatePassword = (password) => {
        return password.length > 6 && password.length < 16;
    }
    
    if (!validateUserName(userName) || !validatePassword(psw)) { 
        return false;
    }

    let user = new UserModel({
        username: userName,
        nickname: form.nickname,
        psw: psw,
        createTime: new Date().getTime(),
        lastChangeTime: new Date().getTime(),//update time
        avatar: "",//avatar url base64
        gender: undefined,
    });
    user.save(function (err, res) {
        
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
        
    console.log('register success');
};

//get user



