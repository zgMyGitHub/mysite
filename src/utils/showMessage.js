import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import showStyle from "./showMessage.module.less"
/**
 * 
 * 
 * @param {*} content 消息内容
 * @param {*} type  消息类型
 * @param {*} duration  多久消失
 * 
 * @param {*} container 容器，消息显示到正中间，不传显示到页面中间
 */
export default function showMessage(options){
    //创建消息元素
    const content = options.content || "";
    const type = options.type || "iconjinggao";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement("div");
    // const body1 = document.getElementsByTagName("body")[0];
    // console.log(body1)
    const IconDon = getComponentRootDom(Icon,{
            type,
    });

    const typeClassName= showStyle[`message-${type}`];

    div.className = `${showStyle.message} ${typeClassName}`;
    div.innerHTML = `<span class="${showStyle.icon}">${IconDon.outerHTML}</span>
        <div>${content}</div>
    
    `;
    if(options.container){
        if(getComputedStyle(container).position === "static"){
            container.style.position = "relative";
        }
    }
    
    container.appendChild(div);
    div.clientHeight;
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    //消失
    setTimeout(()=>{
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        div.addEventListener("transitionend",
        function(){
            div.remove();
            options.callback && options.callback();
        },
        {
            once:true
        })
    },duration);


    
}