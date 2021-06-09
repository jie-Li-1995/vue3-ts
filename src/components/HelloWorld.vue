<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ params.name }}</h1>
    <h1>{{ params.age }}</h1>
    <a-button type="primary" @click="changeCount">Count 加</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const params = reactive({
      name: "我是params name",
      age: 20,
    });
    return { params };
  },
  data: () => ({
    count: 1,
  }),
  methods: {
    changeCount() {
      this.count++;
      this.params.age++;
    },
  },
});
</script>

<style scoped lang="less">
.hello {
  h1 {
    color: #ff6700;
    margin-bottom: 20px;
  }
}
</style>
