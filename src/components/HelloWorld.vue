<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ bigCount }}</h1>
    <h1>{{ params.name }}</h1>
    <h1>{{ params.age }}</h1>
    <a-button type="primary" @click="changeCount">Count 加</a-button>
    <a-button type="primary" @click="changeBigCount">BigCount 加</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";

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
    let bigCount = ref(100);

    const changeBigCount = () => {
      bigCount.value = bigCount.value + 1;
    };
    watch(bigCount, () => {
      console.log("bigCount");
    });
    watch(
      () => params.age,
      () => {
        console.log("params.name");
      }
    );
    return { params, bigCount, changeBigCount };
  },
  data: () => ({
    count: 1,
  }),
  watch: {
    count() {
      console.log("count");
    },
  },
  methods: {
    changeCount() {
      this.count++;
      this.params.age++;
      this.bigCount++;
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
