<template>
  <div class="zz-card" :style="width ? { width: width + 'px' } : {}">
    <!-- 卡片描述 -->
    <div
      class="zz-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="zz-card-summary">
      {{ summary }}
    </div>
    <div v-else class="zz-card-summary">
      <slot></slot>
    </div>
    <footer class="zz-card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ZzCard',
  props: {
    width: {
      required: false,
      type: Number,
      default: 0
    },
    imgSrc: {
      required: false,
      type: String,
      default: ''
    },
    imgHeight: {
      // 高度
      retquired: false,
      type: Number,
      default: 0
    },
    // 卡片概要
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
