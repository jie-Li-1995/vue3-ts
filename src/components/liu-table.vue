<template>
  <div class="liuTable">
    <table cellpadding="0" cellspacing="0">
      <tr v-for="item in tableData" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <slot name="title" :data="item" />
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'liu-table',
  data: () => ({
    tableData: [] as any
  }),
  mounted (): void {
    this.initData()
  },
  methods: {
    initData (): void {
      const firstName = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨'
      const lastName = '壹贰叁肆伍陆柒捌玖拾'
      for (let i = 0; i < 10; i++) {
        console.log(this.tableData)
        const num = Math.floor(Math.random() * 10)
        this.tableData.push({
          name: firstName[num] + lastName[num],
          age: num + 10,
          id: Math.floor(Math.random() * 10000).toString()
        })
      }
    }
  }
})
</script>

<style lang="less" scoped>
.liuTable {
  padding: 0 200px;
  table {
    width: 100%;
    tr {
      &:nth-of-type(odd) {
        background: greenyellow;
        color: #ff6700;
      }
      width: 100%;
      td {
        width: 25%;
      }
    }
  }
}
</style>
