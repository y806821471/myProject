<template>
  <div class="Financial">
    <!-- 头部 -->
    <van-nav-bar title="财务明细" left-arrow @click-left="routerBack">
      <span class="icon" slot="right" @click="showPopup">&#xe639;</span>
    </van-nav-bar>
    <!-- Tab -->
    <van-tabs v-model="active" sticky line-width="40">
      <van-tab title="娱乐币">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="list-item" v-for="item in list" :key="item">
            <div>
              <span>转帐</span>
              <span>-29.09980</span>
            </div>
            <div>
              <span>2019/3/20 11:20</span>
              <span>数量</span>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="娱乐股">
        <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
          <div class="list-item" v-for="item in list2" :key="item">
            <div>
              <span>释放</span>
              <span>-29.09980</span>
            </div>
            <div>
              <span>2019/3/20 11:20</span>
              <span>数量</span>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
    <!-- Popup 弹出层 -->
    <!-- 娱乐币 -->
    <van-popup v-model="show" position="right" >
      <ul>
        <li>转账</li>
        <li>收款</li>
        <li>认筹</li>
        <li>释放</li>
        <li>手续费</li>
        <li>直推收益</li>
        <li>推荐收益</li>
        <li>团队收益</li>
      </ul>
    </van-popup>
    <!-- 娱乐股 -->
    <van-popup v-model="show2" position="right" class="stock">
      <ul>
        <li>释放</li>
        <li>认筹</li>
        <li>直推收益</li>
        <li>推荐收益</li>
        <li>团队收益</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // type: this.$route.query.type,
      active: 0,
      show: false,
      show2:false,
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
    },
    // Popup 弹出层
    showPopup() {
      if(this.active===0){
        console.log("币");
        this.show = true;

      }else{
        console.log("股");
        this.show2 = true;

        
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-list {
  width: 92%;
  margin: 0 4%;
  padding: 0 4%;
  margin-top: 3%;
  background: linear-gradient(
    90deg,
    rgba(16, 31, 63, 1) 0%,
    rgba(14, 62, 121, 1) 100%
  );
  border: solid 0.5px #0b4586;
  border-radius: 5px;
}
.list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 4%;
  line-height: 26px;
  border-bottom: solid 1px #0c4586;
}
.list-item > div {
  display: flex;
  justify-content: space-between;
}
.list-item > div:last-of-type {
  color: #7da3bf;
}
.color1 {
  color: #00b1ff;
}

/* 弹出层 */
.van-popup {
  background: #0e386e;
  box-shadow: 0px 1px 23px 0px rgba(42, 154, 255, 1);
  border-radius: 5px;
  border: 1px solid rgba(0, 134, 255, 1);
  top: 200px;
  right: 4%;
}
.stock{
  top: 140px;
  right: 4%;

}
.van-popup ul {
  width: 140px;
  padding: 0 10%;
}
.van-popup ul li {
  display: flex;
  padding: 10px 4%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #0c4586;
  font-size: 14px;
}
.van-popup ul li span {
  color: #00b1ff;
}
</style>
