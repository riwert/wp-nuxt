<template>
  <section id="post">
    <div class="container">
      <h1>{{ post.title.rendered }}</h1>
      <div class="content" v-html="post.content.rendered"></div>
      <div class="controls">
        <nuxt-link v-bind:to="'/blog'" class="button">Back</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.post.title.rendered}`
    }
  },
  async asyncData({ params, $axios }) {
    const posts = await $axios.$get(`${process.env.apiUrl}/posts?slug=${params.slug}`);
    return {
      post: posts[0]
    };
  }
}
</script>

<style scoped>
.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
}
</style>
