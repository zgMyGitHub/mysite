import ins from './request';

export async function getBanner(){
   return  await ins.get("/api/banner");

    
}

