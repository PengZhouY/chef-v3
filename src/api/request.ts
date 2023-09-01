// 基于 axios 封装的请求模块
import ajax, { AxiosRequestConfig } from 'axios'
// 新建一个新的axios实例
const axios = ajax.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method, params, data, headers }: AxiosRequestConfig) => {
  return axios({ url, method, params, data, headers })
}
