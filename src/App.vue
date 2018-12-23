<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/users/10" class="nav-link">User - 10</router-link>
      <router-link to="/users/12" class="nav-link">User - 12</router-link>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
