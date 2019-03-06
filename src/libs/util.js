import Cookies from 'js-cookie'
import config from '@/config'

const { cookieExpires } = config

export const TOKEN_KEY = 'token'
export const USER_CONFIG_KEY = 'USER_CONFIG'
export const CORP_ID_KEY = 'CORP_ID'
export const USER_INFO_KEY = 'USER_INFO'

export const localSave = (key, value) => {
    localStorage.setItem(key, value)
}

export const localRead = (key) => {
    return localStorage.getItem(key) || ''
}

export const localRemove = (key) => {
  return localStorage.removeItem(key)
}

export const getCorpId = () => {
  const cordId = localRead(CORP_ID_KEY)
  if ( cordId ) return cordId
  else return false
}

export const setCorpId = (corpId) => {
  localSave(CORP_ID_KEY, corpId)
}

export const saveUserInfo = (data) => {
  localSave(USER_INFO_KEY, JSON.stringify(data))
}

export const getUserInfo = () => {
  const userInfo = localRead(USER_INFO_KEY)
  if ( userInfo && JSON.parse(userInfo) ) return JSON.parse(userInfo)
  else return false
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {expires: cookieExpires || 1})
}

export const setUserConfig = (data) => {
  localSave(USER_CONFIG_KEY, JSON.stringify(data))
}

export const getUserConfig = () => {
  const userConfig = localRead(USER_CONFIG_KEY)
  if (userConfig && JSON.parse(userConfig)) return JSON.parse(userConfig)
  else return false
}
/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * @description 对象数组按key重新排序
 */
export const sortByKey = (arr, key) => {
  return arr.sort((a, b) => {
    let x = Number(a[key])
    let y = Number(b[key])
    return ((x<y) ? -1 : ((x>y)?1:0))
  })
}
