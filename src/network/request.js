import Axios from 'axios'

export function requests(option) {
    // 创建 Axios 实例
    const axiosInstance = Axios.create({
        baseURL: 'http://123.207.32.32:8000'
    })

    // 请求拦截
    axiosInstance.interceptors.request.use(config => {
        return config;
    }, err => {
        return err;
    })

    // 响应拦截  
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, err => {
        return err;
    })


    return axiosInstance(option)
}