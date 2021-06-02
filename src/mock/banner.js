import Mock from "mockjs";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";

Mock.mock("/api/banner","get",{
    code:0,
    msg:"",
    data:[
        {
            id:1,
            midImg:`${one}`,
            bigImg:`${one}`,
            title:"春暖花开",
            description:"生物在春晨中醒来，展示着生命的可贵、诱人"
        },
        {
            id:2,
            midImg:`${two}`,
            bigImg:`${two}`,
            title:"强烈的阳光好像烈火一样",
            description:"七月，透蓝的天空，悬着火球似的太阳"
        },
        {
            id:3,
            midImg:`${three}`,
            bigImg:`${three}`,
            title:"秋风萧瑟，层林尽染",
            description:"金秋的阳光温馨恬静，金秋的微风和煦轻柔"
        },
        {
            id:4,
            midImg:`${four}`,
            bigImg:`${four}`,
            title:"银装素裹,千里冰封",
            description:"幽香淡淡影疏疏，雪虐风饕亦自如"
        }
    ]
})