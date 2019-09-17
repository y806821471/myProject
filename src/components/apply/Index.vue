<template>
  <div class="manage">
    <van-nav-bar title="应用"/>
    <div class="banner"><img src="../../assets/img/ecology.png" alt=""></div>
    <ul class="list">
       <li @click="$toast('暂未开放')">
        <div class="left">
          <img src="../../assets/img/natural01.png" alt>
          <div class="text"><span>5G众创娱乐</span><br>5G价值体系</div>
        </div>
        <div class="right"><van-icon name="arrow"/></div>
      </li>
      <li @click="$toast('暂未开放')">
        <div class="left">
          <img src="../../assets/img/natural02.png" alt>
          <div class="text"><span>数字资产管理</span><br>基于智能合约的数字资产管理</div>
        </div>
        <div class="right"><van-icon name="arrow"/></div>
      </li>
      <li @click="$toast('暂未开放')">
        <div class="left">
          <img src="../../assets/img/natural03.png" alt>
          <div class="text"><span>消费应用</span><br>消费应用</div>
        </div>
        <div class="right"><van-icon name="arrow"/></div>
      </li>
    </ul>
    <app-bar></app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-nav-bar__title{ font-size: 19px; color: #00B1FF;}
.banner{ margin: 0 4%;}
.banner img{ width: 100%;}

.list { width: 100%; margin: 16px 0 100px 0; padding: 0 4%; background: linear-gradient(90deg,rgba(16,31,63,1) 0%,rgba(14,62,121,1) 100%); border: solid 0.5px #0B4586; border-radius: 5px;}
.list li{ display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: solid 1px #0C4586;}
.list .left{ display: flex; align-items: center; font-size: 14px; line-height: 24px;}
.list .left img{ width: 48px; height: 48px; margin-right: 12px;}
.list .left .text{color: #CCE9FF;}
.list .left .text span{ color: #00B1FF; font-size: 16px; }
.list li:last-of-type{ border: 0;}
.list .right { color: #00B1FF; font-size: 16px;}

</style>
