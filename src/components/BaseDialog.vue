<template>
  <v-dialog v-model="showVisible" max-width="444px">
    <v-card>
      <div class="dialog-title px-6 pt-4 pb-6">{{ title }}</div>
      <div class="dialog-content px-6 pb-4">
        {{ content }}
      </div>
      <v-card-actions class="d-flex justify-end pb-3">
        <v-btn small color="#5C5C5C" text @click="handleClose">
          {{ cancelText }}
        </v-btn>
        <v-btn
          small
          :color="isWarn ? '#D92121' : '#0078D6'"
          text
          @click="handleConfirm"
        >
          {{ confirmText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BaseDialog',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '提醒',
    },
    content: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      default: '确认',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    cancelTextColor: {
      type: String,
      default: '#0078D6',
    },
    isWarn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible', 'handleConfirm'],
  setup(props, { emit }) {
    const showVisible = computed({
      get() {
        return this.visible
      },
      set(value) {
        emit('update:visible', value)
      },
    })
    const handleClose = () => {
      showVisible.value = false
    }
    const handleConfirm = () => {
      emit('handleConfirm')
      handleClose()
    }
    return { showVisible, handleClose, handleConfirm }
  },
})
</script>

<style lang="scss" scoped>
:deep(.v-dialog) {
  .dialog-title {
    font-weight: 600;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.87);
  }
  .dialog-content {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
  }
}

:deep(.v-dialog > .v-card > .v-card__title) {
  padding: 16px 24px;
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
