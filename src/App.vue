<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/profil">Mon profil</router-link> |
      <router-link to="/users">Liste utilisateurs</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: aquamarine;
}

h3, li, p, td, th, label {
  color: white;
}

span {
  visibility: hidden
}

.lienBlanc {
  color: white;
}
.lienBlanc:hover {
  color: white;
  text-decoration: none;
}

</style>