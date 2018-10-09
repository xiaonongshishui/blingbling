import mongoose from 'mongoose';
import _ from 'underscore';

const modal = {
    username: String,
    nickname: String,
    password: String,
    createTime: Date,
    lastChangeTime: Date,//update time
    avatar: String,//avatar url
    gender: Number,
};

const userSchema = mongoose.Schema(modal);

userSchema.pre('save', function preSave(next) { 
    const doc = this;
    if (!doc.validateUserName(doc.get("username"))) { 
        const err = new Error('wrong username');
        next(err);
    }

    if (!doc.validatePassword(doc.get("password"))) { 
        const err = new Error('wrong password');
        next(err);
    }

    next();
});

userSchema.methods.validateUserName = (userName) => { 
    return userName && !_.isNumber(userName);
}

userSchema.methods.validatePassword = ( password ) => { 
    return password.length > 6 && password.length < 16;
}



const UserModel = mongoose.model('User', userSchema);
export default UserModel;