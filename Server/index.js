import http from 'http';
import Koa from 'koa';
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
