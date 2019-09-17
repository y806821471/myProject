import Vue from 'vue'
import Router from 'vue-router'

// 登录
import Login from '@/components/login/Login'   //登录
import Register from '@/components/login/Register' //注册
import Forget from '@/components/login/Forget' //忘记密码
//主页
import Home from '@/components/home/Home' //首页
import NoticeList from '@/components/home/NoticeList' //公告列表
import NoticeDetail from '@/components/home/NoticeDetail' //公告详情
import Recognition from '@/components/home/Recognition'  //认筹
import Exchanged from '@/components/home/Exchanged'  //互转
import Sharing from '@/components/home/Sharing'  //分享

import Apply from '@/components/apply/Index' //应用
// 我的
import Personal from '@/components/personal/Index' //我的index
import Personal_member from '@/components/personal/Index_member' //我的index（会员）
import CustomerService from '@/components/personal/CustomerService' //客服中心
import Feedback from '@/components/personal/Feedback' //问题反馈
import FeedbackList from '@/components/personal/FeedbackList' //反馈列表
import Safety from '@/components/personal/Safety' //安全中心
import SafetyPassword from '@/components/personal/SafetyPassword' //安全中心修改密码
import MyTeam from '@/components/personal/MyTeam' //我的团队
import Financial from '@/components/personal/Financial' //财务明细
 
Vue.use(Router)

export default new Router({
  routes: [
    // 登陆注册
    { path: '/', name: 'Login', redirect: "/Login" },
    { path: '/Login', name: 'Login', component: Login, },
    { path: '/Register', name: 'Register', component: Register, },
    { path: '/Forget', name: 'Forget', component: Forget, },

    // 主页
    { path: '/Home', name: 'Home', component: Home },
    { path:'/Recognition', name: 'Recognition', component: Recognition},
    { path:'/Exchanged', name: 'Exchanged', component: Exchanged},
    { path:'/Sharing', name: 'Sharing', component: Sharing},
    { path:'/NoticeList', name: 'NoticeList', component: NoticeList},
    { path:'/NoticeDetail', name: 'NoticeDetail', component: NoticeDetail},

    { path:'/Apply', name: 'Apply', component: Apply}, //应用
    
    // 我的
    { path:'/Personal', name: 'Personal', component: Personal},
    { path:'/Personal_member', name: 'Personal_member', component: Personal_member},
    { path:'/CustomerService', name: 'CustomerService', component: CustomerService},
    { path:'/Feedback', name: 'Feedback', component: Feedback},
    { path:'/FeedbackList', name: 'FeedbackList', component: FeedbackList},
    { path:'/Safety', name: 'Safety', component: Safety},
    { path:'/SafetyPassword', name: 'SafetyPassword', component: SafetyPassword},
    { path:'/MyTeam', name: 'MyTeam', component: MyTeam},
    { path:'/Financial', name: 'Financial', component: Financial},

  ]
})

