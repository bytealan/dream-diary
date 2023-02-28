<template>
  <view class="home">
    <view class="top"></view>
    <view class="welcome">
      <view class="left">
        <view class="user-info">Hi,Wayne!</view>
        <view class="date">{{ nowDate }}</view>
      </view>
      <view class="right">
        <nut-config-provider :theme="theme">
          <nut-switch v-model="themeColor" @change="themeColorSwitchChange" />
        </nut-config-provider>
      </view>
    </view>
    <view class="panel">
      <view class="panel-title">
        <view class="title">最新</view>
        <view class="more">更多</view>
      </view>
      <view class="panel-diary">
        <view class="diary-item">
          <view class="item-left">
            <view class="item-title">
              What a Day!
            </view>
            <view class="item-time">
              20:30 25th Nov 2019
            </view>
          </view>
          <view class="item-right">
            <IconFont name="rect-right"></IconFont>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { IconFont } from '@nutui/icons-vue-taro';
import { useDateFormat, useNow } from '@vueuse/core';
import { appHeaderHeight } from "../../utils/system-Info";
import themeStore from '../../store/themeStore';
import { storeToRefs } from "pinia";
const divAppHeaderHeight = appHeaderHeight + 'px';

const { theme } = storeToRefs(themeStore());
const themeColor = computed({
  get() {
    return theme.value === 'dark';
  },
  set(newVal) {
    theme.value = newVal? 'dark' : 'light';
  }
});
const themeColorSwitchChange = (v: boolean) => {
  theme.value = v ? 'dark' : 'light';
};



const nowDate = ref(useDateFormat(useNow(), "MM月DD日"))
</script>

<style lang="less">
.home{
  .top{
    height: v-bind(divAppHeaderHeight);
  }

  .welcome{
    padding: var(--content-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left{
      .user-info{
        font-size: var(--main-title-size);
        font-weight: bold;
      }
      .date{
        font-size: var(--sub-title-size);
        color: var(--sub-title-color);
      }
    }
  }

  .panel{
    margin-top: 20px;
    padding: var(--content-padding);
    .panel-title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: var(--title-size);
        color: var(--nav-active-text-color);
        border-bottom: 5px solid var(--nav-active-text-color);
      }
      .more{
        font-size: var(--sub-title-size);
        color: var(--sub-title-color);
      }
    }
    .panel-diary{
      padding: 20px 0;
      .diary-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 8px solid var(--nav-active-text-color);
        padding: 0 20px;
        margin: 16px 0;
        .item-left{
          .item-title{
            font-size: var(--title-size);
          }
          .item-time{
            font-size: var(--sub-title-size);
            color: var(--sub-title-color);
          }
        }
        .item-right{
          color: var(--sub-title-color);
        }
      }
    }
  }
}
</style>
