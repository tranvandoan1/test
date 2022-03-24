import { axiosClient } from "./link.js";
const TableAPI = {
    getAll() {
        const url = `/table`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/table/${id}`;
        return axiosClient.get(url);
    },
    addOder(table) {
        const url = `/table`;
        return axiosClient.post(url, table);
    },
    remove(id) {
        const url = `/table/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/table/${id}`;
        return axiosClient.put(url, data);
    },

};
export default TableAPI;