<template>
  <!-- 导航 -->
  <view class="tab-bar w-3_4">
    <view class="tab-bar-item" v-for="(item, index) in tabList" :key="index"  @tap="handleNavigation(index)">
      <view class="tab-bar-item-content" :class="{ 'tab-bar-item-acitive': activeIndex === index }">
        <IconFont :name="item.icon"/>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive } from "vue"
import { IconFont } from '@nutui/icons-vue-taro';
import { storeToRefs } from "pinia";
import Taro from '@tarojs/taro'
import tabBarStore from '../store/tabBarStore';
export default {
  components:{
    IconFont
  },
  options: {
    addGlobalClass: true,
  },
  setup() {
    const { activeIndex } = storeToRefs(tabBarStore());
    type menu = {
        title: string,
        pagePath: string,
        icon: string
    }
    // 导航栏处理逻辑
    const tabList = reactive<menu[]>([
      {
        title: '首页',
        pagePath: '/pages/index/index',
        icon: 'home'
      },
      {
        title: '我的',
        pagePath: '/pages/my/index',
        icon: 'my'
      }
    ])
    const handleNavigation = (index: number) => {
      activeIndex.value = index
      Taro.switchTab({
        url: tabList[index].pagePath
      })
    }
    return {
      activeIndex,
      tabList,
      handleNavigation
    };
  }
}
</script>

<style lang="less">
.tab-bar {
  --nav-back-ground: #ffffff;
  --nav-active-color: #ecf2fe;
  --nav-active-text-color: #0052d9;
}
@media (prefers-color-scheme: dark) {
  /* DarkMode 下的样式 start */
  .tab-bar{
    --nav-back-ground: #1f1f1f;
    --nav-active-color: #687388;
    --nav-active-text-color: #ffffff;
  }
  /* DarkMode 下的样式 end */
}
.tab-bar {
  width: 80%;
  height: 140px;
  border-radius: 9999px;
  z-index: 2023;
  position: fixed;
  left: 0;
  background-color: var(--nav-back-ground);
  margin: 0 auto;
  right: 0;
  bottom: 0;
  justify-content: space-around;
  text-align: center;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0px 6px 30px 5px rgb(0 0 0 / 5%), 0px 16px 24px 2px rgb(0 0 0 / 4%), 0px 8px 10px -5px rgb(0 0 0 / 8%);
  margin-bottom: env(safe-area-inset-bottom);

  &-item {
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    padding: 20px 20px;

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 9999px;
      text-align: center;
      height: 100%;
      width: 100%;
      line-height: 140px;
    }
  }

  &-item-acitive {
    background-color: var(--nav-active-color);
    color: var(--nav-active-text-color);
  }
}
</style>
