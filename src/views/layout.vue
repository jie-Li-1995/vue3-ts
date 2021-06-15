<template>
  <div class="layout">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layout',
  setup () {
    return {}
  },
  data: () => ({}),
  mounted () {
    // do something
  },
  methods: {}
})
</script>

<style scoped>

</style>
