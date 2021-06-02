import Mock from "mockjs";
import qs from "querystring";


Mock.mock("/api/message","post",{
    code:0,
    msg:"",
    data:{
        id:"@guid",
        nickname:"@cname",
        content:"@cparagraph(1,10)",
        createDate:Date.now(),
        "avatar|1":[
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1475331839,2066156315&fm=26&gp=0.jpg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2601900707,917050054&fm=26&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3107083461,4268460867&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335200364,664435613&fm=26&gp=0.jpg"
        ]
    }
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url);

    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 52,
            [`rows|${query.limit||10}`]: [
                {
                    id:"@guid",
                    nickname:"@cname",
                    content:"@cparagraph(1,10)",
                    createDate:Date.now(),
                    "avatar|1":[
                        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1475331839,2066156315&fm=26&gp=0.jpg",
                        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2601900707,917050054&fm=26&gp=0.jpg",
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3107083461,4268460867&fm=26&gp=0.jpg",
                        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3335200364,664435613&fm=26&gp=0.jpg"
                    ] 
                }
            ]
        }

    })
})