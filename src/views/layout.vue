<template>
  <div class="layout">
    <div class="tw-flex tw-justify-around">
      <router-link :to="{name: 'home'}" v-slot="{navigate, isActive}">
        <h1 :class="{'tw-text-primary': isActive}" @click="navigate">Home</h1>
      </router-link>
      <router-link :to="{name: 'about'}" v-slot="{navigate, isActive}">
        <h1 :class="{'tw-text': isActive}" @click="navigate">About</h1>
      </router-link>
      <router-link :to="{name: 'slot'}" v-slot="{navigate, isActive}">
        <h1 :class="{'tw-text-primary': isActive}" @click="navigate">Slot</h1>
      </router-link>
    </div>
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
