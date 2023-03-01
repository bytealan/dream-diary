<template>
  <view class="my">
    <view class="user-info">
      <view class="avatar">
        <nut-avatar size="80">
          <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        </nut-avatar>
        <view class="username">Alan</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.my{
  .user-info{
    background: url('../../assets/images/my_bg.png') no-repeat;
    background-size: cover;
    height: 600px;
    border-radius: 30px;
    .avatar{
      text-align: center;
      padding-top: calc(300px - 40px);
      .username{
        margin-top: 10px;
        color: #ffffff;
        font-size: var(--title-size);
      }
    }
  }
}
</style>
