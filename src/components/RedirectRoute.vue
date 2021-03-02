<template>
  <div>
<!--    <App v-if="this.$session.get("user")"-->
    <Login />
  </div>
</template>

<script>
import Login from '@/views/Login'

export default {
  name:"RedirectRoute",
  components:{
    Login
  },
}
</script>

<style>
body {
  background-image: url("../../public/img/background.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  min-height: 100%;
  height: 100%;
}
</style>