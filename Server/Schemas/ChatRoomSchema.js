import mongoose from 'mongoose';

const ChatRoom = {
    ID: String,//id
    name: String,//聊天室名
    createTime: Date,//注册时间
    // tags: Array,
};

const userSchema = mongoose.Schema(ChatRoom);

export default userSchema;