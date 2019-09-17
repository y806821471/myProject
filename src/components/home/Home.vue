<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" indicator-color="white" :height="150">
      <van-swipe-item >
        <img src="../../assets/img/swipe.png" alt />
      </van-swipe-item>
      <van-swipe-item >
        <img src="../../assets/img/swipe.png" alt />
      </van-swipe-item>
      <van-swipe-item >
        <img src="../../assets/img/swipe.png" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 公告 -->
    <div class="notice">
      <div class="icon_left">
        <span class="icon">&#xe6cf;</span>
        <span>公告</span>
      </div>
      <van-notice-bar text=" STY2019年上线新矿机了请关注福利多 Copy __ STY2019年上线新矿机了请关注福利多 Copy" mode="link" color="#CCE9FF"  @click="click_Notice"/>
    </div>
    <!-- 中间导航 -->
    <div class="nav">
      <van-grid :border="false" :column-num="3"  >
        <van-grid-item to="/Recognition">
          <img src="../../assets/img/contreNav.png" alt="">
          <div>认筹</div>
        </van-grid-item>
        <van-grid-item to="/Exchanged">
          <img src="../../assets/img/contreNav2.png" alt="">
           <div>互转</div>
        </van-grid-item>
        <van-grid-item to="/Sharing">
          <img src="../../assets/img/contreNav3.png" alt="">
          <div>分享</div>
        </van-grid-item>
        
      </van-grid>
    </div>
    <!-- 最新资讯 -->
    <div class="message">
      <div class="message_hd">
        <span><b>5G</b> / 最新资讯</span>
      </div>
      <div class="message_bd">
        <span>5G发展趋势</span>
        <div>
          5G的到来，速度上ok了，那么你可以想象VR会发展成什么样，VR设备会更小更轻便，VR设备会可以连接移动互联网，你所有的游戏，所有的应用都存储在云端，你随时调用。 <br>
          AR是在现实的背景下实现一些虚拟的东西，其实它的应用范围应该更广，在手机APP内，通过手机屏幕，结合现实背景构建一个虚拟物体并不是什么难事，难的是用户与虚拟物体
        </div>
        <div class="message_shar">
          <span>2019/09/12</span>
          <span class="icon" @click="showPopup">&#xe607;</span>
        </div>
        <div class="bottom_border"></div>
      </div>
      <!-- 弹出层 -->
      <van-popup v-model="show" position="bottom" :style="{ height: '85%' }">
        <div class="popup_title">
          <img src="../../assets/img/log.png" alt="">
          <span>众创娱乐·资讯</span>
          <div class="icon shut" @click="shutX">&#xe732;</div> 
        </div>
        <div class="popup_bottom">
          <div class="popup_bottom_hd">
            <div class="title">5G发展趋势</div>
            <div class="subject">5G的到来，速度上ok了，那么你可以想象VR会发展成什么样，VR设备会更小更轻便，VR设备会可以连接移动互联网，你所有的游戏，所有的应用都存储在云端，你随时调用。<br> AR是在现实的背景下实现一些虚拟的东西，其实它的应用范围应该更广，在手机APP内，通过手机屏幕，结合现实背景构建一个虚拟物体并不是什么难事，难的是用户与虚拟物体 围应该更广，在手机APP内，通过手机屏幕，结合现实背景构建一个虚拟物体并不是什么难事。</div>
            <div class="time">2018/12/12</div>
          </div>
          <div class="popup_bottom_bd">
            <div class="left">
              <p>众创娱乐·资讯</p>
              <p>长按识别右边二维码，即可下载APP</p>
            </div>
            <div class="right"><img src="../../assets/img/code.png" alt=""></div>
          </div>
          <div class="share_but">
            <van-button round type="info" size="large">一键分享</van-button>
          </div>
        </div>
        
    </van-popup>
    </div>
    <!-- 底部导航 -->
    <app-bar></app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
    };
  },
  methods:{
    click_Notice(){
      this.$router.push("/NoticeList")
    },
    showPopup(){
      this.show = true;
    },
    shutX(){
      this.show = false;
      
    }
  }
};
</script>

