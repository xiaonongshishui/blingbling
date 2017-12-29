import mongoose from 'mongoose';
import UserScheme from '../Schemas/UserSchema';
import ChatRoomScheme from '../Schemas/ChatRoomSchema';

export const UserModel = mongoose.model('User', UserScheme);
export const ChatRoomModel = mongoose.model('ChatRoom',ChatRoomScheme);