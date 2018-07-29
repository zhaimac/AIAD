import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results:'',
    loading:false,
    errors:null
  },
  mutations: {
    pull_results (state, url) {
      state.loading = true
      state.results=''
      state.errors = null

      const apiserver_url = "http://googlead.westus.azurecontainer.io"
      const api_url = apiserver_url + "/api/r?url=" + url
      fetch(api_url).then(
        function(response) {
          if (response.status !== 200) {
            response.json().then(function(data) {
              console.log(data);
              state.errors = {code:response.status , error:data}
              state.loading = false
              console.log('Looks like there was a problem. Status Code: ' + response.status);
            });
            state.loading = false
            return;
          }
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            state.results = data
            state.loading = false
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
        state.loading = false
      });
    }
  },
  actions: {
  }
})