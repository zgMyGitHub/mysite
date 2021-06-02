import Vue from "vue";
import Vuex from "vuex";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project"

if(!window.Vuex){
    Vue.use(Vuex)
}


export default new Vuex.Store({
    modules:{
        about,
        banner,
        setting,
        project
    },
    strict:true
})