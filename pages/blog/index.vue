<template>
  <section id="blog" class="container">
    <h1>Blog</h1>
    <p>This is a blog page.</p>
    <ul class="posts">
      <li v-for="post in posts" :key="post.id">
        <nuxt-link v-bind:to="'/blog/' + post.id">{{ post.title }}</nuxt-link>
      </li>
    </ul>
    <nuxt-link v-bind:to="'/'" class="button--grey">Back</nuxt-link>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get(`https://jsonplaceholder.typicode.com/posts`);
    console.log(posts);
    return { posts: posts }
  }
}
</script>

<style>
.posts {
  text-align: left;
}
</style>
