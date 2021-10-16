import axiosClient from "./axiosClient";

const productsApi = {
    getAll(params){
        const url = '/posts?id=1294';
        return axiosClient.get(url,{ params : params});
    },

    get(id){
        const url = `/todos/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url = '/todos';
        return axiosClient.post(url,data);
    },

    update(data){
        const url = `/todos/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id){
        const url = `/todos/${id}`;
        return axiosClient.delete(url);
    },

};

export default productsApi;