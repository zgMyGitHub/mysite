import "./mock"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from './router'
import store from "./store"
import "./eventBus";

import showMessage from "./utils/showMessage"
Vue.prototype.$showMessage = showMessage;


import vLoading from "./directives/laoding";
Vue.directive("loading",vLoading);
import vLazy from "./directives/lazy"
Vue.directive("lazy",vLazy);
// import "./api/banner"


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
// http://hickeylxdj:3002/api/comment/10

// import eventBus from "./eventBus";
// function handle1(data){
//   console.log("handle1",data);
// }
// function handle2(data){
//   console.log("handle2",data);
// }

// eventBus.$on("event")

// import * as msgApi  from "./api/message";

// msgApi.getMessages().then(res=>{
//   console.log(res)
// })

