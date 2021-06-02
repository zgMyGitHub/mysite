//公共的远程获取数据
//具体的组件中提供一个远程获取数据的方法 fetchData
export default function(defaultValue = null){
    return {
        data(){
            return {
                isLoading:true,
                data:defaultValue
            }
        },
        async created(){
            // console.log(this)
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}