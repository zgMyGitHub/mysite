import ins from "./request";
/***
 * 获取博客数据
 */

export async function getBlogs(page = 1,limit = 10,categoryid = -1){
    return await ins.get("/api/blog",{
       params:{
            page,
            limit,
            categoryid
       }
    })
}
/**
 * 获取博客分类
 */

export async function getBlogCategories(){
    return await ins.get("/api/blogtypes")
}

//获取当个博客

export async function getBlog(id){
    return await ins.get(`/api/blog/${id}`)
}

//提交评论
export async function postComment(commentInfo){
    return await ins.post(`/api/comment`,commentInfo);
}

//获取分页评论
export async function getComment(blogid,page = 1,limit=10){
    return ins.get("/api/comment",{
        params:{
            blogid,
            page,
            limit
        }
    })
}