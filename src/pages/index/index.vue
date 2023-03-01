<template>
  <view class="home">
    <view class="welcome">
      <view class="left">
        <view class="user-info">Hi,Alan!</view>
        <view class="date">{{ nowDate }}</view>
      </view>
      <view class="right">
        <nut-button plain size="small" type="info">
          <template #icon>
            <Plus />
          </template>
        </nut-button>
      </view>
    </view>
    <view class="swiper-time">
      <view class="scroll-view">
        <view class="scroll-view-item" v-for="item in daysList" :class="{'item-active':item.id===activeDay}" @tap="handleDayClick(item.id)">
          <view class="item-top">{{ item.week }}</view>
          <view class="item-bottom">{{ item.time }}</view>
        </view>
      </view>
    </view>
    <view class="panel">
      <view class="panel-title">
        <view class="title">最新</view>
        <view class="more">更多</view>
      </view>
    </view>
    <view class="panel-diary">
      <scroll-view class="diary-scroll" :scroll-y="true">
        <view class="diary-item" v-for="item in 20">
          <view class="item-left">
            <view class="item-title">
              What a Day! {{ item }}
            </view>
            <view class="item-time">
              20:30 25th Nov 2019
            </view>
          </view>
          <view class="item-right">
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

const theme = ref('dark');

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
  display: flex;
  flex-direction:column;
  height:100vh;
  overflow:hidden;

  .welcome{
    margin-top: v-bind(divAppHeaderHeight);
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

  .swiper-time{
    padding: 20px 0;
    .scroll-view{
      white-space: nowrap;
      display: flex;
      .scroll-view-item{
        display: inline-block;
        width: 100%;
        height: 180px;
        margin: 0 10px;
        text-align: center;
        border-radius: 20px;
        color: var(--sub-title-color);
        .item-top{
          height: 90px;
          line-height: 90px;
          font-size: var(--sub-title-size);
        }
        .item-bottom{
          height: 90px;
        }
      }
      .item-active{
        background-color: var(--nav-active-text-color);
        color: #ffffff;
      }
    }
  }

  .panel{
    margin-top: 10px;
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
  }
  .panel-diary{
    flex: 1;
    height: 1px;
    .diary-scroll{
      padding: var(--content-padding);
      height: 100%;
      .diary-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 8px solid var(--nav-active-text-color);
        padding: 0 20px;
        margin: 30px 0;
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
      .safe-block{
        height: calc(env(safe-area-inset-bottom) + 150px);
      }
    }
  }
}
</style>
