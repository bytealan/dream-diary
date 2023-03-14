<template>
  <view>
    <view class="h-64 w-full bg-gradient-to-b from-blue-800 to-blue-600 rounded-3xl flex text-centeroverflow-hidden">
      <view class="flex-1 flex flex-col items-center justify-center">
        <img class="h-20 w-20 rounded-full" src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <view class="text-white text-lg">Alan</view>
        <view class="text-gray-200 text-sm">普通会员</view>
      </view>
    </view>
    <view>
      <nut-cell-group>
        <nut-cell title="个人信息" is-link>
          <template v-slot:icon>
            <Horizontal />
          </template>
        </nut-cell>
        <nut-cell title="系统通知" is-link>
          <template v-slot:icon>
            <Notice />
          </template>
        </nut-cell>
        <nut-cell title="设置" is-link>
          <template v-slot:icon>
            <Setting />
          </template>
        </nut-cell>
        <nut-cell title="退出登录" is-link>
          <template v-slot:icon>
            <Footprint />
          </template>
        </nut-cell>
      </nut-cell-group>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Horizontal, Notice, Setting, Footprint } from '@nutui/icons-vue-taro';
</script>

<style>
</style>