<style scoped>
.van-swipe__track img {
  width: 100%;
  height: 100%;
}
.notice {
  display: flex;
  justify-content: space-between;
  height: 44px;
  margin: 10px 0;
  background: linear-gradient(to right, #101b36, #0e3b75);
}
.icon_left {
  display: flex;
  justify-content: center;
  width: 55px;
  height: 24px;
  color: #2aa3e9;
  line-height: 24px;
  margin: 10px 0 0 10px;
  padding-right: 5px;
  border-right: 1px solid #0c4586;
}
.icon_left .icon {
  display: block;
  line-height: 26px;
  font-size: 20px;
  margin-right: 3px;
}
.van-notice-bar {
  flex: 1;
  padding: 0 10px;
  font-size: 13px;
  height: 44px;
  background-color: transparent;
}
.van-notice-bar__content {
  font-size: 13px;
}
/* 中间导航 */
.nav {
  height: 100px;
  background: linear-gradient(to right, #101b36, #0e3b75);
}

.van-grid-item__content img {
  width: 43px;
  height: 43px;
}
.van-grid-item__content div{
  margin-top: 9px;
  font-size: 13px;
}
/* 最新资讯 */
.message {
  height: 100%;
  margin-top: 10px;
  padding: 0 16px 85px 16px;
  background: linear-gradient(to right, #101b36, #0e3b75);
}
.message_hd{
  width: 120px;
  height: 33px;
  line-height: 33px;
  background: url('../../assets/img/bgu1.png') 55% 75%;
}
.message_hd span {
  font-size: 12px;
  color: #fff;
  margin-left: 9px;
}
.message_hd span b{
  font-size:15px;
}
.message_bd span{
  display: block;
  height: 25px;
  font-size: 15px;
  margin-top: 15px;
  font-weight: bold;
}
.message_bd div {
  font-size: 13px;
  color: #7DA3BF;
  line-height: 20px;
}
.message_shar{
  display: flex;
  justify-content: space-between;
  height: 25px;
  margin-top: 10px;
}
.message_shar span{
  line-height: 25px;
  font-size: 13px;
  color: #7DA3BF;
  font-weight: 400;   
  margin: 0 !important;
}
.message_shar .icon{
  font-size: 18px;
  color: #00AEFC;
}
.bottom_border{
  /* width: 100%; */
  height: 20px;
  border-bottom: 1px solid #0C4586;
}

/* 弹出层 */
.van-popup{
  background-color: #151936;

}
/* 顶部 */
.popup_title{
  position: relative;
  display: flex;
  justify-content: center;
  height: 80px;
  line-height: 80px;
  background-color: #121415;
}
.popup_title img{
  margin: 23px 5px 0 0;
  width: 35px;
  height: 35px;
}
.popup_title span {
  font-size: 18px;
}
.shut{
  position: absolute;
  top:-12px;
  right: 15px;
  font-size: 20px;
}
/* bottom */
.popup_bottom{
  height: 100%;
}
.popup_bottom_hd{
  margin: 15px;
  border-bottom:1px solid #0C4586;
}
.popup_bottom_hd .title{
  font-size: 15px;
  margin-top: 20px;
}
.popup_bottom_hd .subject{
  font-size:13px;
  line-height: 20px;
  color: #7DA3BF;
  margin: 7px 0;
}
.popup_bottom_hd .time{
  font-size:13px;
  color: #7DA3BF;
  margin-bottom:10px;
}
.popup_bottom_bd{
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
.left p:nth-child(1){
  font-size: 15px;
}
.left p:nth-child(2){
  font-size: 13px;
  color:#7DA3BF;
  margin-top: 5px;
}
.right{
  width: 68px;
  height: 68px;
}
.right img{
  width: 100%;
  height: 100%;
}
.van-button--large{
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
.share_but{
  margin: 0 30px;
}
</style>