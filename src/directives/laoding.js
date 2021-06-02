// 导出配置对象
// export default  {
//     bind(el,binging){
//         console.log("bind",el,binging);
//         //根据binging.value的值，决定创建元素内部

//     },
//     // inserted(el,binging){
//     //     console.log("inserted",el)
//     // },
//     update(el,binging){
//         console.log("update",el,binging)
//         //根据binging.value的值，决定创建或者删除img元素
//     }
// }

import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
function getLoadingImg(el){
    return el.querySelector("img[data-role=loading]")
}
function createLoadImg(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;

    return img;
}

export default function(el,binging){
    //根据binging.value的值，决定创建img元素
    // console.log(binging)
    // console.log(el,binging)
    const curImg = getLoadingImg(el);
    if(binging.value){
        // console.log(object)
        if(!curImg){
            const img = createLoadImg();
            el.appendChild(img);          
        }       
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}