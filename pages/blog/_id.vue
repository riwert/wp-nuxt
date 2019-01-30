<template>
  <section id="post" class="container">
    <h1>Post {{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div class="controls">
      <nuxt-link v-if="prevPost" v-bind:to="`/blog/${prevPost.id}`" class="button--green">Previous</nuxt-link>
      <nuxt-link v-bind:to="'/blog'" class="button--grey">Back</nuxt-link>
      <nuxt-link v-if="nextPost" v-bind:to="`/blog/${nextPost.id}`" class="button--green">Next</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    const axios = context.$axios;
    const post = await axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const prevId = await parseInt(context.params.id) - 1;
    const prevPost = (prevId > 0) ? await axios.$get(`https://jsonplaceholder.typicode.com/posts/${prevId}`) : false;
    const nextId = await parseInt(context.params.id) + 1;
    const nextPost = (nextId <= 100) ? await axios.$get(`https://jsonplaceholder.typicode.com/posts/${nextId}`) : false;
    console.log(post);
    return {
      post: post,
      prevPost: prevPost,
      nextPost: nextPost
    };
  }
}
</script>

<style>
h1,
p {
  text-align: center;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
}
</style>
