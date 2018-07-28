<template>
  <v-container grid-list-md justify-center>
    <v-flex xs12>
      <br><br>
      <h2>Based on Landing Page Content</h2><br>
      <v-card>
        {{results.text}}
      </v-card>
    </v-flex>


    <v-flex xs12>
      <br><br>
      <v-card>
        <Resultchart/>
      </v-card>
    </v-flex>


    <v-flex xs12>
      <br><br>
      <h2>Recommend Phrases Based on AI</h2><br>
    </v-flex>
    <v-data-iterator
      :items="results.post"
      content-tag="v-layout"
      hide-actions
      row wrap
    >
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title class="subheading font-weight-bold">{{props.item[1]}}</v-card-title>
          <v-divider></v-divider>
          Importance={{props.item[0]}}
        </v-card>
      </v-flex>
    </v-data-iterator>

    <v-flex xs12 pt15>
      <br><br>
      <h2>NOT Recommend Phrases</h2><br>
    </v-flex>
    <v-data-iterator
      :items="results.neg"
      content-tag="v-layout"
      hide-actions
      row wrap
    >
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title class="subheading font-weight-bold">{{props.item[1]}}</v-card-title>
          <v-divider></v-divider>
          Importance={{props.item[0]}}
        </v-card>
      </v-flex>
    </v-data-iterator>

  </v-container>
</template>

<script>
import store from "@/store.js"
import Resultchart from '@/components/Resultchart.vue'

export default {
  name: 'Results',
  components: {
    Resultchart
  },
  computed:{
    results(){
      return store.state.results
    } 
  }
}
</script>