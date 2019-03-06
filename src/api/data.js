import axios from '@/libs/api.request'

/**
 * @desc 获取楼宇列表
 * @author wwh
 */
export const getBuildingList = () => {
    return axios.request({
      url: '',
      data: {ctrl: 'location', action: 'get_building_list', page: 0, length: 100},
      method: 'post'
    })
}

/**
 * @desc mock测试
 * @author wwh 
 */
export const getReport = (deviceType) => {
    return axios.request({
        url: 'report/getReport',
        data: {device_type: deviceType},
        method: 'post'
    })
}

/**
 * @desc 获取公司所有楼宇权限
 * @author wwh
 */
export const getCompanyBuildingInfo = companyId => {
    return axios.request({
        url: 'location/listLocationByCompanyId',
        data: {company_id: companyId},
        method: 'post'
    })
}

/**
 * @desc 获取楼宇下厕所及设备信息
 * @author wwh
 */
export const getBuildingDevices = buildingId => {
    return axios.request({
        url: 'location/listPitByBuilding',
        data: {building_id: buildingId},
        method: 'post'
    })
}

/**
 * @desc 根据厕所ID获取定位点信息
 * @author wwh
 */
export const getLocationPoint = locationId => {
    return axios.request({
        url: 'location/getInfoByLocationId',
        data: {location_id: locationId},
        method: 'post'
    })
}

/**
 * @desc 获取厕所页面的信息
 * @author wwh
 */
export const getExtInfoByLocationId = locationId => {
    return axios.request({
        url: 'location/getExtInfoByLocationId',
        data: {location_id: locationId},
        method: 'post'
    })
}

/**
 * @desc 钉钉用户登录
 * @author wwh
 */
export const dingTalkLogin = (code, corpId) => {
    return axios.request({
        url: 'dingTalkAuth/login',
        data: {authCode: code, corpId: corpId},
        method: 'post'
    })
}