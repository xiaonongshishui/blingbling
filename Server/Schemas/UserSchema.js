import mongoose from 'mongoose';

const UserModal = {
    ID: String,//BBID
    username: String,
    nickname: String,
    psw: String,
    createTime: Date,
    lastChangeTime: Date,//update time
    avatar: String,//avatar url
    gender: Number,
};

const userSchema = mongoose.Schema(UserModal);

export default userSchema;