<template>
  <div class="zz-button">
    <button :class="[classSize, classType]">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'ZzButton',
  props: {
    size: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  },
  computed: {
    classSize() {
      return `zz-button-${this.size}`
    },
    classType() {
      return `zz-button-${this.type}`
    }
  }
}
</script>

<style></style>
