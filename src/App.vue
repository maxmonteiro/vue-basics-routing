<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/users" class="nav-link">Users</router-link>
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
