<template>
  <div class="exchanged">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="修改登陆密码" @click-left="routerBack" />
    <div class="content">
      <van-cell-group>
        <div class="input_title">输入新登陆密码：</div>
        <van-field  />
        <div class="input_title">确认新登陆密码：</div>
        <van-field  />
        <div class="input_title">输入验证码：</div>
        <van-field >
          <van-button slot="button" size="mini" type="primary" >获取验证码</van-button>  
        </van-field>
      </van-cell-group>
      <!-- 按钮 -->
      <div class="confirm">
        <van-button round type="info" size="large">确定</van-button>
      </div>
      <div class="hint">
        <div>友情提示：</div>
        <div>1.请不要设置之前用过的旧密码，否则密码修改不成功。</div>
        <div>2.请不要频繁修改密码，每日最多可修改3次。</div>
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
  padding: 5px 0;
}
.input_title {
  color:#C9E6FC;
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
  margin: 37px 0;
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
.van-button--primary {
    color: #2aa3e9;
    background-color: #151936;
    border: none;
    margin-right: 10px;
}
.hint{
  color:#C9E6FC;
}
</style>