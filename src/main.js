import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/main.css'; //全局样式
// import i18n from '@/locales'
// import VueClipboard from 'vue-clipboard2' //复制粘贴复制插件
// import Utils from '@/components/bin/utils.js';
Vue.config.productionTip = false;
Vue.use(Vant);
// Vue.use(VueClipboard)
Vue.prototype.routerBack = function() {
  router.back();
}
// Vue.prototype.Utils = Utils;

// axios.defaults.baseURL = 'http://api.haibiter.com';
axios.defaults.baseURL = 'http://app.sty6666.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const token = localStorage.getItem('accessToken') || '';
axios.defaults.headers.token = token;
Vue.prototype.$http = axios;

//路由全局守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem("password") ? true : false;
//   // 如果有token，或在其他不需要token的页面
//   if (isLogin || to.path=='/Guide' || to.path=='/Create' || to.path=='/CreateFirst' || to.path=='/Imported' || to.path=='/Mnemonic' || to.path=='/Private') {
//     next()
//   } else {
//     next("/Create")
//   }
// })

// 配置plus 环境
document.addEventListener('plusready', function () {
  plus.navigator.setStatusBarBackground('#FFFFFF');
  plus.navigator.setStatusBarStyle('light');
  // 监听返回按键
  let now = false;
  let time = null;
  plus.key.addEventListener('backbutton', function () {
    let canQuit = {'/Index':true,'/Login':true,'/MyCenter':true}
    let pathUrl = vueInstance.$route.path;
    if(canQuit[pathUrl]) {
        time = null;
        if(now) {
          now = false;
          plus.runtime.quit();
        }else {
          now = true;
          plus.nativeUI.toast("再按一次退出应用", {duration: 'short' });
          time = setTimeout(() => {
            now = false;
          }, 1000);
        }
    }else {
      router.back();
    }
  })
})

// 全局header公共组件
import AppBar from './components/AppBar'
Vue.component('app-bar', AppBar)
new Vue({
  render: h => h(App),
  router,
  store,
  // i18n,
}).$mount('#app')
