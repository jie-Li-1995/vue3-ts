<template>
  <div class="container">
    <header>
      <slot name="header">我是头部</slot>
    </header>
    <main>
      <slot name="main">我是主体</slot>
    </main>
    <footer>
      <slot name="footer">我是尾部</slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  data: () => ({}),
  methods: {}
})
</script>

<style scoped>
</style>
