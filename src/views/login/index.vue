<script setup lang="ts">
import { ref } from 'vue'
import FrostedGlass from './components/FrostedGlass.vue'

let username = ref('')
let password = ref('')
function onSubmit() {
  console.log('submit')
}
</script>

<template>
  <div class="container">
    <FrostedGlass width="86%">
      <div class="logo"><div class="skip">跳过</div></div>
      <div class="title">登录</div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <div class="tip">请输入账号</div>
          <van-field v-model="username" name="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
          <div class="tip">请输入密码</div>
          <van-field
            v-model="password"
            type="password"
            name="密码"
            :rules="[
              {
                required: true,
                message: '请输入正确的6位密码',
                pattern: /^\d{6}$/
              }
            ]" />
          <div class="tip">请输入验证码</div>
          <van-field name="验证码" />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </FrostedGlass>
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('../../assets/images/login-bg.png') center/cover;
  color: @colorLogin;
}
.van-cell-group,
.van-cell {
  background: transparent;
}
.van-field {
  background-color: @colorWhite;
  border-radius: @borderRadiusNormal;
  border: 1px solid @colorLogin;
  opacity: 0.5;
  margin-bottom: 10px;
}
.van-button--default {
  background: @colorLogin;
  font-size: @fontsizeNormal;
  color: @colorWhite;
  font-weight: @fontWeightBold;
}
.van-form {
  padding: @paddingNormal;
}
.frosted-glass {
  position: relative;
  padding-top: 60px;
  animation: bounceIn 0.5s;
}
.logo {
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background: url('@/assets/images/chef.png') center/cover;
  animation: bounceInDown 1s;
  .skip {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: @fontsizeNormal;
  }
}
.title {
  display: flex;
  justify-content: center;
  font-weight: @fontWeightBold;
  font-size: @fontsizeNormal;
}
.tip {
  font-size: @fontsizeSmall;
  margin: 0 0 6px 12px;
}
</style>
