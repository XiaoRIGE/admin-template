<template>
  <div class="table-base">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :height="needDefaultHeight ? listHeight : null"
      fixed-header
      hide-default-footer
      calculate-widths
      item-key="id"
      class="elevation-1"
    >
      <!-- https://forum.vuejs.org/t/recursive-scoped-slots/8220 -->
      <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </v-data-table>

    <div class="text-center pagination my-3">
      <!-- <v-container> -->
      <v-row justify="end" class="margin-none">
        <v-col cols="6" class="align-self-center">
          <div class="d-flex justify-end align-center">
            <span class="pagination-text__desc">结果：</span>
            <span class="mr-6">{{ total }}</span>
            <!-- todo 切换pageSize功能 -->
            <span class="pagination-text__desc">每页：</span>
            <span>{{ pageSize }}</span>
            <v-pagination
              v-model="page"
              :total-visible="7"
              circle
              :length="totalPage"
              color="#F4F4F4"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
      <!-- </v-container> -->
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'

export default {
  name: '',
  components: {},
  props: {
    headers: {
      type: Array,
      required: true,
    },
    desserts: {
      type: Array,
      required: true,
      default: () => [],
    },
    listHeight: {
      type: [String, Number],
      default: '440',
    },
    needDefaultHeight: {
      type: Boolean,
      default: true,
    },
  },
  emits: [],
  setup(props) {
    const page = ref(1)
    // const total = ref(98)

    console.log('props.desserts', props.desserts)
    const total = computed(() => props.desserts.length)
    const pageSize = ref(10)
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
    return {
      page,
      pageSize,
      total,
      totalPage,
    }
  },
}
</script>

<style lang="scss" scoped>
.able-base {
  .pagination {
    color: #1a1a1a;
    &-text__desc {
      color: #5c5c5c;
    }
  }
}

.link-text {
  max-width: 220px;
  color: #0078d6;
  font-weight: 600;
  font-size: 14px;
}
:deep(.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
    .v-btn__content) {
  opacity: 1;
}
</style>
