const Koa = require('koa');
const app = new Koa();

const PORT = process.env.PORT || 9999;

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(PORT);
console.log(`app started at port ${PORT}...`);