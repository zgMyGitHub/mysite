export default function(refValue){
    return {
        mounted(){
            console.log(1)
            this.$bus.$on("setMainScroll",this.handleSetMainScroll)
             this.$refs[refValue].addEventListener("scroll",this.handleMainScroll);
         },
         beforeDestroy(){
             this.$bus.$emit("mainScroll");
            this.$bus.$off("setMainScroll",this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener("scroll",this.handleMainScroll);

        },
        methods:{
            handleSetMainScroll(scrollTop){
                this.$refs[refValue].scrollTop = scrollTop;               
            },
            handleMainScroll(){
                this.$bus.$emit("mainScroll",this.$refs[refValue]);
            },
        }
    }
}