import mongoose from 'mongoose';
import UserModal from '../Modals/User.js';



const userSchema = mongoose.Schema(UserModal);

export userSchema;