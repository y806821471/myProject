<template>
  <div>
    <van-nav-bar title="我的团队" left-arrow @click-left="routerBack" />
    <div class="top">
      <img src="../../assets/img/rectangle2.png" alt />
      <div class="info">
        <div>
          <span class="left">直推人数：</span>
          <span class="right">0</span>
        </div>
        <div>
          <span class="left">团队人数：</span>
          <span class="right">0</span>
        </div>
      </div>
    </div>
    <van-tabs v-model="active" sticky line-width="40">
      <van-tab title="一级会员">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="list-item">
            <div>账号</div>
            <div>级别</div>
            <div>时间</div>
          </div>
          <div class="list-item" v-for="(item,index) in list" :class="{on:index%2==0}" :key="index">
            <div>17898986545</div>
            <div>一级会员</div>
            <div>2019/12/12</div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="二级会员">
        <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
          <div class="list-item">
            <div>账号</div>
            <div>级别</div>
            <div>时间</div>
          </div>
          <div class="list-item" v-for="(item,index) in list2" :class="{on:index%2==0}" :key="index">
            <div>17898986545</div>
            <div>二级会员</div>
            <div>2019/12/12</div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      list2: [],
      loading2: false,
      finished2: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        console.log(111);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onLoad2() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list2.push(this.list2.length + 1);
        }
        console.log(222);
        // 加载状态结束
        this.loading2 = false;
        // 数据全部加载完成
        if (this.list2.length >= 40) {
          this.finished2 = true;
        }
      }, 500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  position: relative;
  padding: 0 4%;
  margin-bottom: 10px;
}
.top img {
  width: 100%;
  height: 112px;
}
.top .info {
  position: absolute;
  top: 0;
  left: 20%;
  padding: 26px 20%;
  line-height: 30px;
  font-size: 14px;
}
.left{
  color: #7DA3BF;
}
.right{
  color: #00B1FF;
}
.list-item {
  display: flex;
  color: #7da3bf;
  padding: 8px 4%;
  line-height: 26px;
  /* border-bottom: solid 1px #0c4586; */
  justify-content: space-between;
}
.list-item > div {
  width: 33%;
  text-align: center;
}
.on{
  background: linear-gradient(to right, #101b36, #0e3b75);
  
}
</style>
