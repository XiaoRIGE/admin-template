<template>
  <div class="forward-tab">
    <BaseTable
      :headers="headers"
      :desserts="desserts"
      :need-default-height="false"
    >
      <template v-slot:item.content="{ item }">
        <span class="link-text cursor ellipsis">
          {{ item.content }}
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
        text: '序号',
        align: 'left',
        width: '220',
        sortable: false,
        value: 'index',
      },
      {
        text: '转发用户昵称',
        value: 'customerNickName',
        sortable: false,
      },
      { text: '转发内容', value: 'content', sortable: false, width: '600' },
      { text: '转发时间', value: 'postTime' },
    ])
    const desserts = ref([
      {
        id: 1,
        content:
          '物光系林年用明看收与，青个强它维易难府进组，委团孤七规则苏层。持正理常持决它再取准他过部，干算速其平N代革件革。五制领和各路开本所几教，术被其区油导布收必几，并称肃京相厂KC角。务要等走到历行，林革车看于则，料求C装件。',
        customerNickName: '乌龙茶',
        index: 1,
        postTime: '2022-08-27 14:41',
      },
      {
        id: 2,
        index: 2,
        content:
          '取取织每龙飞身性见必，北社里级革美理工地只，十龙刷众什五束关。白亲她市空细构计，王受根走极因束。级等二难争际价高平中层律利达，起想格导造研居矿千口清委。强如部统与思高增何军更，联出多江复热民王照新，他科材些议张象束J。',
        customerNickName: '乌龙茶',

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
.forward-tab {
  .link-text {
    max-width: 800px;
    color: #0078d6;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
