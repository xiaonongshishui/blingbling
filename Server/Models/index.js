import mongoose from 'mongoose';
import UserScheme from '../Schemas/UserSchema';
import ChatRoomScheme from '../Schemas/ChatRoomSchema';

export const User = mongoose.model('User', UserScheme);
export const ChatRoom = mongoose.model('ChatRoom',ChatRoomScheme);