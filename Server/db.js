import mongoose from 'mongoose';

const DB_URL = 'localhost:12345/helurong';
mongoose.connect(DB_URL,{
    useMongoClient:true
});
const db = mongoose.connection;
export default db;



