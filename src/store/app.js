import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
    // 缓存组件页面
    catch_components: [],

    // 当前选中的标签 - 默认选择首页
    activeName: '/dashboard',

    // 标签项 - 默认需要展示的页面()
    tabList: [
      {
        path: '/dashboard',
        label: 'dashboard',
        name: 'dashboard',
        fullPath: '/dashboard',
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    // 清空vuex数据
    clearVUEX() {
      this.catch_components = []
      this.activeName = '/dashboard'
      this.tabList = [
        {
          path: '/dashboard',
          label: 'dashboard',
          name: 'dashboard',
          fullPath: '/dashboard',
        },
      ]
    },

    // 切换路由更新当前激活标签和标签裂变
    selectMenu(submenu) {
      // 当前选中标签
      const activeName = submenu.name

      // 历史已选中标签列表
      const oldTabList = this.tabList

      // 将标签信息添加到tabList - 添加时判断是否已有该路由标签
      const result = oldTabList.some((item) => item.name === activeName)

      // 如果不包含该对象，则添加
      if (!result) {
        oldTabList.push({
          path: submenu.name,
          name: submenu.name,
          label: submenu.label || submenu.name,
          fullPath: submenu.fullPath,
        })
      }

      // 重新赋值标签路由和当前选中标签
      this.activeName = activeName
      this.tabList = oldTabList
    },

    // 添加keepalive缓存
    addKeepAliveCache(val) {
      // 如果是首页不缓存
      if (val === 'dashboard') {
        return
      }
      // 添加时判断，如果该组件已存在，便不添加
      if (this.catch_components.indexOf(val) === -1) {
        // 不存在，缓存页面
        this.catch_components.push(val)
      }
    },

    // 删除keepalive缓存
    removeKeepAliveCache(val) {
      const cache = this.catch_components
      for (let i = 0; i < cache.length; i++) {
        if (cache[i] === val) {
          cache.splice(i, 1)
        }
      }
      this.catch_components = cache
    },
    // 关闭标签
    closeTab(val) {
      // 重新赋值
      this.activeName = val.activeName
      this.tabList = val.tabList
    },
    // 切换激活页面
    changeMenu(val) {
      this.activeName = val
    },
  },
  persist: {
    enabled: true,
  },
})
export const useXStore = defineStore('Xname', {})
