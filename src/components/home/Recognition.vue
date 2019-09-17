<template>
  <div class="recognition">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="认筹" @click-left="routerBack" />

    <div class="num">4966.98098 娱乐币</div>
    <div class="select">请选择认筹</div>
    <ul class="select_box">
      <li class="list_box" :class="{'active':active==0}" @click="selected">
        <div class="top">
          <span>1980</span>
          <span>(娱乐股)</span>
        </div>
        <div class="bottom">支付990 ( 娱乐币 )</div>
      </li>
      <li class="list_box" @click="selected">
        <div class="top">
          <span>1980</span>
          <span>(娱乐股)</span>
        </div>
        <div class="bottom">支付990 ( 娱乐币 )</div>
      </li>
      <li class="list_box" @click="selected">
        <div class="top">
          <span>1980</span>
          <span>(娱乐股)</span>
        </div>
        <div class="bottom">支付990 ( 娱乐币 )</div>
      </li>
      <li class="list_box" @click="selected">
        <div class="top">
          <span>1980</span>
          <span>(娱乐股)</span>
        </div>
        <div class="bottom">支付990 ( 娱乐币 )</div>
      </li>
    </ul>
    <div class="login_but">
      <van-button round type="info" size="large" @click="showPopup">确认</van-button>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '55%' }">
      <div class="title_num">990.00</div>
      <div class="title_text">（ 娱乐币 ）</div>
      <!-- 输入框 -->
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入交易密码 " type="password"/>
      </van-cell-group>
      <div class="hint">提示：1.如遇到问题，请联系客服来解决问</div>
      <div class="login_but pay_but">
      <van-button round type="info" size="large" @click="getPay">确认支付</van-button>
    </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      show: false,
      value:''
    };
  },
  methods: {
    selected() {
      console.log(11);
    },
    // 弹出层
    showPopup() {
      // console.log(2);
      this.show = true;
    },
    // 确认支付
    getPay(){
      this.show = false;
      
    }
  }
};
</script>

<style scoped>
.num {
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  background: linear-gradient(to right, #101b36, #0e3b75);
  border-top: 1px solid #0e3b75;
  border-bottom: 1px solid #0e3b75;
}
.select {
  font-size: 13px;
  margin: 20px 0 5px 20px;
}
.select_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list_box {
  color: #bbd8ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #0e3b75;
  border-radius: 10px;
  height: 60px;
  margin: 10px 12px 10px 16px;
  /* background: url("../../assets/img/rectangle.png") ; */
  /* background-size: 146px 60px; */
  flex: 40%;
}
.active {
  color: #bbd8ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #0e3b75;
  border-radius: 10px;
  height: 60px;
  margin: 10px 12px 10px 16px;
  background: url("../../assets/img/rectangle.png");
  background-size: 100% 100%;
  flex: 40%;
}
.top span:nth-child(1) {
  font-size: 18px;
}
.top span:nth-child(2) {
  font-size: 14px;
}
.bottom {
  font-size: 14px;
}
.login_but {
  margin-top: 30px;
  padding: 0 34px;
}
.van-button--large {
  width: 100%;
  height: 46px;
  line-height: 46px;
  background: linear-gradient(
    180deg,
    rgba(42, 164, 233, 1) 0%,
    rgba(32, 83, 236, 1) 100%
  );
  border-radius: 23px;
}
/* 弹出层 */
.van-popup {
  text-align: center;
  background-color: #151936;
}
.title_num {
  margin-top: 19px;
  font-size: 23px;
  color: #2aa3e9;
}
.title_text {
  font-size: 13px;
  color: #7da3bf;
}
.van-cell-group{
  margin: 10px 20px;
}
.van-cell{
  width: 100%;
  color: #7DA3BF;
  border-radius: 6px;
  padding: 10px 17px;
  background: linear-gradient(to right, #101b36, #0e3b75);
  border: 1px solid #0e3b75;
}
.hint{
  text-align: left;
  color: #7DA3BF;
  margin-left: 29px;
}
.pay_but{
  margin-bottom: 50px;
}
</style>