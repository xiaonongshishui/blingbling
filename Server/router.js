import Router from 'koa-router';
import register from './Controllers/Users/register';

const router = new Router();
router.get('/',  (ctx, next) => {
    //await next();
    //ctx.body = "hello";
    
    ctx.body = JSON.stringify(ctx.request.query);
    console.log(ctx.body);
})
    .post('/register', register);
export default router;