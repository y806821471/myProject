<template>
  <div class="notice">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="公告" @click-left="routerBack" />
    <div class="content">
      <h2>最新公告</h2>
      <div class="time">2018/12/12</div>
      <div class="subject">
        5G的到来，速度上ok了，那么你可以想象VR会发展成什么样，VR设备会更小更轻便，VR设备会可以连接移动互联网，你所有的游戏，所有的应用都存储在云端，你随时调用。<br> AR是在现实的背景下实现一些虚拟的东西，其实它的应用范围应该更广，在手机APP内，通过手机屏幕，结合现实背景构建一个虚拟物体并不是什么难事，难的是用户与虚拟物体...
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
  margin: 15px;
  text-align: center;
  border:1px solid #0e3b75;
  border-radius: 8px;
  height: 100%;
  background: linear-gradient(to right, #101b36, #0e3b75);
}
.time{
  color:#7DA3BF;
}
.subject{
  padding: 15px;
  color: #7DA3BF;
  font-size: 13px;
  text-align: left;
}
</style>