export default function(timetamp,showTime = false){
    const date = new Date(+timetamp);
    const mouth = (date.getMonth() + 1).toString().padStart(2,"0");
    const day = date.getDate().toString().padStart(2,"0");

    let str =  `${date.getFullYear()}-${mouth}-${day}`;
    if(showTime){
        const hour = date.getHours().toString().padStart(2,"0");
        const minute = date.getMinutes().toString().padStart(2,"0");

        const second = date.getSeconds().toString().padStart(2,"0");
        str += `  ${hour}:${minute}:${second}`
    }
    return str;
}