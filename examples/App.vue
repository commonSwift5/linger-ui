<template>
  <div id="app">
    <zz-card>
      <template #summary>123456</template>
      <template #footer> Lorem, ipsum.</template>
    </zz-card>
    <zz-card :width="300" imgSrc="bg1.jpg" summary="真漂亮">
      <template #footer>
        <div>price:50</div>
        <div>sum:10</div>
      </template>
    </zz-card>
    <zz-card :width="500" :imgHeight="162" imgSrc="bg2.jpg">
      妖娆的身姿
      <template #footer>
        <div>price:500</div>
        <div>color:#880088</div>
      </template>
    </zz-card>
    <Demo />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
