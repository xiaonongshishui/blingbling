import mongoose from 'mongoose';
import UserScheme from '../Schemas/UserSchema.js';

let User = mongoose.model('User',UserScheme);