<template>
  <div id="nav">
    <router-link :to="{name: 'home'}" v-slot="{navigate, isActive}">
      <h1 :class="{'active': isActive}" @click="navigate">Home</h1>
    </router-link>
    |
    <router-link :to="{name: 'about'}" v-slot="{navigate, isActive}">
      <h1 :class="{'active': isActive}" @click="navigate">about</h1>
    </router-link>
    |
    <router-link :to="{name: 'slot'}">Slot</router-link>
  </div>
  <router-view />
</template>

<style lang="less">
body {
  padding-left: calc(100vw - 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  h1 {
    display: inline-block;
    &.active {
      color: red;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
