<template>
  <div class="address">
    <van-nav-bar title="安全中心" left-arrow @click-left="routerBack" />
    <ul class="list">
      <router-link tag="li" to="/SafetyPassword" class="list-item">
        <div class="icon icon_lock">&#xe625;</div>
        <div class="left">
          <div>登陆密码修改</div>
        </div>
        <div class="right">
          <div class="icon">&#xe695;</div>

        </div>
      </router-link>
      <router-link tag="li" to="/SafetyPassword" class="list-item">
        <div class="icon icon_lock">&#xe625;</div>
        <div class="left">
          <div>交易密码修改</div>
        </div>
        <div class="right">
          <div class="icon">&#xe695;</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    };
  },
  created() {
    // this.getServices();
  },
  methods: {
    // 列表
    getServices() {
      this.$http.post("/index/aboutus").then(response => {
        // console.log(response.data.data)
        this.services = response.data.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  width: 92%;
  margin: 10px 4%;
  padding: 0 4%;
  background: linear-gradient(
    90deg,
    rgba(16, 31, 63, 1) 0%,
    rgba(14, 62, 121, 1) 100%
  );
  border: solid 0.5px #0b4586;
  border-radius: 8px;
}
.list li {
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px 0;
  border-bottom: solid 1px #0c4586;
  border-bottom: solid 1px #0c4586;
}
 .icon_lock{
  color :#2053EC;
  font-size: 16px;
}
.list .left {
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  position: relative;
  text-indent: 12px;
}
.list .left .icon {
  font-size: 20px;
  margin-right: 10px;
}
.list li:last-of-type {
  border: 0;
}
.list .right {
  color: #00b1ff;
  font-size: 16px;
}
.right{
  position: absolute;
  right: 0;
}
</style>
