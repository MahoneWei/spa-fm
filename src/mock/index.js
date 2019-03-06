import Mock from 'mockjs'
import {} from './data'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 100
})

// Mock.mock(/\/report\/getReport/, getReport)


export default Mock
