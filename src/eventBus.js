//事件总线
// const listeners = {};
// export default {
//     //监听某个事件
//     $on(eventName,handle){
//         if(!listeners[eventName]){
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handle);
//     },
//     //取消某个事件
//     $off(eventName,handle){
//         if(!listeners[eventName]){
//             return;
//         }
//         listeners[eventName].delete(handle);
//     },
//     //触发事件
//     $emit(eventName,...args){
//         if(!listeners[eventName]){
//             return;
//         }
//         for(const handler in listeners[eventName] ){
//             handler(...args);
//         }
//     }
// }

/**
 * 
 * 事件名：mainScroll
 * 含义：珠区域滚动条位置变化后触发
 * 参数
 *  滚动的dom元素，如果是undefined，则表示dom元素已经被销毁
 * 
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数
 *  滚动高度
 */
import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app;

export default app;