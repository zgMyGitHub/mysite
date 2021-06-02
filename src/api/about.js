import ins from "./request";

export async function getAbout(){
    return await ins.get("/api/about")
}