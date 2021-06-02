import ins from "./request";

export async function getMessages(page = 1, limit = 10) {
    return await ins.get("/api/message", {
        params: {
            page,
            limit
        }
    });

}

export async function postMessages(msgInfo) {
    return await ins.post("/api/message", msgInfo);
}