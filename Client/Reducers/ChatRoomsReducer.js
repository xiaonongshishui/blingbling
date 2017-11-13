const initialState = {
    chatRoomsNameList: [
        {
            id: 1,
            name: "红烧肉",
            bgColor: "#910d3d"
        },
        {
            id:2,
            name:"葱油饼",
            bgColor:"#009688"
        },
        {
            id:3,
            name:"蛋挞",
            bgColor:"#ff9800"
        },
        {
            id:4,
            name:"烤鱼",
            bgColor:"#4a061a"
        },
        {
            id:5,
            name:"火锅",
            bgColor:"#eb2631"
        },
        {
            id:6,
            name:"豆腐脑",
            bgColor:"#d9d4d9"
        }]
};

export const ChatRoomsReducer = (state = initialState, action) => {
    switch (action) {
        default:
            return state;
    }
};
