<template>
  <div id="app">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="video in videos" :key="video.name" class="video-box">
        <img :src="video.thumbnail" alt="img">
        <div>
          <h3>{{video.name}}</h3>
          <div v-html="video.description"></div>
        </div>
      </div>
    </div>
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
          description: '<p>ES6 has some great ways to code which are easier to read and understand</p>',
          thumbnail: 'https://i.ytimg.com/vi/h33Srr5J9nY/maxresdefault.jpg'
        },
        {
          name: "Template Strings",
          description: '<p>Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.</p>',
          thumbnail: 'https://wesbos.com/static/ff07b19b6019f76c4150fe0eeec5cda5/73c85/template-strings.png'
        },
        {
          name: "Promise Basics",
          description: '<p>A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.</p>',
           thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--u31F9ZCR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/eslcp4eursfqj1vlq8au.png'
        },
        {
          name: "ES2015 Modules",
          description: '<p>An ES6 module is a file containing JS code. There’s no special module keyword; a module mostly reads just like a script. There are two differences.</p>',
          thumbnail: 'https://www.educative.io/api/page/5330288608542720/image/download/6288755792019456'
        },
      ]
    }
  }

}
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.video-container {
    .video-box {
      border: 1px solid black;
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      text-align: left;
      display: flex;
      justify-content: flex-start;
      img {
        width: 200px;
        padding: 10px;
        
      }
    }
  }
</style>
