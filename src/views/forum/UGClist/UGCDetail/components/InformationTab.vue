<template>
  <!-- <div class="information-tab"> -->
  <div class="py-4 information-tab d-flex">
    <div class="information-container">
      <div class="userinfo-box d-flex align-center">
        <v-avatar class="mr-4">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="userinfo-box__detail">
          <div class="userinfo-box__base d-flex align-center">
            <span class="userinfo-name">乌龙茶</span>
            <span class="userinfo-uid">（UID：23456787465）</span>
            <img src="@/assets/images/svg/start.svg" />
            <v-chip class="ml-1" color="#E8BD00" text-color="white" small>
              精华帖
            </v-chip>
            <v-chip class="ml-1" color="#0078D6" text-color="white" small>
              奔驰EQC
            </v-chip>
          </div>
          <span class="postDetail-tag">发帖时间：2022-08-13 13:24</span>
        </div>
      </div>
      <div class="topic-box">
        <div class="title-base mb-1">话题</div>

        <div class="topic-content">
          <v-chip
            v-for="(item, index) in topicList"
            :key="index"
            class="mr-3 mb-1 topic-content__item"
            color="#F4F4F4"
            text-color="#1A1A1A"
          >
            {{ item }}
          </v-chip>
        </div>
      </div>
      <div class="post-box">
        <div class="title-base mb-1">帖子内容</div>
        <div class="post-content">
          {{ postContent }}
        </div>
      </div>
    </div>
    <!-- 用户贴 -->
    <div class="media-container">
      <span class="media-title">图片&视频</span>
      <div class="media-box">
        <v-row class="media-row" align="center" dense>
          <v-col
            v-for="(item, n) in imgList"
            :key="n"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img
              :src="item"
              :lazy-src="item"
              aspect-ratio="1"
              class="grey lighten-2 media-content"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- todo 转发帖 转发活动帖-->
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: '',
  components: {},
  props: {},
  emits: [],
  setup() {
    const imgList = ref([
      'https://img1.baidu.com/it/u=277621542,701891578&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img1.baidu.com/it/u=2232913577,1504072329&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=2387371001,275538050&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=1084498615,2282897398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img2.baidu.com/it/u=2546235281,3003459764&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=3175477632,1254330285&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img1.baidu.com/it/u=99128354,897877983&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img2.baidu.com/it/u=1519886766,2779771256&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'http://t13.baidu.com/it/u=468335686,2026826852&fm=224&app=112&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=2963266488,2946937947&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img1.baidu.com/it/u=1477348698,2573858264&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'http://t14.baidu.com/it/u=3221298077,2423837485&fm=224&app=112&f=JPEG?w=500&h=500',
    ])
    const topicList = ref([
      '#北京秋游#',
      '#奔驰EQE#',
      '#露营#',
      '#全新EQE#',
      '#全新EQE#',
      '#全新EQE极感唤醒空间#',
      '全新EQE',
      '#北京秋游#',
      '#全新EQE极感唤醒空间#',
      '#露营#',
      '#全新EQE极感唤醒空间#',
    ])
    const postContent = ref(
      '证起常感分求者具出千，示经此数布市权些，才励我世指造及。历由成群统始红志包空，般县结走和不军们，#露营#Q集计还何否。大什张主对相严入林际满，公半从题标深子进到，十达屈利油老劳每圆。才值感声子算再验形族备，易线圆用丽指被秩。证起常感分求者具出千，示经此数布市权些，才励我世指造及。历由成群统始红志包空，般县结走和不军们，那火Q集计还何否。大什张主对相严入林际满，公半从题标深子进到#全新EQE#物光系林年用明看收与，青个强它维易难府进组，委团孤七规则苏层。持正理常持决它再取准他过部，干算速其平N代革件革。五制领和各路开本所几教，术被其区油导布收必几，并称肃京相厂KC角。务要等走到历行，林革车看于则，料求C装件。物光系林年用明看收与，青个强它维易难府进组，委团孤七规则苏层。持正理常持决它再取准他过部，干算速其平N代革件革。五制领和各路开本所几教，术被其区油导布收必几，并称肃京相厂KC角。务要等走到历行，林革车看于则，料求C装件。'
    )
    return {
      imgList,
      topicList,
      postContent,
    }
  },
}
</script>

<style lang="scss" scoped>
.information-tab {
  // height: calc(100vh - 210px);
  // overflow-y: auto;
  .information-container {
    flex: 1;
    margin-right: 40px;
    .userinfo-box {
      &__detail {
        .userinfo-name {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #1a1a1a;
        }
        .userinfo-uid {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #9f9f9f;
        }
        .postDetail-tag {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #5c5c5c;
        }
      }
    }
    .title-base {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #5c5c5c;
    }
    .topic-box {
      margin-top: 10px;
      .topic-content__item {
        height: 28px;
      }
    }
    .post-box {
      .post-content {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1a1a1a;
      }
    }
  }
  .media-container {
    width: 390px;
    .media-title {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #5c5c5c;
    }
    .media-row {
      margin: 0;
    }
    .media-content {
      width: 120px;
      height: 120px;
    }
  }
}
</style>
