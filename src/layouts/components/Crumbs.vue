<template>
  <div class="horizontal-container">
    <div ref="scroll" class="scroll-wrapper">
      <div class="scroll-content" transition="v-fab-transition">
        <!-- <v-tabs
          v-model="current"
          background-color="#fff"
          color="#1976D2"
          center-active
          show-arrows
        >
          <v-tab
            v-for="(tab, index) in tabList"
            :key="tab.fullPath"
            @click="changeMenu(tab)"
          >
            <span>{{ tab.label }}</span>
            <img
              v-show="tabList.length > 1"
              class="close-icon ml-2"
              src="@/assets/images/svg/close.svg"
              @click="handleClose(tab, index)"
            />
          </v-tab>
        </v-tabs> -->
        <!-- todo 处理数量超出时样式 -->
        <div
          v-for="(tab, index) in tabList"
          :key="tab.fullPath"
          class="tab-link-item cursor"
          :class="activeName === tab.name ? 'isActive' : ''"
          @close="handleClose(tab, index)"
          @click="changeMenu(tab)"
        >
          <span class="tab-title">{{ tab.label }}</span>
          <img
            v-show="tabList.length > 1"
            class="close-icon"
            src="@/assets/images/svg/delete.svg"
            @click="handleClose(tab, index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch, ref } from 'vue'
import { useAppStore } from '@/store/app'
import { useRouter } from '@/utils'

export default {
  setup() {
    const { route, router } = useRouter()

    const store = useAppStore()
    const activeName = computed(() => store.activeName)
    const tabList = computed(() => store.tabList)
    const handleCommand = () => {
      store.clearVUEX()
    }

    /**
     *
     * @describe 切换路由执行回调
     * @param {*} route 路由信息
     */
    const selectMenu = (currentRoute) => {
      // 加入keepalive缓存
      store.addKeepAliveCache(currentRoute.name)
      const submenu = {
        path: currentRoute.path,
        name: currentRoute.name,
        label: currentRoute.meta.title,
        fullPath: currentRoute.fullPath,
      }
      store.selectMenu(submenu)
    }

    /**
     *
     * @describe 切换激活页面
     * @param {*} item
     */
    const changeMenu = (item) => {
      // 首先判断点击的是否是自己，如果是自己则return
      if (store.activeName === item.name) {
        return
      }

      // 存储标签
      store.changeMenu(item.name)
      // 页面跳转
      router.push({ path: item.fullPath })
    }

    /**
     * @describe 关闭标签页中某个界面
     * @param {*} tab
     * @param {*} index
     */
    const handleClose = (tab, index) => {
      // 将其从标签List中移除
      let oldActiveName = store.activeName
      const oldTabList = store.tabList
      const length = oldTabList.length - 1
      for (let i = 0; i < oldTabList.length; i++) {
        const item = oldTabList[i]
        if (item.name === tab.name) {
          oldTabList.splice(i, 1)
        }
      }

      // 删除keepAlive缓存
      store.removeKeepAliveCache(tab.name)

      // 路由跳转
      if (tab.name !== oldActiveName) {
        return
      }
      // 如果length为1，必然只剩下首页标签，此时关闭后，更新到首页
      if (length === 1) {
        // 同时存储标签
        store.closeTab({ activeName: '/dashboard', tabList: oldTabList })
        // tab页向左跳转
        router.push({
          name: oldTabList[index - 1].name,
        })
        return
      }

      // 根据标签位置决定跳转方向、更新当前激活标签、更新标签List
      if (index === length) {
        oldActiveName = oldTabList[index - 1].name
        store.closeTab({
          activeName: oldActiveName,
          tabList: oldTabList,
        })
        // tab页向左跳转
        router.push({
          name: oldTabList[index - 1].name,
        })
      } else {
        oldActiveName = oldTabList[index].name
        store.closeTab({
          activeName: oldActiveName,
          tabList: oldTabList,
        })
        // tab页向右跳转
        router.push({
          name: oldTabList[index].name,
        })
      }
    }

    const current = ref('')

    watch(
      () => route.value,
      (val) => {
        selectMenu(val)

        const index = tabList.value.findIndex(
          (item) => item.name === activeName.value
        )
        current.value = index
      }
    )

    return {
      activeName,
      tabList,
      current,
      // catch_components,
      handleCommand,
      selectMenu,
      changeMenu,
      handleClose,
    }
  },
}
</script>
<style lang="scss" scoped>
.horizontal-container {
  .scroll-wrapper {
    max-width: calc(100vw - 600px);
    position: relative;
  }
  .scroll-content {
    // max-width: calc(100vw - 400px);
    // overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    .tab-link-item {
      display: flex;
      align-items: center;
      margin-right: 20px;
      padding: 0 15px;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.4px;
      text-transform: uppercase;
    }
    .tab-title {
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.6);
      transition: all 0.3s;
    }
    .isActive {
      position: relative;
      .tab-title {
        color: #1976d2;
      }
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 42px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #1976d2;
      }
    }
  }
}
.close-icon {
  width: 12px;
  height: 12px;
  // color: #767676;
}
</style>
