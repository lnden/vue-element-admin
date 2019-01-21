import axios from 'axios'

const service = axios.create({
    baseUrl:process.env.BASE_API,
    timeout:3000
})

const tokern = true;

service.interceptors.request.use(config => {
    if(tokern){
         // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['Authorization'] = 'admin'
    }
    return config
},error => {
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    return response
},error => {
    return Promise.reject(error)
})

export default service