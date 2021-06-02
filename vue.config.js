module.exports = {
    // devServer:{
    //     proxy:{
    //         "/api":{
    //             target:"http://hickeylxdj.com:3002/"
    //         }
    //     }
    // },
    publicPath:process.env.NODE_ENV ="production" ? "/mysite" : "/",
    configureWebpack:require("./webpack.config")
}