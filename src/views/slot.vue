<template>
  <div class="slot">
    <hr>
    <base-info>
      <template v-slot:header>
        <div style="color: red;background: #42b983;">
          我是重新定义的头部
        </div>
      </template>
    </base-info>
    <hr>
    <liu-table>
      <template #title="{data:{name}}">
        {{ name }}
      </template>
    </liu-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import baseInfo from '@/components/base-info.vue'
import liuTable from '@/components/liu-table.vue'

export default defineComponent({
  name: 'Home',
  components: {
    baseInfo,
    liuTable
  },
  methods: {}
})
</script>
