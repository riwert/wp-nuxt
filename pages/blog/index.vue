<template>
  <section id="blog">
    <div class="container">
      <h1>Blog</h1>
      <p>This is a blog page.</p>
      <ul class="posts">
        <li v-for="post in posts" :key="post.id">
          <nuxt-link v-bind:to="'/blog/' + post.id">{{ post.title }}</nuxt-link>
        </li>
      </ul>
      <nuxt-link v-bind:to="'/'" class="button--grey">Back</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog Nuxt App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is my blog description here.'},
        { hid: 'keywords', name: 'keywords', content: 'blog, nuxt, app'},
      ]
    }
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get(`https://jsonplaceholder.typicode.com/posts`);
    return { posts: posts }
  }
}
</script>

<style>
.posts {
  text-align: left;
}
</style>
