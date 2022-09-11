<template>
  <component :is="resolveLayout">
    <keep-alive :include="catchComponents">
      <router-view></router-view>
    </keep-alive>
  </component>
</template>

<script>
import { computed } from '@vue/composition-api'
import { mapState } from 'vuex'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
  },
  setup() {
    const { route } = useRouter()
    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank' // 空白布局

      return 'layout-content' // 菜单栏布局
    })

    // const catchComponents = computed(() => {
    //   console.log('this.$store.sate.catch_components', this.$store.sate.catch_components)

    //   return this.$store.sate.catch_components
    // })

    return {
      resolveLayout,

      // catchComponents,
    }
  },
  computed: {
    ...mapState({
      // 从 state 中的到的计算属性
      // activePath: state => state.activePath, // 已选中菜单
      // tabList: state => state.tabList, // tags菜单列表
      catchComponents: state => state.catch_components, // keepalive缓存
    }),
  },
}
</script>
