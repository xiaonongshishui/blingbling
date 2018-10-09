
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import db from './db';
import router from './router';
import bodyParser from 'koa-bodyparser';

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db open');
});



const app = new Koa();

const PORT = process.env.PORT || 9999;

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });
app
.use(bodyparser())
.use(router.routes())
.use(router.allowedMethods());


app.listen(PORT);
console.log(`app started at port ${PORT}...`);
