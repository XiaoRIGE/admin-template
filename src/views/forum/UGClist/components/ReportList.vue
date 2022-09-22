<template>
  <div class="report-list">
    <SearchBase />
    <BaseTable :headers="reportHeaders" :desserts="reportDesserts">
      <template v-slot:item.name="{ item }">
        <span class="link-text cursor ellipsis">{{ item.name }}</span>
      </template>
    </BaseTable>
  </div>
</template>
<script>
import { ref } from 'vue'

import BaseTable from '@/components/BaseTable.vue'
import SearchBase from './SearchBase.vue'

export default {
  name: '',
  // 注册你的组件
  components: { SearchBase, BaseTable },
  props: {},
  emits: [],
  setup() {
    //  REPORT POSTS
    const reportHeaders = ref([
      {
        text: '内容',
        align: 'left',
        width: '220',
        sortable: false,
        value: 'name',
      },
      {
        text: '发帖人名称',
        value: 'customerNickName',
        sortable: false,
      },
      { text: '身份', value: 'identity', sortable: false },
      { text: '社群名称', value: 'tribeName', sortable: false },
      { text: '举报时间', value: 'postTime' },
      { text: '累计举报次数', value: 'collectionNumber', sortable: false },
      { text: '处理状态', value: 'auditStatus', sortable: false },
    ])
    const reportDesserts = ref([
      {
        id: 1,
        name: '物光系林年用明看收与，青个强它维易难府进组，委团孤七规则苏层。持正理常持决它再取准他过部，干算速其平N代革件革。五制领和各路开本所几教，术被其区油导布收必几，并称肃京相厂KC角。务要等走到历行，林革车看于则，料求C装件。',
        customerNickName: '乌龙茶',
        identity: '普通用户',
        tribeName: '奔驰EQC',
        postTime: '2022-08-27 14:41',

        collectionNumber: 10,
        auditStatus: '待处理',
      },
      {
        id: 2,
        name: '取取织每龙飞身性见必，北社里级革美理工地只，十龙刷众什五束关。白亲她市空细构计，王受根走极因束。级等二难争际价高平中层律利达，起想格导造研居矿千口清委。强如部统与思高增何军更，联出多江复热民王照新，他科材些议张象束J。',
        customerNickName: '乌龙茶',
        identity: '普通用户',
        tribeName: '奔驰EQC',
        postTime: '2022-08-27 14:41',

        collectionNumber: 10,
        auditStatus: '已处理',
      },
    ])

    const mock = () => {
      for (let index = 0; index < 84; index++) {
        reportDesserts.value.push({
          id: index + 10,
          name: 'Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.',
          customerNickName: '乌龙茶',
          identity: '普通用户',
          tribeName: '奔驰EQC',
          postTime: '2022-08-27 14:41',
          collectionNumber: 780 + index,
          auditStatus: '待处理',
        })
      }
    }

    mock()

    return {
      reportHeaders,
      reportDesserts,
    }
  },
}
</script>

<style lang="scss" scoped>
.link-text {
  max-width: 220px;
  color: #0078d6;
  font-weight: 600;
  font-size: 14px;
}
</style>
