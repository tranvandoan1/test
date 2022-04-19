import { axiosClient } from "./link.js";
const SaveorderAPI = {
    getAll() {
        const url = `/saveoder`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/saveoder/${id}`;
        return axiosClient.get(url);
    },
    addOder(saveoder) {
        const url = `/saveoder`;
        return axiosClient.post(url, saveoder);
    },
    remove(id) {
        const url = `/saveoder/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/saveoder/${id}`;
        return axiosClient.put(url, data);
    },

};
export default SaveorderAPI;