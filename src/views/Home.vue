<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button @click="changeLocale">changeLocale</a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <h1>{{ $t('name') }}</h1>
    <h2>{{ $t('age') }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    changeLocale () {
      console.log(this.$i18n.locale)
      // console.log(this.$i18n.se
    }
  }
})
</script>
