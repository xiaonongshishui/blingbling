
import Koa from 'koa';
import mongoose from 'mongoose';
import user from './model.js';


const DB_URL = 'mongodb://localhost:12345/helurong';

mongoose.connect(DB_URL,{
    useMongoClient:true
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db open');
});



const app = new Koa();
if(1){
    import('./model.js').then(a=>{
        console.log(a);
    });
}else{
    import('./test.js').then(a=>{
        console.log(a);
    });
}

const PORT = process.env.PORT || 9999;

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});



app.listen(PORT);
console.log(`app started at port ${PORT}...`);
