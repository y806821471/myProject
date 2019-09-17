<template>
  <div class="exchanged">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="互转" @click-left="routerBack" />
    <div class="content">
      <van-cell-group>
        <div class="input_title">手机号码：</div>
        <van-field v-model="value" placeholder="请输入对方手机号码" />
        <div class="input_title">转帐数量：</div>
        <van-field v-model="value" placeholder="请输入转帐数量" />
        <div class="usable">可用4966.98098 娱乐币</div>
        <div class="input_title">交易密码：</div>
        <van-field v-model="value" type="password" placeholder="请输入交易密码" />
      </van-cell-group>
      <div class="charge">
        <span>手续费：</span>
        <span>0.00 娱乐币</span>
      </div>
      <!-- 按钮 -->
      <div class="confirm">
        <van-button round type="info" size="large">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.content {
  padding: 0 24px;
}
/* 输入框 */
.van-cell {
  padding: 10px 0;
}
.input_title {
  font-size: 14px;
  margin-top: 20px;
}
.van-cell::after {
  border-bottom: 1px solid #0c4586 !important;
}
.usable {
  margin-top: 6px;
  color: #00b1ff;
}
.charge{
  font-size: 14px;
  margin-top: 17px;
  display: flex;
  justify-content:space-between; 
}
.confirm{
  margin: 65px 0;
}
.confirm .van-button{
  height: 40px;
  line-height: 38px;
  background: linear-gradient(
    180deg,
    rgba(42, 164, 233, 1) 0%,
    rgba(32, 83, 236, 1) 100%
  );
  border-radius: 23px;
}
</style>