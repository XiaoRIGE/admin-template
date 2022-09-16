<template>
  <component :is="resolveLayout">
    <keep-alive :include="catchComponents">
      <router-view></router-view>
    </keep-alive>
  </component>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import { useAppStore } from '@/store/app'

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

    const store = useAppStore()
    const catchComponents = computed(() => store.catch_components)

    return {
      resolveLayout,
      catchComponents,
    }
  },
}
</script>
