<template>
  <div class="NoticeList">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="反馈列表" @click-left="routerBack" />
    <ul class="content">
      <li>
        <div class="content_hd">
          <div class="subject">我已经付款，但是接单一方没有诚信，联系方式不能用</div>
          <div class="time">2018/12/12</div>
        </div>
        <div class="content_bd" >
          <div class="title">回复内容</div>
          <div class="content_text">我已经处理，请您耐心等待</div>
          <div class="time">2018/12/12</div>
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

.time {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  color: #7da3bf;
  margin-bottom: 5px;
}
.subject {
  margin: 14px 0;
  color: #7da3bf;
  font-size: 12px;
}
.content_bd {
  border-top: 1px solid #0c4586;
  padding: 0 17px;
}
.title{
  font-size: 14px;
  color: #00B1FF;
  margin: 15px 0;
  
}
.content_text{
  color: #7da3bf;
}
</style>