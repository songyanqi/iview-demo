<template>
  <div id="app">
    <AppContainer/>
    
  </div>
</template>

<script>
export default {
  components : {
    AppContainer : () => import ('@/components/Container')
  }
}
</script>

<style lang="scss">
* {
  padding:0;
  margin:0;
  box-sizing:border-box;
  }
html,body {
    height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
