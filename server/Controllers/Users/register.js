import UserModel from '../../Models/users';

export default async function register (ctx, next) {
    const data = ctx.request.body;
    const username = data.username;
    const password = data.password;
    const nickname = data.nickname || "";
    console.log(data);

    let user = new UserModel({
        username,
        nickname,
        password,
        createTime: new Date().getTime(),
        lastChangeTime: new Date().getTime(),//update time
        avatar: "",//url base64
        gender: undefined,
    });
   
    try {
        await UserModel.update({ username: "heluronglalala" }, { $set: { nickname: "hahaha" } }, {multi:true}, (err,numberAffected, rawResponse) => {
            console.log("修改成功啦");
            console.log(err);
            console.log(numberAffected);
            console.log(rawResponse);
        });
        await user.save();
    } catch (e) { 
        console.error(e);
        ctx.throw(422, e.message);
    }

    ctx.body = {
        sys_status: 200,
        sys_timestamp: new Date().getTime(),
    };
};