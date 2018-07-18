<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Otherc1/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Otherc1 from  '@/components/Otherc.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Otherc1
  }
}
</script>
