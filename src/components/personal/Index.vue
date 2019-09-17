<template>
  <div class="my">
    <van-nav-bar title="我的"/>
    <div class="top">
      <img src="../../assets/img/personal.png" alt="">
      <div class="info">
        <div>ID：18900007890</div>
        <div>
          <span>娱乐币：</span>
          <span>0.00</span>
        </div>
        <div>
          <span>娱乐股：</span>
          <span>0.00</span>
        </div>
      </div>
      <div class="general">
        <img src="../../assets/img/bgu1.png" alt="">
        <span>普通会员</span>
      </div>
      <div class="icon" @click="dropOut">&#xe6bb;</div>
    </div>
    <ul class="list">
      <router-link to="/Financial" tag="li">
        <div class="left"><img src="../../assets/img/list1.png" alt=""><div>财务明细</div></div>
        <div class="right"><van-icon name="arrow"/></div>
      </router-link>
      <router-link to="/Safety" tag="li">
        <div class="left"><img src="../../assets/img/list2.png" alt=""><div>安全中心</div></div>
        <div class="right"><van-icon name="arrow"/></div>
      </router-link>
      <router-link to="/MyTeam" tag="li">
        <div class="left"><img src="../../assets/img/list3.png" alt=""><div>我的团队</div></div>
        <div class="right"><van-icon name="arrow"/></div>
      </router-link>
      <router-link to="/Feedback" tag="li">
        <div class="left"><img src="../../assets/img/list4.png" alt=""><div>问题反馈</div></div>
        <div class="right"><van-icon name="arrow"/></div>
      </router-link>
      <router-link to="/CustomerService" tag="li">
        <div class="left"><img src="../../assets/img/list5.png" alt=""><div>客服中心</div></div>
        <div class="right"><van-icon name="arrow"/></div>
      </router-link>
      <router-link to="/About" tag="li">
        <div class="left"><img src="../../assets/img/list6.png" alt=""><div>版本更新</div></div>
        <div class="right"><van-icon name="arrow"/></div>
      </router-link>
    </ul>
    <van-dialog v-model="showVersion" :showConfirmButton="false">
      <div class="dialog-info">
        <div class="primary">发现新版本:{{versionInfo.value}}<span><br>(当前版本:{{version}})</span></div>
        <div class="btn" @click="update">立即更新</div>
      </div>
    </van-dialog>

    <!-- <mu-dialog class="common-dialog up-dialog" title="" width="400" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="showVersionDialog">
      <div class="content">
        <div class="primaryColor">发现新版本:{{info.value}}<span><br>(当前版本:{{version}})</span></div>
        <mu-button class="common-btn" @click="update">更新</mu-button>
      </div>
    </mu-dialog> -->
    <app-bar></app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      version: "1.04",
      showVersion: false,
      versionInfo: {}
    };
  },
  created() {
    // this.getUserInfo();
    // this.getInfo();
  },
  methods: {
    dropOut(){
      this.$router.push('/login');
    },
    // 用户信息
    getUserInfo() {
      this.$http("/user/info").then(response => {
        console.log(response.data.data)
        this.userInfo = response.data.data;
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        if(this.userInfo.avatar) {
          this.avatar = this.userInfo.avatar;
        }
      });
    },
    // 判断版本是否需要更新
    getInfo() {
      this.$http("/space/version").then(response => {
        // console.log(response.data.data);
        this.versionInfo = response.data.data;
        if (parseFloat(this.versionInfo.value) > parseFloat(this.version)) {
          this.showVersion = true;
        }
      });
    },
    //打开弹出
    openVersionDialog(){
      if (parseFloat(this.versionInfo.value) > parseFloat(this.version)) {
        this.showVersion = true;
      }else{
      this.$toast.message("当前为最新版本！");        
      }
    },
    //关闭弹出
    closeVersionDialog(){
      this.showVersion=false;
    },
    //确认版本更新
    update() {
      this.versionDialog = false;
      let userAgent = navigator.userAgent.toLowerCase();
      let wgtWaiting = null;  // 提示框
      if(/iphone|ipad|ipod/.test(userAgent)) {
        document.location.href = this.versionInfo.download[1].value; //ios版fir下载地址
      }else if (/android/.test(userAgent)) {
        wgtWaiting = plus.nativeUI.showWaiting("开始下载");
        let dtask = plus.downloader.createDownload(this.versionInfo.download[0].value, {}, function (down, status) {
            if (status == 200) {
              let path = down.filename;//下载apk
              wgtWaiting.setTitle("开始安装");
              plus.runtime.install(path); // 自动安装apk文件
            } else {
              plus.nativeUI.alert('版本更新失败:' + status);
              wgtWaiting.close();
            }
        });
        dtask.addEventListener("statechanged", function (download, status) {
          switch (download.state) {
            case 2:
              break;
            case 3:
              setTimeout(function() {
                let percent = download.downloadedSize / download.totalSize * 100;
                wgtWaiting.setTitle("正在下载 " + parseInt(percent) + "%");
              }, 0)
              break;
            case 4:
              wgtWaiting.setTitle("下载完成");
              wgtWaiting.close();
              break;
          }
        });
        dtask.start();
      }
    },
    // 调用系统内置分享
    shareLink(url) {
      let msg = {
        type: 'web',
        content: 'GEMC下载地址',
        href: 'https://51gsc.com/app/gemc',
      };
      plus.share.sendWithSystem(msg, function(){
        // console.log('Success');
      }, function(e){
        // console.log('Failed: '+JSON.stringify(e));
      })
    },
    // 暂未开放
    developing() {
      this.$toast("暂未开放");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-nav-bar__title{ font-size: 19px; color: #00B1FF;}
.top{ padding: 0 15px 15px 15px; width: 100%; height: 144px; position: relative;}
.top img{ width: 100%; height: 100%; }
.top .info{ width: 125px;  color: #7DA3BF; font-size: 13px; position: absolute; top:23px; left: 50%; transform: translate(-50%); line-height: 25px;}
.top .info span:nth-child(even ){color: #00B1FF;font-size: 14px}
.general{ width: 70px; height: 30px; line-height: 30px; position: absolute;top: 55px;left: 38px; }
.general span {position: absolute;top: -2px; left: 10%; color: #fff;}
.top .icon {font-size: 16px;color:#00B1FF; position: absolute; top: 16%; right: 17%; width: 30px; height: 30px; text-align: center; line-height: 30px;}
.list { width: 100%; padding: 0 4%; background: linear-gradient(90deg,rgba(16,31,63,1) 0%,rgba(14,62,121,1) 100%); margin-bottom: 90px;}
.list li{ display: flex; justify-content: space-between; align-items: center; padding: 15px 4%; border-bottom: solid 1px #0C4586;}
.list .left{ display: flex; align-items: center; font-size: 14px; color: #00B1FF;}
.list .left img{ width: 39px; height: 39px; margin-right: 24px;}
.list li:last-of-type{ border: 0;}
.list .right { color: #00B1FF; font-size: 16px;}
.dialog-info{ padding: 20px 4%;}
.dialog-info .primary { font-size: 16px; text-align: center; margin-bottom: 16px; }
.dialog-info .primary span {font-size: 12px; color: #7DA3BF;}
.dialog-info .btn{ text-align: center; color: #00B1FF;}
</style>
