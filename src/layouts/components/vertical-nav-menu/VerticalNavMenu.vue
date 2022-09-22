<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    :mini-variant="isMiniPanel"
    :mini-variant-width="120"
    permanent
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="(val) => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-img
          :src="require('@/assets/images/svg/logo.svg')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-y-transition>
          <h2 v-show="!isMiniPanel" class="app-title">MB Community</h2>
        </v-slide-y-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list expand shaped class="vertical-nav-menu-items pr-5">
      <nav-menu-link
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiHomeOutline"
      ></nav-menu-link>

      <nav-menu-group title="Forum Mgmt." :icon="icons.mdiFileOutline">
        <nav-menu-link
          title="PGC list"
          :to="{ name: 'PGCList' }"
          :icon="icons.mdiAlphaTBoxOutline"
        ></nav-menu-link>
        <nav-menu-link
          title="UGC List"
          :to="{ name: 'UGClist' }"
          :show-icon="false"
        ></nav-menu-link>
        <nav-menu-link
          title="Topic List"
          :to="{ name: 'TAGlist' }"
          :show-icon="false"
        ></nav-menu-link>
        <nav-menu-link
          title="Tag List"
          :to="{ name: 'TOPIClist' }"
          :show-icon="false"
        ></nav-menu-link>
      </nav-menu-group>

      <nav-menu-link
        title="Tribe Mgmt."
        :to="{ name: 'test1' }"
        :icon="icons.mdiHomeOutline"
      ></nav-menu-link>

      <nav-menu-link
        title="Report Mgmt."
        :to="{ name: 'test2' }"
        :icon="icons.mdiHomeOutline"
      ></nav-menu-link>

      <nav-menu-group title="Pages" :icon="icons.mdiFileOutline">
        <nav-menu-link
          title="Login"
          :to="{ name: 'pages-login' }"
          target="_blank"
        ></nav-menu-link>
        <nav-menu-link
          title="Error"
          :to="{ name: 'error-404' }"
          target="_blank"
        ></nav-menu-link>
      </nav-menu-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
} from '@mdi/js'

import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
    isMiniPanel: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #f8f8f8;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(26px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      :deep(.v-list-item__icon) {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  background-color: #0d0d0d !important;
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}

// nav menu reset
:deep(.v-list.v-sheet--shaped) {
  .v-list-item,
  .v-list-item::before,
  .v-list-item > .v-ripple__container {
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
    border-radius: 4px !important;
  }
}
:deep(.v-list-item) {
  color: #dbdbdb !important;
}

:deep(.pr-5) {
  padding: 0 8px !important;
}
</style>
