import http from 'http';
import Koa from 'koa';
import user from './model.js';

const PORT = process.env.PORT || 9999;
const app = new Koa()

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(PORT);
// console.log(`Server listening in ${PORT}`);

// const Koa = require('koa')

app.use(async (ctx) => {
    ctx.body = 'hello koa2'
    console.log(user);
})

app.listen(PORT)
console.log(`Server listening in ${PORT}`)