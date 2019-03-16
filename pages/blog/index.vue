<template>
  <section id="blog" :class="'page-' + slug">
    <div class="content">
      <header>
        <h1>{{ title }}</h1>
      </header>
      <div class="subsite-content" v-html="content"></div>
      <div v-if="posts" class="posts">
        <Post v-for="post in posts" :key="post.id" :raw-post="post" />
      </div>
    </div>
    <span v-if="image" class="image object">
      <img :src="image.url" :alt="image.alt" />
    </span>
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
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.excerpt},
      ]
    }
  },
  async asyncData({ $axios, store, error }) {
    const slug = 'blog';
    const posts = await $axios.$get(`${process.env.apiUrl}/posts?_embed`);
    const page = store.getters.getPageBySlug(slug);
    if ( ! page) {
      return error({ statusCode: 404, message: 'Page not found' });
    }
    store.dispatch('setCurrentPage', page);
    return {
      posts: posts,
      slug: page.slug,
      title: page.title.rendered,
      excerpt: page.excerpt.rendered,
      content: page.content.rendered,
      image: {
        url: (page._embedded['wp:featuredmedia']) ? page._embedded['wp:featuredmedia'][0].source_url : null,
        alt: (page._embedded['wp:featuredmedia']) ? page._embedded['wp:featuredmedia'][0].title.rendered : null,
      },
    }
  }
}
</script>

<style>

</style>
