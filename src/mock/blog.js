import Mock from "mockjs";
import qs from "querystring";
Mock.mock("/api/blogtypes", "get", {
    code: 0,
    msg: "",
    "data|1-10": [{
        "id|+1": 1,
        name: "分类@id",
        "articleCount|0-300": 1,
        "order|+1": 1
    }]
});

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url);

    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit||10}`]: [{
                id: "@guid",
                title: "@ctitle(10,15)",
                description: "@cparagraph(1,10)",
                category: {
                    "id|1-10": 1,
                    name: "分类@id"
                },
                "scanNumber|0-300": 0,
                "commentNumber|1-300": 30,
                "thumb|1": ["@image(300x250,@color,#fff,@natural)", null],
                createDate: "@date('T')"
            }]
        }

    })
})

Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', {
    code: 0,
    msg: "",
    data: {
        id: "1",
        title: "虚拟DOM",
        category: {
            "id|1-10": 1,
            name: "分类@id",
        },
        description: "@cparagraph(1,10)",
        "scanNumber|0-1000": 0,
        "commentNumber|0-100": 0,
        createDate: "@date('T')",
        toc: [
            {
                id:1,
                name: "什么是虚拟dom",
                anchor: "article-md-title-1",
                // children: [{
                //         name: "简单请求的判定",
                //         anchor: "article-md-title-3"
                //     },
                //     {
                //         name: "求的判定",
                //         anchor: "listeners"
                //     }
                // ]
            },
            {
                id:2,
                name: "为什么需要虚拟dom树",
                anchor: "article-md-title-2"
            },
            {
                id:3,

                name: "虚拟dom如何转换为真实的dom",
                anchor: "article-md-title-3"
            },
            {
                id:4,
                name: "模板和虚拟dom的关系",
                anchor: "article-md-title-4"
            }

        ],
        "thumb|1": [Mock.Random.image("300x250", "#000", "#fff", "Random Image"), null],
        htmlContent: `
  <h2 class="mume-header" id="article-md-title-1">什么是虚拟dom</h2>
  
  <p>虚拟dom本质上就是一个普通的js对象，用于描述视图的界面结构。

  在vue中，每个组件都是一个render函数，每个render函数都会放回一个虚拟dom树。这也意味着每个组件对应一颗虚拟dom树</p>
  <h2 class="mume-header" id="article-md-title-2">为什么需要虚拟dom树</h2>
        <p>在vue中，渲染视图会到用render函数，这种渲染不仅发生在组件创建时候，同时发生在视图依赖的数据更新时候，如果渲染时，直接使用真实dom，由于真实dom的创建、更新、插入、等操作会带来大量的性能消耗，
        从而会寄到的降低渲染效率，因此vue在渲染时候，使用虚拟dom来代替真实的dom，主要是为了解决效率问题</p>
  <h2 class="mume-header" id="article-md-title-3">虚拟dom如何转换为真实的dom</h2>
        <p>在一个组件实例首次渲染时，它先生成虚拟dom树， 然后根据虚拟dom树创建真实的dom，并把真实的dom挂在到页面合适的位置，此时每一个虚拟dom变回对于一个真实的dom

        如果一个组件收到响应式数据的变坏时，需要重新渲染时，它仍然会重新调用render函数，创建一个新的虚拟dom树，用新的树和旧的树对比，通过对比vue会找到最小更新量，然后更新必要的虚拟dom节点，最后这些更新的虚拟dom节点，会去修改它们对于的真实dom
        这样一来，就保证对真实dom达到最小的改动</p>
  <h2 class="mume-header" id="article-md-title-4">模板和虚拟dom的关系</h2>
        <p>vue框架中有一个compile模板，它主要负责将模板转化为render函数，而render函数掉用后将得到虚拟dom

        步骤
        
        1. 将模板字符串转化为AST
        2. 将AST转化为render函数
        
        
        >> vue最终运行时候，最终需要的是render函数，而不是模板，因此，模板中的各种语法在虚拟dom中都是不存在的，它会变成虚拟dom的配置</p>
  
        `
    }
})

Mock.mock("/api/comment","post",{
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
})

Mock.mock(/^\/api\/comment\/?(\?.+)?$/, "get", function (options) {
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