<template>
  <h1>Videos</h1>
  <div class="video-container">

  </div>
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
          description: '<p>Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.</p>'
        },
        {
          name: "Promise Basics",
          description: '<p>A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.</p>'
        },
        {
          name: "ES2015 Modules",
          description: '<p>An ES6 module is a file containing JS code. There’s no special module keyword; a module mostly reads just like a script. There are two differences.</p>'
        },
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
