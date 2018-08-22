import Router from 'koa-router';
import * as UserController from './Controllers/UserController';

const router = new Router();
router.get('/',  (ctx, next) => {
    //await next();
    ctx.body = "hello";
})
    .post('/register', UserController.register)    ;
export default router;