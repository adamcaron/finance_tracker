<template lang="pug">
  listings
</template>

<script>
import Listings from './Listings'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      results: 'Click to retrieve results'
    }
  },
  methods: {
    getListings: function () {
      this.$http
        .get('/api/')
        .then(response => {
          this.results = response.data.message
        })
        .catch(error => {
          console.error(error)
          this.results = `Not able to retrieve listings`
        })
    }
  },
  components: {
    Listings
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
