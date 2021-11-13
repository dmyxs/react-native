import axios, { AxiosInstance } from 'axios';
import { ToastAndroid } from 'react-native';

type Cancel = Function | null;

enum msgEnum {
  SUCCESS = '请求成功',
  BAD_REQUEST = '请求失败，请查看正确路径',
  UNAUTHORIZED = '未授权，请登录',
  FORBIDDEN = '没有权限，请联系管理员',
  NOT_FOUND = '请求失败，没有找到该数据',
  SERVER_ERROR = '服务器繁忙，请稍后重试',
  TIMEOUT = '请求超时，请查看网络后重试',
  TOKEN_FAILURE = '登录过期，请重新登录',
  UNKNOWN_ERROR = '未知错误',
}

const service: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:9093/api/v1/',
  timeout: 1000 * 5,
  // withCredentials: true, //为true时，后端必须设置防跨域
});

let cancel: Cancel;
service.interceptors.request.use(
  config => {
    if (typeof cancel === 'function') {
      cancel('取消请求');
    }
    config.cancelToken = new axios.CancelToken(c => {
      cancel = c;
    });

    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers!.Authorization = `Bearer ${token}`;
    // }

    // console.log('axios请求拦截器');

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject('请求拦截捕获到错误');
  },
);

service.interceptors.response.use(
  res => {
    // token失效
    // if (res.data && res.data.code === 10010) {}

    console.log('axios响应拦截器数据：', res);
    // 正常响应数据
    if (res.status === 200) {
      showMessage(msgEnum.SUCCESS);
      cancel = null;
      return Promise.resolve(res.data);
      // return res.data.data;
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('请求取消', error.message);
      // eslint-disable-next-line prettier/prettier
      return new Promise(() => { }); //中断Promise链接
    } else if (error && error.response) {
      console.log('error', error);
      cancel = null;
      switch (error.response.status) {
        case 400:
          showMessage(msgEnum.BAD_REQUEST);
          return Promise.reject(msgEnum.BAD_REQUEST);
        case 401:
          showMessage(msgEnum.UNAUTHORIZED);
          break;
        case 403:
          showMessage(msgEnum.FORBIDDEN);
          return Promise.reject(msgEnum.FORBIDDEN);
        case 404:
          showMessage(msgEnum.NOT_FOUND);
          return Promise.reject(msgEnum.NOT_FOUND);
        case 500:
          showMessage(msgEnum.SERVER_ERROR);
          return Promise.reject(msgEnum.SERVER_ERROR);
        default:
          showMessage(msgEnum.UNKNOWN_ERROR);
      }
    } else {
      showMessage(msgEnum.TIMEOUT);
      cancel = null;
    }
  },
);

const showMessage = (message: string) => {
  ToastAndroid.showWithGravity(message, 0, ToastAndroid.TOP);
};

export default service;
