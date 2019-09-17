<template>
  <div class="NoticeList">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="公告" @click-left="routerBack" />
    <ul class="content">
      <li>
        <div class="content_hd">
          <div class="title">最新公告</div>
          <div class="subject">5G的到来，速度上ok了，那么你可以想象VR会发展成什么样</div>
          <div class="time">2018/12/12</div>
        </div>
        <div class="content_bd" @click="details">
          <div>查看详情</div>
          <div class="icon">&#xe695;</div>
        </div>
      </li>
      <li>
        <div class="content_hd">
          <div class="title">最新公告</div>
          <div class="subject">5G的到来，速度上ok了，那么你可以想象VR会发展成什么样</div>
          <div class="time">2018/12/12</div>
        </div>
        <div class="content_bd" @click="details">
          <div>查看详情</div>
          <div class="icon">&#xe695;</div>
        </div>
      </li>
      <li>
        <div class="content_hd">
          <div class="title">最新公告</div>
          <div class="subject">5G的到来，速度上ok了，那么你可以想象VR会发展成什么样</div>
          <div class="time">2018/12/12</div>
        </div>
        <div class="content_bd" @click="details">
          <div>查看详情</div>
          <div class="icon">&#xe695;</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 跳转到公告详情
    details() {
      this.$router.push("/NoticeDetail");
    },
    // 头部左侧返回
    routerBack(){
      this.$router.push("/Personal");

    }
  }
};
</script>

<style scoped>
.content {
  margin: 15px;
}
.content li {
  border: 1px solid #0e3b75;
  border-radius: 8px;
  background: linear-gradient(to right, #101b36, #0e3b75);
  margin-bottom: 14px;
}
.content_hd {
  padding: 0 14px;
}
.title {
  margin-top: 20px;
  font-size: 15px;
}
.time {
  display: flex;
  justify-content: flex-end;
  color: #7da3bf;
  margin-bottom: 5px;
}
.subject {
  margin: 14px 0;
  color: #7da3bf;
  font-size: 13px;
}
.content_bd {
  border-top: 1px solid #0c4586;
  height: 50px;
  line-height: 50px;
  padding: 0 14px;
  color: #00b1ff;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
</style>