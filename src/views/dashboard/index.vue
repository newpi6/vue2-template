<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}
      <div v-for="n in 100">
        {{ n }}
      </div>
    </div>
  </div></template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
