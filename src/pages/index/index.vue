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
        
      </view>
      <view class="panel-diary">

      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDateFormat, useNow } from '@vueuse/core';
import { appHeaderHeight } from "../../utils/system-Info";
const divAppHeaderHeight = appHeaderHeight + 'px';

const themeColor = ref(false);
const theme = ref('');
const themeColorSwitchChange = (v: boolean) => {
  theme.value = v ? 'dark' : '';
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
    .right{
      
    }
  }
}
</style>
