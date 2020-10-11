<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>