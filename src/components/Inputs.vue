<template>
  <div>
    <v-form>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm8 md7 >
            <v-text-field  v-model="landing_url"
              label="Input the Landing Page Url..."
              solo
            ></v-text-field>
          </v-flex>
        <v-flex xs12 sm3 md3 lg2>
          <v-select
            :items="items"
            label="Select A Type..."
            value= "Window"
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
        @click.native="ask_api"
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
    items: ['Window'],//['Equity','ETF', 'Currency', 'Crypto', 'Option'],
    landing_url: 'https://www.4feldco.com/Windows/'
  }),
  methods: {
  	ask_api() {
      store.commit('pull_results', this.$data.landing_url)
    }
  },
  computed:{
    has_result(){
      return store.state.results!=""
    },
    loading(){
      return store.state.loading
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