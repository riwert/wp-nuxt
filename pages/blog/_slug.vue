<template>
  <section id="post" :class="'post-' + post.slug">
    <div class="content">
        <header>
          <h1>{{ post.title }}</h1>
        </header>
        <span v-if="post.image" class="image object">
          <img :src="post.image.url" :alt="post.image.alt" />
        </span>
        <div class="post-content" v-html="post.content"></div>
        <div class="controls">
          <nuxt-link v-bind:to="back_link.url" class="button">{{ back_link.text }}</nuxt-link>
        </div>
    </div>
  </section>
</template>

<script>
import replacer from '~/services/replacer';

export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.excerpt},
      ]
    }
  },
  async asyncData({ params, $axios, store, error }) {
    const posts = await $axios.$get(`${process.env.apiUrl}/posts?_embed&slug=${params.slug}`);
    if ( ! posts[0]) {
      return error({ statusCode: 404, message: 'Post not found' });
    }
    // replace wp links
    posts[0].content.rendered = replacer(posts[0].content.rendered);
    store.dispatch('setCurrentPage', posts[0]);
    const blog = store.state.config.blog.acf;
    return {
      post: {
        slug: posts[0].slug,
        title: posts[0].title.rendered,
        excerpt: posts[0].excerpt.rendered,
        content: posts[0].content.rendered,
        image: {
          url: (posts[0]._embedded['wp:featuredmedia']) ? posts[0]._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (posts[0]._embedded['wp:featuredmedia']) ? posts[0]._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      },
      back_link: {
        url: blog.back_link.url,
        text: blog.back_link.title,
      }
    }
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
