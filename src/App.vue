<template>
 <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
 </v-app> 
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url("./assets/bg.png");
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
#nav {
  padding: 30px;
  text-align: right;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
