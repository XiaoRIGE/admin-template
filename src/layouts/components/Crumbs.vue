<!-- crumbs.vue -->
<template>
  <div class="tags">
    <div class="horizontal-container">
      <div ref="scroll" class="scroll-wrapper">
        <div class="scroll-content">
          <!-- todo 处理数量超出时样式 -->
          <v-btn
            v-for="(tab, index) in tabList"
            :key="tab.path"
            :closable="tab.name !== 'index'"
            :effect="activePath === tab.name ? 'dark' : 'plain'"
            @close="handleClose(tab, index)"
            @click="changeMenu(tab)"
          >
            {{ tab.label }}
            <span v-show="tabList.length > 1" class="close-icon" @click="handleClose(tab, index)">X</span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
      // 菜单列表
      menuList: [],
    }
  },
  computed: {
    ...mapState({
      // 从 state 中的到的计算属性
      activePath: state => state.activePath, // 已选中菜单
      tabList: state => state.tabList, // tags菜单列表
      catch_components: state => state.catch_components, // keepalive缓存
    }),
  },

  watch: {
    // 路由发生变化时调用更新tab标签数据
    $route: {
      handler(newValue) {
        this.selectMenu(newValue)
      },
      immediate: true,
    },
  },

  methods: {
    // 清空当前vuex数据
    handleCommand() {
      this.$store.commit('clearVUEX')
    },

    // 点击菜单 - 传入name，添加到keepalive缓存页面
    selectMenu(item) {
      // console.log(item.name)
      // 加入keepalive缓存
      this.$store.commit('addKeepAliveCache', item.name)

      // 添加tags标签
      // 访问wellcome 就代表home
      const name = item.name === 'index' ? 'index' : item.name
      const submenu = {
        path: item.path,
        name,
        label: item.meta.title,
        fullPath: item.fullPath,
      }

      // console.log(submenu)
      // 更新选中菜单
      this.$store.commit('selectMenu', submenu)
      console.log(this.$store.state.tabList)
    },

    // 点击标签跳转路由
    changeMenu(item) {
      // 历史选中菜单
      const oldActivePath = this.$store.state.activePath

      // 首先判断点击的是否是自己，如果是自己则return
      if (oldActivePath === item.name) {
        return
      }

      // 存储菜单
      this.$store.commit('changeMenu', item.name)

      // 页面跳转
      this.$router.push({
        path: item.fullPath,
      })
    },

    // 关闭tab标签
    handleClose(tab, index) {
      // 历史选中菜单
      let oldActivePath = this.$store.state.activePath

      // 历史已选中菜单列表
      const oldTabList = this.$store.state.tabList

      // 计算标签个数
      const length = oldTabList.length - 1

      // 删除tabList中的该对象
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < oldTabList.length; i++) {
        const item = oldTabList[i]
        if (item.name === tab.name) {
          oldTabList.splice(i, 1)
        }
      }

      // 删除keepAlive缓存
      this.$store.commit('removeKeepAliveCache', tab.name)

      // 如果关闭的标签不是当前路由的话，就不跳转
      if (tab.name !== oldActivePath) {
        return
      }

      // 如果length为1，必然只剩下首页标签，此时关闭后，更新到首页
      if (length === 1) {
        // 同时存储菜单
        this.$store.commit('closeTab', {
          activePath: 'home',
          tabList: oldTabList,
        })

        // tab页向左跳转
        this.$router.push({
          name: oldTabList[index - 1].name,
        })

        // 不再向下执行
        return
      }

      // 关闭的标签是最右边的话，往左边跳转一个
      if (index === length) {
        // 同时更新路径
        oldActivePath = oldTabList[index - 1].name

        // 同时存储菜单
        this.$store.commit('closeTab', {
          activePath: oldActivePath,
          tabList: oldTabList,
        })

        // tab页向左跳转
        this.$router.push({
          name: oldTabList[index - 1].name,
        })
      } else {
        // 同时更新路径
        oldActivePath = oldTabList[index].name

        // 同时存储菜单
        this.$store.commit('closeTab', {
          activePath: oldActivePath,
          tabList: oldTabList,
        })

        // tab页向右跳转
        this.$router.push({
          name: oldTabList[index].name,
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.close-icon {
  padding-left: 8px;
}
</style>
