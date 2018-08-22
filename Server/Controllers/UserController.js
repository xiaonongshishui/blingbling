import _ from 'underscore';
import { User } from '../Models';

//add new user
export const register =  async (ctx, next) => {
    console.log(ctx.request);
    console.log(ctx.request.body);
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
        ctx.body = {status:false};
        return await next()
    }

    let user = new User({
        username: userName,
        nickname: form.nickname,
        psw: psw,
        avatar: "",//avatar url base64
        gender: undefined,
    });
    user.save()
    ctx.body = user;
    await next();
};

//get user



