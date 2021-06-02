export default function (fn,duration = 1000){
    let timer = null;
    return (...arg)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...arg)
        },duration)
    }
}