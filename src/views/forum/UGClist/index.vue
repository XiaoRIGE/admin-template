<template>
  <div class="ugc-list">
    <div class="ugc-list__title mb-2">UGC list</div>
    <v-tabs v-model="tab" background-color="transparent">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card tile flat>
          <NormalList />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card tile flat>
          <ReportList />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from 'vue'
import NormalList from './components/NormalList.vue'
import ReportList from './components/ReportList.vue'

export default {
  components: { NormalList, ReportList },
  setup() {
    const tab = ref(null)
    const items = ref(['normal posts', 'report posts'])

    return {
      tab,
      items,
    }
  },
}
</script>

<style lang="scss" scoped>
.ugc-list {
  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
