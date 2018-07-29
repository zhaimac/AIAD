<template>
  <div class="home">
    <h1>AI Advisor</h1>
    <!-- <img src="../assets/flogo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Inputs/>
    <Results/>
    <Errors/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Inputs from  '@/components/Inputs.vue'
import Results from  '@/components/Results.vue'
import Errors from  '@/components/Errors.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    Inputs,
    Results,
    Errors
  }
}
</script>
