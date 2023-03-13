<template>
  <view class="home flex flex-col h-screen overflow-hidden">
    <view class="welcome px-5 py-1 flex justify-between items-center">
      <view>
        <view class="text-xl font-bold">Hi,Alan!</view>
        <view class="text-sm text-gray-400">{{ nowDate }}</view>
      </view>
      <view>
        <nut-button plain size="small" type="info">
          <template #icon>
            <Plus />
          </template>
        </nut-button>
      </view>
    </view>
    <view class="py-3">
      <view class="flex whitespace-nowrap">
        <view class="w-full h-24 mx-2 text-center rounded-xl text-gray-400 flex flex-col justify-evenly" v-for="item in daysList" :class="{'bg-blue-600 text-white':item.id===activeDay}" @tap="handleDayClick(item.id)">
          <view class="text-xs">{{ item.week }}</view>
          <view>{{ item.time }}</view>
        </view>
      </view>
    </view>
    <view class="mt-2 px-5 py-1">
      <view class="flex justify-between items-center">
        <view class="text-base text-blue-600 border-solid border-0 border-b-4 border-blue-600">最新</view>
        <view class="text-sm text-gray-400">更多</view>
      </view>
    </view>
    <view class="flex-1 h-0">
      <scroll-view class="px-5 py-1 h-full w-auto" :scroll-y="true">
        <view class="flex items-center justify-between border-solid border-0 border-l-4 border-blue-600 my-3 px-3" v-for="item in 20">
          <view>
            <view class="text-base">
              What a Day! {{ item }}
            </view>
            <view class="text-xs text-gray-400">
              20:30 25th Nov 2019
            </view>
          </view>
          <view class="text-gray-400">
            <IconFont name="rect-right"></IconFont>
          </view>
        </view>
        <view class="safe-block"></view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { IconFont } from '@nutui/icons-vue-taro';
import { useDateFormat, useNow } from '@vueuse/core';
import { appHeaderHeight } from "../../utils/system-Info";
import { Plus } from '@nutui/icons-vue-taro';

const divAppHeaderHeight = appHeaderHeight + 'px';

const nowDate = ref(useDateFormat(useNow(), "MM月DD日"));

const now = new Date();
type day = {
  id: number,
  time:string,
  week:string
};
const daysList = reactive<day[]>([]);
for (let i = 0; i < 7; i++) {
  daysList.push({
    id: i,
    time: useDateFormat(now,"DD").value,
    week: useDateFormat(now,"dd").value
  });
  now.setDate(now.getDate()-1);
};
daysList.reverse()
const activeDay = ref(0);
const handleDayClick = (id: number) => {
  activeDay.value = id;
}
</script>

<style lang="less">
.home{
  .welcome{
    margin-top: v-bind(divAppHeaderHeight);
  }
}
</style>
