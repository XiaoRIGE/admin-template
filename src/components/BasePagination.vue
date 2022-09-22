<template>
  <v-container>
    <v-row justify="end">
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
  </v-container>
</template>
<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: '',
  // 注册你的组件
  components: {},
  props: {
    total: {
      type: Number,
      //   required: true,
      default: 56,
    },
  },
  emits: [],
  setup(props) {
    const page = ref(1)
    const pageSize = ref(10)
    const totalPage = computed(() => Math.ceil(props.total / pageSize.value))
    return {
      page,
      pageSize,
      totalPage,
    }
  },
})
</script>

<style lang="scss" scoped></style>
