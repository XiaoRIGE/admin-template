<template>
  <div class="likes-tab">
    <BaseTable
      :headers="headers"
      :desserts="desserts"
      :need-default-height="false"
    >
      <template v-slot:item.customerNickName="{ item }">
        <span class="link-text cursor ellipsis">
          {{ item.customerNickName }}
        </span>
      </template>
    </BaseTable>
  </div>
</template>
<script>
import BaseTable from '@/components/BaseTable.vue'
import { ref } from 'vue'

export default {
  name: '',
  components: { BaseTable },
  props: {},
  emits: [],
  setup() {
    const headers = ref([
      {
        text: 'UID',
        align: 'left',
        sortable: false,
        value: 'uid',
      },
      {
        text: '昵称',
        value: 'customerNickName',
        sortable: false,
      },
      {
        text: '昵称',
        value: 'userName',
        sortable: false,
      },
      {
        text: '手机号',
        value: 'telephone',
        sortable: false,
      },
      {
        text: '性别',
        value: 'sex',
        sortable: false,
      },
      {
        text: '身份',
        value: 'identity',
        sortable: false,
      },
      { text: '点赞时间', value: 'postTime' },
      { text: '成为车主时间', value: 'postTime' },
      { text: '注册时间', value: 'postTime' },
    ])
    const desserts = ref([
      {
        id: 1,
        uid: 1,
        customerNickName: '乌龙茶',
        userName: '周静',
        telephone: '19985648523',
        sex: '女',
        identity: '车主',
        index: 1,
        postTime: '2022-08-27 14:41',
      },
      {
        id: 2,
        index: 2,
        uid: 2,
        customerNickName: '乌龙茶22',
        userName: '周淮安',
        telephone: '19986848523',
        sex: '男',
        identity: '车主',
        postTime: '2022-08-27 14:41',
      },
    ])
    return {
      headers,
      desserts,
    }
  },
}
</script>

<style lang="scss" scoped>
.likes-tab {
  .link-text {
    max-width: 600px;
    color: #0078d6;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
