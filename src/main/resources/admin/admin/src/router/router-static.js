import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jihua from '@/views/modules/jihua/list'
    import singleSeach from '@/views/modules/singleSeach/list'
    import wuzi from '@/views/modules/wuzi/list'
    import wuziXiaohao from '@/views/modules/wuziXiaohao/list'
    import xinxi from '@/views/modules/xinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhaoshengrenyuan from '@/views/modules/zhaoshengrenyuan/list'
    import zhengce from '@/views/modules/zhengce/list'
    import zixunjilu from '@/views/modules/zixunjilu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJihua from '@/views/modules/dictionaryJihua/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionarySingleSeach from '@/views/modules/dictionarySingleSeach/list'
    import dictionaryWuzi from '@/views/modules/dictionaryWuzi/list'
    import dictionaryWuziXiaohao from '@/views/modules/dictionaryWuziXiaohao/list'
    import dictionaryXinxi from '@/views/modules/dictionaryXinxi/list'
    import dictionaryZhengce from '@/views/modules/dictionaryZhengce/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'
    import dictionaryZixunjiluFangshi from '@/views/modules/dictionaryZixunjiluFangshi/list'
    import dictionaryZixunjiluZhongdian from '@/views/modules/dictionaryZixunjiluZhongdian/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJihua',
        name: '计划类型',
        component: dictionaryJihua
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionarySingleSeach',
        name: '单页数据类型',
        component: dictionarySingleSeach
    }
    ,{
        path: '/dictionaryWuzi',
        name: '物资类型',
        component: dictionaryWuzi
    }
    ,{
        path: '/dictionaryWuziXiaohao',
        name: '物资消耗类型',
        component: dictionaryWuziXiaohao
    }
    ,{
        path: '/dictionaryXinxi',
        name: '信息公开类型',
        component: dictionaryXinxi
    }
    ,{
        path: '/dictionaryZhengce',
        name: '政策类型',
        component: dictionaryZhengce
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/dictionaryZixunjiluFangshi',
        name: '咨询方式',
        component: dictionaryZixunjiluFangshi
    }
    ,{
        path: '/dictionaryZixunjiluZhongdian',
        name: '咨询重点',
        component: dictionaryZixunjiluZhongdian
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jihua',
        name: '招生计划',
        component: jihua
      }
    ,{
        path: '/singleSeach',
        name: '单页数据',
        component: singleSeach
      }
    ,{
        path: '/wuzi',
        name: '物资',
        component: wuzi
      }
    ,{
        path: '/wuziXiaohao',
        name: '物资消耗',
        component: wuziXiaohao
      }
    ,{
        path: '/xinxi',
        name: '信息公开',
        component: xinxi
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhaoshengrenyuan',
        name: '招生人员',
        component: zhaoshengrenyuan
      }
    ,{
        path: '/zhengce',
        name: '招生政策',
        component: zhengce
      }
    ,{
        path: '/zixunjilu',
        name: '咨询记录',
        component: zixunjilu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
