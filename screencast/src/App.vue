<template>
  <h1>Videos</h1>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      videos: [
        {
          name: "ES6 Arow Functions",
          description: '<p>ES6 has some great ways to code which are easier to read and understand</p>'
        },
        {
          name: "Template Strings",
          description: ''
        }
      ]
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
