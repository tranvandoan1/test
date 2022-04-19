import { axiosClient } from "./link.js";
const OrderAPI = {
    getAll() {
        const url = `/oders`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/oders/${id}`;
        return axiosClient.get(url);
    },
    add(oders) {
        const url = `/oders`;
        return axiosClient.post(url, oders);
    },
    remove(id) {
        const url = `/oders/${id}`;
        return axiosClient.delete(url);
    },

};
export default OrderAPI;