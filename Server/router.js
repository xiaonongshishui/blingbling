import Router from 'koa-router';
import UserController from './Controllers/UserController';

const router = new Router();
router.get('/',  (ctx, next) => {
    //await next();
    ctx.body = "hello";
})
    .post('/register', (ctx, next) => { 
        console.log(ctx);

    })    ;
export default router;