import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results:[]
  },
  mutations: {
    clean_results(state){
      state.results = []
    },
    pull_results (state) {
      fetch('http://adxvm.westus.azurecontainer.io/api/r?url=http%3A%2F%2Fwww.excel-windows.com%2Fghl%2Findex.cfm%3Fctid%3D3243%26chid%3D603'
      )
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            state.results = data
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }
  },
  actions: {
  }
})