import eventBus from "@/eventBus";
import {debounce} from "@/utils";
//调用该函数，就可以设置合适的图片
import defaultGif from "@/assets/default.gif"

let imgs = [];


function setImage(img){
    //处理图片
    //该图片是否在视口范围内
    img.dom.src =defaultGif;

    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if(rect.top>= -height && rect.top <= clientHeight){
       const tempImg = new Image(); 
       tempImg.onload = function(){
            img.dom.src = img.src;
       }
       tempImg.src = img.src;
       imgs = imgs.filter((i)=>i!== img)
    }
}
function setImages(dom){
    for(const img of imgs){
        setImage(img)
    }
}
function handleScroll(dom){
    setImages(dom);
}
eventBus.$on("mainScroll",debounce(handleScroll,50))
export default {
    inserted(el,bindings){
       const img =  {
            dom:el,
            src:bindings.value,
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el){
        imgs = imgs.filter((img)=>img.dom !==el)
    }
};