<template>
  <div class="feedback">
    <van-nav-bar title="问题反馈" left-arrow @click-left="routerBack" right-text="反馈列表"  @click-right="onClickRight"/>
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-model="message"
        type="textarea"
        placeholder="请输入反馈内容"
        rows="1"
        :maxlength="100"
        :autosize="{minHeight:120 }"
      />
      <span class="num">{{ this.message.length }}/100</span>
    </van-cell-group>
    <!-- 添加图片 -->
    <van-uploader v-model="fileList" multiple />
    <div class="uploader_text">添加图片</div>
    <div class="uploader_but">
      <van-button round type="info" size="large" >反馈</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      fileList:[],
      introMaxLength: 100
    };
  },
  methods:{
    onClickRight(){
      this.$router.push('/FeedbackList')
    }
  },
  // 反馈字数限制
  watch: {
    intro() {
      if (this.message.length > this.introMaxLength) {
        this.message = String(this.message).slice(0, this.introMaxLength);
      }
    }
  },
};
</script>

<style scoped>
.van-nav-bar__text {
  color: #cce9ff;
}
.van-nav-bar__text:active {
  background-color: transparent;
}
.van-cell-group {
  position: relative;
  margin: 15px;
}
.num{
  position: absolute;
  bottom :10px;
  right: 17px;
  color:#A6C3DE;
}
.van-cell {
  background: linear-gradient(to right, #101b36, #0e3b75);
  border: 1px solid #0e3b75;
  border-radius: 8px;
  padding: 18px 24px;
}
.van-uploader{
  margin: 5px 27px;

}
.uploader_text{
  font-size: 14px;
  color:#CCE9FF;
  margin: 0 35px;
}
.uploader_but{
  margin: 100px 33px;
}
/* 登陆按钮 */
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
</style>