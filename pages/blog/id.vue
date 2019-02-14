<template>
  <section id="post">
    <div class="container">
      <h1>Post {{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <div class="controls">
        <nuxt-link v-if="prevPost" v-bind:to="`/blog/${prevPost.id}`" class="button--green">Previous</nuxt-link>
        <nuxt-link v-bind:to="'/blog'" class="button--grey">Back</nuxt-link>
        <nuxt-link v-if="nextPost" v-bind:to="`/blog/${nextPost.id}`" class="button--green">Next</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.post.title} | Post Nuxt App`,
      meta: [
        { hid: 'description', name: 'description', content: 'This is my post description here.'},
        { hid: 'keywords', name: 'keywords', content: 'post, nuxt, app'},
      ]
    }
  },
  async asyncData(context) {
    const axios = context.$axios;
    const post = await axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const prevId = await parseInt(context.params.id) - 1;
    const prevPost = (prevId > 0) ? await axios.$get(`https://jsonplaceholder.typicode.com/posts/${prevId}`) : false;
    const nextId = await parseInt(context.params.id) + 1;
    const nextPost = (nextId <= 100) ? await axios.$get(`https://jsonplaceholder.typicode.com/posts/${nextId}`) : false;
    return {
      post: post,
      prevPost: prevPost,
      nextPost: nextPost
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
