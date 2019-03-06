import axios from 'axios'
import qs from 'qs'
import router from '@/router'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      if ( data && (data.code == '2004' || data.code == '2006') ) {
        // token错误时通知主frame
        // router.push({ replace: true, name: 'error_401' })
      }
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      // addErrorLog(errorInfo)
      // TODO: 临时检查接口是否报错
      alert(`接口返回出错：${JSON.stringify(errorInfo)}`)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    if ( options.method === 'post' ) {
      // Object.assign(options.data, {token: store.state.user.token})
      options.data = qs.stringify(options.data)
    }
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
