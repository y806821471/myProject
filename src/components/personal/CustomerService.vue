<template>
  <div class="about">
    <van-nav-bar title="客服中心" left-arrow @click-left="routerBack"/>
    <ul class="list">
      <li class="list-item">
        <div><span class="qq">QQ客服：</span> <span>345hhjj5678ddg</span></div>
        <div v-clipboard:copy="services.dbqz" v-clipboard:success="onCopy" v-clipboard:error="onError"><span class="icon">&#xe649;</span></div>
      </li>
      <li class="list-item">
        <div><span class="wx">微信客服：</span> <span>345hhjj5678ddg</span></div>
        <div v-clipboard:copy="services.twitter" v-clipboard:success="onCopy" v-clipboard:error="onError"><span class="icon">&#xe649;</span></div>
      </li>
      <li class="list-item">
        <div><span class="yx">官方邮箱：</span> <span>345hhjj5678ddg</span></div>
        <div v-clipboard:copy="services.website" v-clipboard:success="onCopy" v-clipboard:error="onError"><span class="icon">&#xe649;</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServiceCenter',
  data () {
    return {
      services: [],
    }
  },
  created() {
    this.getServices();
  },
  methods: {
    // 客服列表
    getServices() {
      this.$http.post("/index/aboutus").then((response) => {
        // console.log(response.data.data)
        this.services = response.data.data;
      })
    },
    //复制地址
    onCopy: function (e) {
      this.$toast.message("复制成功");
    },
    onError: function (e) {
      this.$toast.message("复制失败");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{ padding: 0 4%; width: 92%; height: 100%; margin: 10px 4%; background: linear-gradient(90deg,rgba(16,31,63,1) 0%,rgba(14,62,121,1) 100%); border: solid 0.5px #0B4586; border-radius: 5px; font-size: 14px;}

.list-item{ display: flex; padding: 4px 4%; height: 50px; justify-content: space-between;  align-items: center; border-bottom: solid 1px #0C4586; color: #00B1FF;}
.list-item .icon{ font-size: 18px;}
.qq{color:#FDBF06;}
.wx{color:#36EAE2;}
.yx{color:#CCE9FF;}
</style>
