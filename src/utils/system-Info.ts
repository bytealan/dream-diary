import Taro from '@tarojs/taro'

const { statusBarHeight, screenHeight, safeArea } = Taro.getSystemInfoSync()

const bottomLift = screenHeight - safeArea!.bottom
// 获取胶囊信息
const { height, top } = Taro.getMenuButtonBoundingClientRect()
// 计算标题栏高度
const titleBarHeight = (height + (top - statusBarHeight!) * 2)
// 计算导航栏高度
const appHeaderHeight = (statusBarHeight! + titleBarHeight)

export {
  bottomLift,
  titleBarHeight,
  appHeaderHeight,
  statusBarHeight
}