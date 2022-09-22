<template>
  <v-card class="ugc-detail">
    <div class="d-flex align-center mb-2">
      <img src="@/assets/images/svg/back.svg" class="cursor" />
      <h6 class="ugc-detail__title ml-3">UGC Detail</h6>
    </div>

    <v-tabs v-model="tab" background-color="deep-purple accent-4">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-information">
        <img src="@/assets/images/svg/information.svg" class="mr-2" />
        post information
      </v-tab>

      <v-tab href="#tab-comment">
        <img src="@/assets/images/svg/comment.svg" class="mr-2" />
        comments(2,000)
      </v-tab>

      <v-tab href="#tab-forward">
        <img src="@/assets/images/svg/forward.svg" class="mr-2" />
        forward(850)
      </v-tab>
      <v-tab href="#tab-like">
        <img src="@/assets/images/svg/likeFilles.svg" class="mr-2" />
        likes(1,200)
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <!-- 帖子详情 -->
      <v-tab-item value="tab-information" class="tab-all__maxHeight">
        <InformationTab />
      </v-tab-item>

      <!-- 评论详情 -->
      <v-tab-item value="tab-comment" class="tab-all__maxHeight">
        <CommentsTab />
      </v-tab-item>

      <!-- 转发列表 -->
      <v-tab-item value="tab-forward" class="tab-all__maxHeight">
        <ForwardTab />
      </v-tab-item>

      <!-- 点赞列表 -->
      <v-tab-item value="tab-like" class="tab-all__maxHeight">
        <LikesTab />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import { useRouter } from '@/utils'
import { computed, ref } from 'vue'
import InformationTab from './components/InformationTab.vue'
import CommentsTab from './components/CommentsTab.vue'
import ForwardTab from './components/ForwardTab.vue'
import LikesTab from './components/LikesTab.vue'

export default {
  name: '',
  components: { InformationTab, CommentsTab, ForwardTab, LikesTab },
  props: {},
  emits: [],
  setup() {
    const { route } = useRouter()
    const id = computed(() => route.value.query.id)
    const tab = ref(null)
    const text = ref(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    )
    return { id, tab, text }
  },
}
</script>

<style lang="scss" scoped>
.ugc-detail {
  //   height: calc(100vh - 96px);
  //   overflow: auto;
  padding: 16px 24px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12) !important;
  &__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #1a1a1a;
  }
  .tab-all__maxHeight {
    // height: calc(100vh - 210px);
    height: calc(100vh - 220px);
    overflow: auto;
  }
}
</style>
