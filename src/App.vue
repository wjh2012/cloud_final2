<template>
   <div id="nav">
      <router-link to="/"><h1>Home</h1></router-link><br>
      <router-link to="/about"><h2>About</h2></router-link><br>
      <router-link to="/exercise1">실습1</router-link>&emsp;
      <router-link to="/exercise2">실습2</router-link>&emsp;
      <router-link to="/exercise3">실습3</router-link>&emsp;
      <router-link to="/wjh"> wjh </router-link>
   </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>