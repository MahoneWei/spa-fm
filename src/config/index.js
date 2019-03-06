export default {
  /**
   * @description token在Cookie中存储的天数，默认30天
   */
  cookieExpires: 30,
  // debug标记，用于测试
  debug: false,

  baseUrl: {
    dev: 'http://test.api.com/',
    pro: 'http://pro.api.com/'
  },
}