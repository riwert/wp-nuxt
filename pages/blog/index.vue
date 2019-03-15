<template>
  <section id="blog">
    <div class="container">
      <h1>Blog</h1>
      <div class="posts">
        <Post v-for="post in posts" :key="post.id" :raw-post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import Post from '~/components/Post.vue';

export default {
  components: {
    Post
  },
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
    const posts = await $axios.$get(`${process.env.apiUrl}/posts?_embed`);
    return {
      posts: posts
    }
  }
}
</script>

<style>

</style>
