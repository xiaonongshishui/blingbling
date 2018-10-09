import mongoose from 'mongoose';

const modal = {
    ID: String,//id
    name: String,//聊天室名
    createTime: Date,//注册时间
    // tags: Array,
};

const userSchema = mongoose.Schema(modal);


export const ChatRoomModel = mongoose.model('ChatRoom',ChatRoomScheme);