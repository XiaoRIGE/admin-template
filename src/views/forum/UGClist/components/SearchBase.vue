<template>
  <div class="search-box">
    <v-row justify="space-between">
      <v-col cols="9">
        <v-form>
          <v-row>
            <v-col cols="3">
              <v-text-field
                v-model="postContent"
                clearable
                label="内容"
                outlined
                hide-details
                dense
                placeholder="请输入"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="userName"
                label="发帖人名称"
                hide-details
                outlined
                dense
                placeholder="请输入"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-select
                v-model="identity"
                :items="identityItems"
                label="身份"
                hide-details
                outlined
                dense
                placeholder="请选择"
              ></v-select>
            </v-col>

            <v-col cols="3">
              <v-select
                v-model="groupName"
                :items="groupNameItems"
                label="社群名称"
                hide-details
                outlined
                dense
                placeholder="请选择"
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-select
                v-model="status"
                :items="statusItems"
                hide-details
                label="状态"
                outlined
                dense
                placeholder="请选择"
              ></v-select>
            </v-col>

            <v-col cols="5">
              <v-menu
                ref="menu"
                v-model="show"
                :eager="false"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                min-width="auto"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    :append-icon="icons.mdiCalendarRange"
                    outlined
                    dense
                    hide-details
                    label="发帖时间"
                    placeholder="请选择"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" range no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="show = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col class="btn-groups d-flex align-start justify-end" cols="2">
        <v-btn small width="56" height="32" class="mr-2">重置</v-btn>
        <v-btn
          small
          width="56"
          height="32"
          color="primary"
          class="mr-2"
          @click="handleClick"
        >
          搜索
        </v-btn>
        <img
          src="@/assets/images/svg/download.svg"
          class="cursor download-icon"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { mdiCalendarRange } from '@mdi/js'

export default {
  setup() {
    const selectList = reactive({
      identityItems: ['普通用户', 'VIP'],
      groupNameItems: ['奔驰EQC', 'GLB SUV', 'AMG GT'],
      statusItems: ['已通过', '未过审', '审核中', '已删除'],
    })

    const menuConfig = reactive({
      show: false,
    })

    const formState = reactive({
      postContent: '',
      userName: '',
      identity: '',
      groupName: '',
      status: '',
      date: [],
    })

    const handleClick = () => {
      console.log('表单信息', formState)
    }

    return {
      icons: { mdiCalendarRange },
      ...toRefs(menuConfig),
      ...toRefs(formState),
      ...toRefs(selectList),
      handleClick,
    }
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  margin-top: 8px;
  padding: 12px 20px;
}
.download-icon {
  display: inline-block;
  margin-top: 7px;
  width: 14px;
  height: 17px;
}
</style>
