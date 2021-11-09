<template>
  <div class="home">
    <a-button @click="changeLocale('cn')">中文</a-button>
    <a-button @click="changeLocale('en')">English</a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <h1>{{ $t('name') }}</h1>
    <h2>{{ $t('age') }}</h2>
    <hr />
    <h3>{{ $store.state.count.count }}</h3>
    <a-button @click="$store.commit('increaseCount')">加</a-button>
    <a-button @click="$store.dispatch('asyncIncreaseCount')">async 加</a-button>
    <hr />
    <h1>{{ filterName }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/helloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
    baseInfo: null as {name?: string} | null
  }),
  computed: {
    filterName (): string {
      return this.baseInfo?.name || ''
    }
  },
  methods: {
    changeLocale (locale = 'cn') {
      this.$i18n.locale = locale
    }
  }
})
</script>
