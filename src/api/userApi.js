import axiosClient from "./axiosClient";

const useApi = {
    getAll(params){
        const url = '/user';
        return axiosClient.get(url,{ params : params});
    },
};

export default useApi;