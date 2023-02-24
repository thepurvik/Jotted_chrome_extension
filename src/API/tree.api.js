import axios from 'axios'

export class TREE_API {
    async getAllTree() {
        return await axios.get("https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/tree").then(res => {
            return res.data
        }).catch((error) => {
            console.error("ERROR:", error);
            return []
        })

    };
    async setTopicAttachment(payload) {
        return await axios.post("https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/node_attatchments", payload).then(res => {
            return res.data
        }).catch((error) => {
            console.error("ERROR:", error);
            return []
        })

    }
}