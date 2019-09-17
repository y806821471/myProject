<template>
  <div class="sharing">
    <!-- 头部 -->
    <van-nav-bar left-arrow title="我的邀请码" @click-left="routerBack" />
    <!-- 我的邀请码 -->
    <div class="invite">我的邀请码</div>
    <div class="invite_num">18723546777</div>
    <!-- 复制按钮 -->
    <div class="copy_but">
      <van-button round type="info">点击复制</van-button>
    </div>
    <!-- 二维码 -->
    <van-image width="167" height="168"  fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <div class="scan">扫描下载注册</div>
    <div class="copy_link">
      <van-button round type="info">复制邀请链接</van-button>
    </div>
    <div class="save_but">
      <van-button round type="info">保存图片</van-button>
    </div>
    <div class="bottom_text">-5G众创娱乐新时代-</div>
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
.sharing {
  text-align: center;
}
.invite {
  width: 100%;
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
}
.invite_num {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 10px 0 15px 0;
}
.copy_but {
  width: 100%;
  height: 40px;
  text-align: center;
}
.copy_but .van-button {
  width: 114px;
  height: 40px;
  line-height: 38px;
  border-radius: 24px;
  color: #00b1ff;
  background-color: #151936;
  border: 1px solid #00b1ff;
}
.van-image {
  margin: 22px 0 12px 0 ;
}
.scan{
  font-size: 14px;
  margin-bottom: 35px;
}
.copy_link .van-button{
   width: 167px;
  height: 40px;
  line-height: 38px;
  border-radius: 24px;
}
.save_but .van-button{
  width: 167px;
  height: 40px;
  line-height: 38px;
  border-radius: 24px;
  color: #00b1ff;
  background-color: #151936;
  border: 1px solid #00b1ff;
  margin: 18px 0 24px 0;
}
.bottom_text{
  font-size: 13px;
  margin-bottom: 50px;
}
</style>