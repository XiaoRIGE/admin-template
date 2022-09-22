<template>
  <div class="normal-list">
    <SearchBase />

    <BaseTable :headers="headers" :desserts="desserts">
      <template v-slot:top>
        <BaseDialog
          :visible.sync="dialogDelete"
          content="确认要删除帖子吗？"
          is-warn
          @handleConfirm="deleteItemConfirm"
        />
      </template>

      <template v-slot:item.name="{ item }">
        <span class="link-text cursor ellipsis" @click="goDetail(item.id)">
          {{ item.name }}
        </span>
      </template>

      <template v-slot:item.operation="{ item }">
        <div class="d-flex align-center">
          <span class="cursor list-btn__delete" @click="deleteItem(item)">
            删除
          </span>
          <span class="cursor list-btn__hide">隐藏</span>
          <img class="cursor" src="@/assets/images/svg/more.svg" />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
<script>
import { ref, reactive, nextTick, defineComponent } from 'vue'

import BaseTable from '@/components/BaseTable.vue'
import BaseDialog from '@/components/BaseDialog.vue'
import { useRouter } from '@/utils'
import SearchBase from './SearchBase.vue'

export default defineComponent({
  name: '',
  // 注册你的组件
  components: { SearchBase, BaseTable, BaseDialog },
  props: {},
  emits: [],
  setup() {
    // NORMAL POST
    const headers = ref([
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
      { text: '发帖时间', value: 'postTime' },
      { text: '浏览数', value: 'browseNumber', sortable: false },
      { text: '转发数', value: 'forwardNumber', sortable: false },
      { text: '评论数', value: 'commentNumber', sortable: false },
      { text: '收藏数', value: 'collectionNumber', sortable: false },
      { text: '审核状态', value: 'auditStatus', sortable: false },
      { text: '操作', value: 'operation', sortable: false },
    ])
    const desserts = ref([
      {
        id: 1,
        name: '物光系林年用明看收与，青个强它维易难府进组，委团孤七规则苏层。持正理常持决它再取准他过部，干算速其平N代革件革。五制领和各路开本所几教，术被其区油导布收必几，并称肃京相厂KC角。务要等走到历行，林革车看于则，料求C装件。',
        customerNickName: '乌龙茶',
        identity: '普通用户',
        tribeName: '奔驰EQC',
        postTime: '2022-08-27 14:41',
        browseNumber: 10,
        forwardNumber: 10,
        commentNumber: 10,
        collectionNumber: 10,
        auditStatus: '已通过',
      },
      {
        id: 2,
        name: '取取织每龙飞身性见必，北社里级革美理工地只，十龙刷众什五束关。白亲她市空细构计，王受根走极因束。级等二难争际价高平中层律利达，起想格导造研居矿千口清委。强如部统与思高增何军更，联出多江复热民王照新，他科材些议张象束J。',
        customerNickName: '乌龙茶',
        identity: '普通用户',
        tribeName: '奔驰EQC',
        postTime: '2022-08-27 14:41',
        browseNumber: 10,
        forwardNumber: 10,
        commentNumber: 10,
        collectionNumber: 10,
        auditStatus: '已通过',
      },
    ])

    const mock = () => {
      for (let index = 0; index < 59; index++) {
        desserts.value.push({
          id: index + 10,
          name: 'Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.',
          customerNickName: '乌龙茶',
          identity: '普通用户',
          tribeName: '奔驰EQC',
          postTime: '2022-08-27 14:41',
          browseNumber: 5 + index,
          forwardNumber: 64 + index,
          commentNumber: 401 + index,
          collectionNumber: 780 + index,
          auditStatus: '已通过',
        })
      }
    }

    mock()

    const editedIndex = ref(-1)
    const editedItem = reactive({
      name: '',
      customerNickName: 0,
      identity: 0,
      tribeName: 0,
      postTime: 0,
    })
    const defaultItem = reactive({
      name: '',
      customerNickName: 0,
      identity: 0,
      tribeName: 0,
      postTime: 0,
    })
    const dialogDelete = ref(false)

    const deleteItem = (item) => {
      editedIndex.value = desserts.value.indexOf(item)
      editedItem.value = { ...item }
      dialogDelete.value = true
    }

    const closeDelete = () => {
      dialogDelete.value = false
      nextTick(() => {
        editedItem.value = { ...defaultItem }
        editedIndex.value = -1
      })
    }
    const deleteItemConfirm = () => {
      desserts.value.splice(editedIndex.value, 1)
      closeDelete()
    }

    const { router } = useRouter()
    const goDetail = (id) => {
      console.log('id', id)
      router.push({ name: 'UGCDetail', query: { id } })
    }
    return {
      headers,
      desserts,

      dialogDelete,
      deleteItem,
      deleteItemConfirm,
      goDetail,
    }
  },
})
</script>

<style lang="scss" scoped>
.list-btn__delete {
  color: #d92121;
}

.list-btn__delete,
.list-btn__hide {
  margin-right: 18px;
  padding: 0 !important;
  min-width: 30px !important;
  font-weight: 600;
}
.link-text {
  max-width: 220px;
  color: #0078d6;
  font-weight: 600;
  font-size: 14px;
}
</style>
