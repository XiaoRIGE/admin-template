<template>
  <v-app>
    <vertical-nav-menu
      :is-drawer-open.sync="isDrawerOpen"
      :is-mini-panel.sync="isMiniPanel"
    ></vertical-nav-menu>
    <v-app-bar app absolute color="#fff">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <div class="left-box d-flex align-center">
            <v-app-bar-nav-icon
              class="d-block me-2"
              @click="isMiniPanel = !isMiniPanel"
            ></v-app-bar-nav-icon>
            <Crumbs />
          </div>

          <v-spacer></v-spacer>
          <v-btn icon small class="ms-3">
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
      <template v-if="showBreadcrumb" v-slot:extension>
        <v-breadcrumbs :items="breadcrumbItem" class="breadcrumb">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </template>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { ref, computed } from 'vue'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import { useRouter } from '@/utils'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import Crumbs from './components/Crumbs.vue'

import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,

    AppBarUserMenu,
    Crumbs,
  },
  setup() {
    const isDrawerOpen = ref(null) // 是否展示菜单抽屉

    const isMiniPanel = ref(false)

    const { route } = useRouter()

    // 面包屑
    const breadcrumbItem = [
      {
        text: 'Dashboard',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'Forum Mgmt.',
        disabled: false,
        href: '/forum/pgc-list',
      },
      {
        text: 'UGCLIST',
        disabled: true,
        href: 'forum/ugc-list',
      },
    ]
    const showBreadcrumb = computed(() => {
      console.log(!route.value.meta?.hideBreadcrumbs)

      return !route.value.meta?.hideBreadcrumbs
    })

    return {
      isDrawerOpen,
      isMiniPanel,
      breadcrumbItem,
      showBreadcrumb,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
:deep(.v-app-bar) {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  // max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

//reset styles
:deep(.v-toolbar__extension) {
  background-color: #dddddd;
}
:deep(.breadcrumb a) {
  color: #1a1a1a;
}
</style>
