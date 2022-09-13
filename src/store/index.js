/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 路由导航start
    // 缓存组件页面
    catch_components: [],

    // 当前选中的菜单 - 默认选择首页
    activePath: '/dashboard',

    // 菜单项 - 默认需要展示的页面()
    tabList: [
      {
        path: '/dashboard',
        label: 'dashboard',
        name: 'index',
        fullPath: '/dashboard',
      },
    ],

    // 路由导航end
  },

  // 更改vuex的store中状态的唯一方法 - 同步操作
  mutations: {
    // 路由导航start
    // 清空vuex数据
    clearVUEX(state) {
      state.catch_components = []
      state.activePath = '/dashboard'
      state.tabList = [
        {
          path: '/dashboard',
          label: 'dashboard',
          name: 'dashboard',
          fullPath: '/dashboard',
        },
      ]
    },

    // 跳转页面执行
    selectMenu(state, submenu) {
      // 首页就是 wellcome   也就是 home
      if (submenu.name === 'dashboard') {
        submenu.name = 'dashboard'
        submenu.label = 'dashboard'
        submenu.path = '/dashboard'
        submenu.fullPath = '/dashboard'

        return
      }

      // 当前选中菜单
      const activePath = submenu.name

      // 历史已选中菜单列表
      const oldTabList = state.tabList

      // 将菜单信息添加到tablist - 添加时判断是否已有该路由标签
      const result = oldTabList.some((item) => {
        if (item.name === activePath) {
          // console.log('--------', item.fullPath != submenu.fullPath)
          // 有该路由标签是否为多次点击(相当于查看同路由下的详情，该过程只改变了参数)
          if (!item.fullPath !== submenu.fullPath) {
            item.fullPath = submenu.fullPath
          }

          return true
        }
      })

      // 如果不包含该对象，则添加
      if (!result) {
        oldTabList.push({
          path: submenu.name,
          name: submenu.name,
          label: submenu.label || submenu.name,
          fullPath: submenu.fullPath,
        })
      }

      // 重新赋值标签路由和当前选中菜单
      state.activePath = activePath
      state.tabList = oldTabList
    },

    // 添加keepalive缓存
    addKeepAliveCache(state, val) {
      // 如果是首页不缓存
      if (val === 'dashboard') {
        return
      }

      // console.log(state.catch_components)

      // 添加时判断，如果该组件已存在，便不添加
      if (state.catch_components.indexOf(val) === -1) {
        // 不存在，缓存页面
        state.catch_components.push(val)
        console.log('state.catch_components', state.catch_components)
      }
    },

    // 删除keepalive缓存
    removeKeepAliveCache(state, val) {
      const cache = state.catch_components
      for (let i = 0; i < cache.length; i++) {
        if (cache[i] === val) {
          cache.splice(i, 1)
        }
      }
      state.catch_components = cache
    },

    // 关闭菜单
    closeTab(state, val) {
      // 重新赋值
      state.activePath = val.activePath
      state.tabList = val.tabList
    },

    // 点击标签选择菜单
    changeMenu(state, val) {
      state.activePath = val
    },

    // 路由导航end
  },
  actions: {},
})
