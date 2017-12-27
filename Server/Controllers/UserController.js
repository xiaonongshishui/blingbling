import _ from 'underscore';
import { UserModel } from '../Models';

//add new user
export const register = function (ctx, next) {
    console.log(ctx.request);
    console.log(ctx.body);
    let form = ctx.body;
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
        username: username,
        nickname: form.nickname,
        psw: psw,
        createTime: new Date().getTime(),
        lastChangeTime: new Date().getTime(),//update time
        avatar: "",//avatar url base64
        gender: undefined,
    });
};

//get user



