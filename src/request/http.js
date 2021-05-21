import Vue from 'vue';
import Axios from 'axios';
import { Toast } from 'vant';

Vue.use(Toast);

Axios.defaults.timeout = 120000;
Axios.defaults.headers = { 'Content-Type': 'application/json;charset=UTF-8' };

const tip = (msg) => {
    Toast({
        message: msg,
        duration: 1500,
        forbidClick: true,
    });
};

// 添加请求拦截器
Axios.interceptors.request.use(
    // 在发送请求之前做些什么
    (config) => config,
    // 对请求错误做些什么
    (error) => Promise.reject(error),
);

// 添加响应拦截器
Axios.interceptors.request.use(
    // 对响应数据做点什么
    (response) => response,
    // 对响应错误做点什么
    (error) => {
        if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1) {
            tip('请求超时');
        }
        return Promise.reject(new Error({}));
    },
);

export function GET(url) {
    return new Promise((resolve, reject) => {
        Axios.get(url)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function POST(url, param = '') {
    return new Promise((resolve, reject) => {
        Axios.post(url, JSON.stringify(param))
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
