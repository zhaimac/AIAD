<template>
  <div>
    <v-form>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm8 md7 >
            <v-text-field
              label="Input a topic..."
              solo
            ></v-text-field>
          </v-flex>
        <v-flex xs12 sm3 md3 lg2>
          <v-select
            :items="items"
            label="Select A Type..."
            solo
          ></v-select>
        </v-flex>
        </v-layout>
      </v-container>
      <v-btn large
        :loading="loading"
        :disabled="loading"
        color="blue-grey"
        class="white--text"
        @click.native="toggleMessage"
      >
        Ask AI!
        <span slot="loader">Loading...</span>
      </v-btn>
    </v-form>
    <v-progress-circular
      :size="70"
      :width="7"
      color="blue-grey"
      indeterminate
      v-if="loading" 
    />
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'Inputs',
  data: () => ({
    items: ['Equity','ETF', 'Currency', 'Crypto', 'Option'],
    loading: false,
  }),
  methods: {
  	toggleMessage() {
      console.log('ask ai')
      self = this
      store.commit('clean_results')
      setTimeout(function(){
        self.loading = false
        store.commit('pull_results')
      }, 1000)
      this.loading = true
    }
  },
  watch: {
  }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>