<template>

  <v-container grid-list-md justify-center v-if="errors">
    <v-flex xs12>
      <br><br>
      <h2>Opps, got some errors</h2><br>
      <v-card>
        {{errors.error}}
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import store from "@/store.js"

export default {
  name: 'Errors',
  computed:{
    errors(){
      return store.state.errors
    }
  }
}
</script>