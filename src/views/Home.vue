<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button @click="changeLocale('cn')">中文</a-button>
    <a-button @click="changeLocale('en')">English</a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <h1>{{ $t('name') }}</h1>
    <h2>{{ $t('age') }}</h2>
    <hr />
    <h3>{{$store.state.count.count }}</h3>
    <a-button @click="$store.commit('increaseCount')">加</a-button>
    <a-button @click="$store.dispatch('asyncIncreaseCount')">async 加</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    changeLocale (locale = 'cn') {
      this.$i18n.locale = locale
    }
  }
})
</script>
