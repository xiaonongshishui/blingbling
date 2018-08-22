import mongoose from 'mongoose';

const UserModal = {
    username: String,
    nickname: String,
    psw: String,
    createTime: Date,
    lastChangeTime: Date,//update time
    avatar: String,//avatar url
    gender: Number,
};

const userSchema = mongoose.Schema(UserModal,
    { timestamps: { createdAt: 'createTime', updateAt: 'lastChangeTime' } }
);

export default userSchema;