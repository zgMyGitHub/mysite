import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/,"get",{
    code:0,
    msg:"",
    "data|5-7":[
        {
            id:"@uuid",
            name:"@ctitle(1,10)",
            "url|1":["@url",null],
            "gitHub|1":["@url",null],
            "description|1-4":["@cparagraph(1,5)"],
            thumb:"@image(300x250,@color,#fff,@natural)"
        }
    ]
})